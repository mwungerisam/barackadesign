export type ServiceSelectionId =
  | 'dtf'
  | 'clothing'
  | 'mugs'
  | 'cups'
  | 'flyers'
  | 'stamps'
  | 'banners'
  | 'graphic-design';

export interface ArtworkUpload {
  fileName: string;
  fileSize: string;
  fileType: string;
  colorMode: 'CMYK' | 'RGB' | 'PMS Spot Color';
  resolutionDPI: number;
  hasOutlinedFonts: boolean;
  notes: string;
}

export interface DeliveryLogistics {
  method: 'atelier_pickup' | 'express_courier' | 'white_glove_freight';
  recipientName: string;
  companyName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
  country: string;
  rushCadence: boolean;
  specialInstructions?: string;
}

export interface QuoteFormData {
  serviceId: ServiceSelectionId;
  selectedOptions: Record<string, string>;
  quantity: number;
  artwork: ArtworkUpload;
  logistics: DeliveryLogistics;
  quoteReferenceId: string;
  createdAt: string;
  estimatedUnitPrice: number;
  estimatedSubtotal: number;
  estimatedShipping: number;
  estimatedTotal: number;
}
