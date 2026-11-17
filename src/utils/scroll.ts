export const getScrollBehavior = (): ScrollBehavior => (
  window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
);

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: getScrollBehavior() });
};

export const scrollToSection = (element: HTMLElement | null) => {
  element?.scrollIntoView({ behavior: getScrollBehavior(), block: 'start' });
};