import apparelImage from '../assets/images/apparel_textile_branding_1794043015458.webp';
import largeFormatImage from '../assets/images/large_format_display_1794043015815.webp';
import printProductionImage from '../assets/images/hero_print_branding_1794043015828.webp';

const PORTFOLIO_IMAGES = {
  print: printProductionImage,
  apparel: apparelImage,
  display: largeFormatImage
} as const;

export interface PortfolioReference {
  id: string;
  title: string;
  category: string;
  categoryId: string;
  image: string;
}

/** Illustrative product references only; these are not client case studies. */
export const PORTFOLIO_PROJECTS: PortfolioReference[] = [
  {
    id: 'print-reference',
    title: 'Print and stationery',
    category: 'Printing & Paper Products',
    categoryId: 'printing-paper',
    image: PORTFOLIO_IMAGES.print
  },
  {
    id: 'apparel-reference',
    title: 'Branded apparel',
    category: 'Apparel & Textile Branding',
    categoryId: 'apparel-textile',
    image: PORTFOLIO_IMAGES.apparel
  },
  {
    id: 'display-reference',
    title: 'Large-format displays',
    category: 'Large-Format Printing & Displays',
    categoryId: 'large-format',
    image: PORTFOLIO_IMAGES.display
  }
];
