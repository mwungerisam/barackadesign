/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ContactDetails {
  phoneRaw: string;
  phoneFormatted: string;
  telLink: string;
  whatsappNumber: string;
  whatsappLink: string;
  email: string;
  emailLink: string;
  location: {
    city: string;
    country: string;
    district: string;
    address: string;
    coordinates: string;
    latitude: number;
    longitude: number;
    googleMapsUrl: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    timezone: string;
  };
}

export const CONTACT_DETAILS: ContactDetails = {
  phoneRaw: '+250789320757',
  phoneFormatted: '+250 789 320 757',
  telLink: 'tel:+250789320757',
  whatsappNumber: '250789320757',
  whatsappLink: 'https://wa.me/250789320757',
  email: 'atelier@barackdesign.com',
  emailLink: 'mailto:atelier@barackdesign.com',
  location: {
    city: 'Kigali',
    country: 'Rwanda',
    district: 'Nyarugenge / Downtown Atelier',
    address: 'KN 3 Ave & Boulevard de la Révolution, Kigali, Rwanda',
    coordinates: "1°57'13.0\"S 30°03'38.0\"E",
    latitude: -1.953611,
    longitude: 30.060556,
    googleMapsUrl: 'https://maps.google.com/?q=-1.953611,30.060556(BARACK+DESIGN+Atelier+Kigali)',
  },
  hours: {
    weekdays: '08:30 – 18:30 CAT',
    saturday: '09:00 – 16:00 CAT',
    sunday: 'By Appointment Only',
    timezone: 'Central Africa Time (UTC+2)',
  },
};

/**
 * Generate a pre-filled WhatsApp link for quotes, projects, or inquiries
 */
export function getWhatsAppUrl(params?: {
  context?: string;
  referenceId?: string;
  service?: string;
  quantity?: number;
  total?: string;
}): string {
  const base = 'https://wa.me/250789320757';
  if (!params) {
    const defaultMsg = encodeURIComponent(
      'Hello BARACK DESIGN atelier, I would like to inquire about your vector design, brand systems, and production services.'
    );
    return `${base}?text=${defaultMsg}`;
  }

  let text = `Hello BARACK DESIGN Atelier,\n`;
  if (params.referenceId) {
    text += `\nI would like to proceed with my quotation reference: *${params.referenceId}*`;
  }
  if (params.service) {
    text += `\nService / Product: *${params.service}*`;
  }
  if (params.quantity) {
    text += `\nQuantity: *${params.quantity}*`;
  }
  if (params.total) {
    text += `\nEstimated Total: *${params.total}*`;
  }
  if (params.context) {
    text += `\nDetails: ${params.context}`;
  }
  text += `\nPlease let me know the next steps for prepress proofing and dispatch.`;

  return `${base}?text=${encodeURIComponent(text)}`;
}
