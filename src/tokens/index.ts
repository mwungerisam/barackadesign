import { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Works', href: '#works', id: 'works' },
  { label: 'Services', href: '#services', id: 'services' },
  { label: 'Instant Quote', href: '#quote', id: 'quote' },
  { label: 'Vector Lab', href: '#vector-lab', id: 'vector-lab' },
  { label: 'Studio', href: '#studio', id: 'studio' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const DESIGN_TOKENS = {
  colors: {
    canvas: '#090A0D',
    surface: '#11141A',
    surfaceRaised: '#161B24',
    surfaceHover: '#1D2330',
    border: 'rgba(255, 255, 255, 0.08)',
    borderStrong: 'rgba(255, 255, 255, 0.16)',
    platinum: '#F8FAFC',
    chromeLight: '#E2E8F0',
    muted: '#94A3B8',
    subtle: '#64748B',
    accentVector: '#38BDF8',
  },
  typography: {
    fontDisplay: 'var(--font-display, "Outfit", sans-serif)',
    fontBody: 'var(--font-body, "Plus Jakarta Sans", sans-serif)',
    fontMono: 'var(--font-mono, "Space Mono", monospace)',
  },
} as const;
