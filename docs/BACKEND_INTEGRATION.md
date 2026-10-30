# BARACK DESIGN — Backend Integration & Production Blueprint

This document specifies the target production backend architecture for the BARACK DESIGN multi-step quotation and prepress management engine.

---

## 1. System Architecture Diagram

```
[ Next.js / Vite SPA Client ]
              │
              ├── (1) Request S3/GCS Pre-Signed Upload URL
              │    └── [ POST /api/v1/quotes/artwork-presigned-url ]
              │
              ├── (2) Direct Multipart Upload (Avoids Server Buffering for 500MB+ .AI files)
              │    └── [ Google Cloud Storage / AWS S3 Bucket: barack-client-assets ]
              │
              ├── (3) Submit Validated Quotation Payload
              │    └── [ POST /api/v1/quotes ]
              │
    [ Node.js / Express / Fastify Server ]
              │
              ├── (4) Store Quote Entity (PostgreSQL + Drizzle ORM)
              │
              ├── (5) Enqueue Pre-Press Validation Job (BullMQ / Redis)
              │    └── [ Worker: Ghostscript / PDF.js verifies CMYK, DPI >= 300, Font Outlines ]
              │
              ├── (6) Webhooks / Integration Triggers
                   ├── Slack / Discord Studio Channel: Alert Production Floor
                   ├── Resend / SendGrid: Client Branded Quotation Confirmation
                   └── Stripe: Create 50% Production Deposit Payment Intent
```

---

## 2. Database Schema (PostgreSQL / Drizzle ORM)

```typescript
import { pgTable, text, timestamp, integer, numeric, boolean, jsonb, uuid } from 'drizzle-orm/pg-core';

// Quotes Table
export const quotes = pgTable('quotes', {
  id: uuid('id').primaryKey().defaultRandom(),
  referenceId: text('reference_id').notNull().unique(), // e.g. "BD-QUOTE-2026-8491"
  status: text('status').notNull().default('draft'), // draft, under_review, approved, in_production, dispatched
  serviceId: text('service_id').notNull(), // dtf, clothing, mugs, cups, flyers, stamps, banners, graphic-design
  quantity: integer('quantity').notNull(),
  options: jsonb('options').notNull(), // { size: '...', peel: '...' }
  unitPrice: numeric('unit_price', { precision: 10, scale: 2 }).notNull(),
  subtotal: numeric('subtotal', { precision: 10, scale: 2 }).notNull(),
  shippingCost: numeric('shipping_cost', { precision: 10, scale: 2 }).notNull(),
  totalAmount: numeric('total_amount', { precision: 10, scale: 2 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Artwork Assets Table
export const artworkAssets = pgTable('artwork_assets', {
  id: uuid('id').primaryKey().defaultRandom(),
  quoteId: uuid('quote_id').references(() => quotes.id, { onDelete: 'cascade' }),
  fileName: text('file_name').notNull(),
  storageKey: text('storage_key').notNull(), // S3/GCS Object Key
  mimeType: text('mime_type').notNull(),
  fileSizeBytes: integer('file_size_bytes').notNull(),
  colorSpace: text('color_space').default('CMYK'),
  resolutionDpi: integer('resolution_dpi').default(300),
  isVector: boolean('is_vector').default(true),
  fontsOutlined: boolean('fonts_outlined').default(true),
  prepressValidationStatus: text('prepress_validation_status').default('pending'), // passed, warnings, rejected
  validationErrors: jsonb('validation_errors'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Logistics & Delivery Table
export const deliveryLogistics = pgTable('delivery_logistics', {
  id: uuid('id').primaryKey().defaultRandom(),
  quoteId: uuid('quote_id').references(() => quotes.id, { onDelete: 'cascade' }),
  method: text('method').notNull(), // atelier_pickup, express_courier, white_glove_freight
  recipientName: text('recipient_name').notNull(),
  companyName: text('company_name'),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  addressLine1: text('address_line_1'),
  addressLine2: text('address_line_2'),
  city: text('city'),
  postalCode: text('postal_code'),
  country: text('country'),
  rushCadence: boolean('rush_cadence').default(false),
  specialInstructions: text('special_instructions'),
  trackingNumber: text('tracking_number'),
});
```

---

## 3. REST API Specification

### A. Pre-signed Upload URL
* **Route:** `POST /api/v1/quotes/artwork-presigned-url`
* **Request:**
  ```json
  {
    "fileName": "barack_logo_chest_print.ai",
    "mimeType": "application/illustrator",
    "fileSizeBytes": 45120000
  }
  ```
* **Response:**
  ```json
  {
    "uploadUrl": "https://storage.googleapis.com/barack-client-assets/uploads/2026/04/abc-123.ai?GoogleAccessId=...",
    "storageKey": "uploads/2026/04/abc-123.ai",
    "expiresIn": 900
  }
  ```

### B. Submit Quotation
* **Route:** `POST /api/v1/quotes`
* **Request:**
  ```json
  {
    "serviceId": "clothing",
    "selectedOptions": {
      "Garment Silhouette": "450 GSM Luxury Heavyweight Hoodie",
      "Embellishment Location": "Front Chest + Oversized Back Print"
    },
    "quantity": 50,
    "storageKey": "uploads/2026/04/abc-123.ai",
    "logistics": {
      "method": "express_courier",
      "recipientName": "Elena Vance",
      "companyName": "Atelier Vance",
      "email": "elena@atelier.studio",
      "phone": "+44 20 7946 0991",
      "addressLine1": "14 Bruton Street, Mayfair",
      "city": "London",
      "postalCode": "W1J 6QA",
      "country": "United Kingdom",
      "rushCadence": false
    }
  }
  ```
* **Response (HTTP 201 Created):**
  ```json
  {
    "status": "success",
    "data": {
      "quoteReferenceId": "BD-QUOTE-2026-8491",
      "totalAmount": 1900.00,
      "estimatedDispatch": "2026-11-08T14:00:00Z",
      "trackingPortalUrl": "https://barack.design/quotes/BD-QUOTE-2026-8491"
    }
  }
  ```

---

## 4. Prepress Validation Worker

When high-capacity vector files are uploaded, a background worker performs automated sanity checks before human press approval:
1. **CMYK Profile Check:** Verifies ink limits do not exceed 320% Total Area Coverage (TAC).
2. **Font Outlining:** Scans for missing embedded typefaces using `pdffonts` or Ghostscript.
3. **Resolution Invariants:** Flags raster image embeddings lower than 300 DPI at 100% printed scale.
4. **Bleed Verification:** Verifies 3.0mm external bleed perimeter on print items (flyers, banners, packaging).

---

## 5. Security & Commercial Safeguards
* **Rate Limiting:** IP-based rate limiting (10 quotes per hour per IP) via Redis sliding window to prevent quotation scraping.
* **Storage Hygiene:** Bucket lifecycle policies automatically delete abandoned presigned uploads older than 72 hours if no associated quote record is finalized.
* **Payment Deposit:** Stripe webhook `checkout.session.completed` automatically transitions quotation status from `approved` to `in_production` on the shop floor queue.
