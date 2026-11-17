import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { APPROVED_SERVICES } from '../data/servicesData';
import { ProductDetailModal } from './ProductDetailModal';

interface FeaturedProductsProps {
  onOpenQuote: (categoryId?: string, productId?: string) => void;
}

const featured = [
  { categoryId: 'printing-paper', productId: 'business-card-printing' },
  { categoryId: 'printing-paper', productId: 'flyers' },
  { categoryId: 'apparel-textile', productId: 'custom-tshirt-printing' },
  { categoryId: 'promotional-products', productId: 'custom-mug-printing' },
  { categoryId: 'large-format', productId: 'roll-up-banners' },
  { categoryId: 'stickers-packaging', productId: 'product-labels' }
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ onOpenQuote }) => {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const activeCategory = APPROVED_SERVICES.find((category) => category.subitems.some((item) => item.id === activeProductId));
  const activeProduct = activeCategory?.subitems.find((item) => item.id === activeProductId);

  return (
  <section id="featured-products" className="border-b border-[#E5E5E5] bg-white py-14 sm:py-16" aria-labelledby="featured-heading">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#666666]">Featured products</p>
          <h2 id="featured-heading" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">Start with a product.</h2>
        </div>
        <p className="max-w-md text-sm leading-6 text-[#666666]">Options and prices are confirmed after we review your brief.</p>
      </div>
      <div className="mt-6 grid border-l border-t border-[#E5E5E5] sm:grid-cols-2 lg:grid-cols-3">
        {featured.map(({ categoryId, productId }) => {
          const category = APPROVED_SERVICES.find((service) => service.id === categoryId);
          const product = category?.subitems.find((item) => item.id === productId);
          if (!category || !product) return null;
          return (
            <button key={productId} onClick={() => setActiveProductId(productId)} className="group flex min-h-24 items-center justify-between gap-4 border-b border-r border-[#E5E5E5] px-4 py-4 text-left transition hover:bg-[#F5F5F5] sm:px-5">
              <span>
                <span className="block text-xs text-[#666666]">{category.title}</span>
                <span className="mt-1 block text-base font-medium text-[#111111]">{product.name}</span>
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-[#666666] transition-transform group-hover:translate-x-1" />
            </button>
          );
        })}
      </div>
    </div>
    {activeCategory && activeProduct && (
      <ProductDetailModal
        category={activeCategory}
        product={activeProduct}
        onClose={() => setActiveProductId(null)}
        onSelectProduct={(item) => setActiveProductId(item.id)}
        onRequestQuote={(categoryId, productId) => { setActiveProductId(null); onOpenQuote(categoryId, productId); }}
      />
    )}
  </section>
  );
};
