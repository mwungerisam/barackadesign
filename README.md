# BARACK DESIGN

A responsive React, TypeScript, and Vite website for BARACK DESIGN in Kigali, Rwanda.

## Local development

Requirements: a Node.js release supported by the installed Vite version and npm.

1. Install the locked dependencies with `npm ci`.
2. Start the development server with `npm run dev`.
3. Run the TypeScript check with `npm run lint` (`tsc --noEmit`; this script does not run a separate lint engine).
4. Create a production build with `npm run build`.
5. Preview the production build locally with `npm run preview`.

Both local servers bind to `127.0.0.1`. The site does not require frontend environment variables or API secrets.

There is currently no automated unit or end-to-end test suite configured. Verify important customer journeys in a browser before release.

Navigation views use URL hashes (for example, `#services`) so they can be opened directly and restored with browser Back/Forward.

## Quotation requests

The quote and contact forms prepare a message for WhatsApp. The visitor must open WhatsApp and send the message. This frontend does not upload artwork, store or transmit enquiries, or provide online prices.

The optional artwork picker accepts PDF, PNG, JPG, or SVG files up to 10 MB for reference only. The visitor must attach the file themselves in WhatsApp.

## Product imagery

Service and product images are illustrative references. They are not represented as a verified record of completed BARACK DESIGN client work. Local production, apparel, identity, display, and packaging photos are optimized WebP assets; some illustrative catalogue images are served by Unsplash and require an internet connection.
