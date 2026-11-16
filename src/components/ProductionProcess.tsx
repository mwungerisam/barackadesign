import React from 'react';
import { ShieldCheck, Cpu, Layers, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProductionProcessProps {
  onOpenQuote: () => void;
}

export const ProductionProcess: React.FC<ProductionProcessProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      num: "01",
      title: "Brief & Preflight Prepress",
      desc: "Our prepress engineers verify your vector artwork, resolution (min 300 DPI), Pantone spot colors, and 3mm bleed margins before press execution.",
      detail: "Zero Error Guarantee"
    },
    {
      num: "02",
      title: "Stock & Craft Selection",
      desc: "Choose from 350gsm–600gsm cardstock, DTF textile films, 510gsm outdoor PVC, rigid packaging board, and metallic hot foil stamping options.",
      detail: "Curated Material Samples"
    },
    {
      num: "03",
      title: "Precision Press & Production",
      desc: "Commercial high-speed offset printing, 3D embroidery machines, laser cutters, and UV curable wide-format printers execute your order.",
      detail: "Strict Color Calibration"
    },
    {
      num: "04",
      title: "QA & Kigali Fulfillment",
      desc: "Final trim inspection, foil registration audit, and packaged for pickup at Town Centre Building F5A-005 or courier delivery in Kigali.",
      detail: "Town Centre Pickup & Express Delivery"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#0B0D10] text-white border-b border-[#191919]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#808080] uppercase tracking-wider">
            <span>BARACK DESIGN</span>
            <span aria-hidden="true">·</span>
            <span className="text-[#C0C0C0]">Commercial Craft Standard</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            From Concept to <span className="metallic-text">Precision Production</span>
          </h2>
          <p className="text-sm text-[#808080] leading-relaxed">
            Our 4-step workflow guarantees that every physical print, apparel run, banner, or visual identity deck meets strict commercial standards.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-[#191919]/40 border border-[#191919] hover:border-[#808080]/30 p-6 rounded-2xl relative space-y-3 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-heading font-extrabold text-2xl text-[#C0C0C0]">
                    {s.num}.
                  </span>
                  <span className="text-[10px] font-mono text-[#808080] uppercase">{s.detail}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-xs text-[#808080] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#191919] flex items-center gap-1.5 text-[11px] text-[#C0C0C0] font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Production Verified</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-12 p-8 bg-[#191919] border border-[#2A2D35] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
          <div>
            <h3 className="font-heading font-bold text-xl text-white">Have Artwork Ready for Preflight Check?</h3>
            <p className="text-xs text-[#808080] mt-1">Upload your vector artwork or project specifications for an immediate commercial quotation.</p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#E5E5E5] hover:bg-white rounded-xl transition-colors shrink-0 shadow-lg"
          >
            Submit Specifications
          </button>
        </div>

      </div>
    </section>
  );
};
