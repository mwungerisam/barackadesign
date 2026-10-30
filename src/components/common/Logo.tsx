import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = true,
  wordmarkClassName = '',
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  const dimensionMap = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const textMap = {
    sm: 'text-sm tracking-tight',
    md: 'text-base tracking-tight font-bold',
    lg: 'text-xl tracking-tight font-bold',
    xl: 'text-2xl tracking-tighter font-extrabold',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Authentic BARACK DESIGN Medallion */}
      <div
        className={`relative ${dimensionMap[size]} shrink-0 rounded-full overflow-hidden bg-[#090A0D] border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.06)] flex items-center justify-center`}
      >
        {!imageFailed ? (
          <img
            src="/assets/aistudio/image_716280c1.png"
            alt="BARACK DESIGN Seal"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const target = e.currentTarget;
              if (!target.src.includes('/public/assets/')) {
                target.src = '/public/assets/aistudio/image_716280c1.png';
              } else {
                setImageFailed(true);
              }
            }}
          />
        ) : (
          /* High-fidelity Vector Fallback preserving the 'B' + dual pen-nib mark */
          <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full p-0.5"
            aria-hidden="true"
          >
            <circle cx="50" cy="50" r="48" fill="#090A0D" stroke="#E2E8F0" strokeWidth="2" />
            <path
              d="M50 4 C75.4 4 96 24.6 96 50 C96 75.4 75.4 96 50 96 Z"
              fill="url(#metallicGradientFallback)"
            />
            {/* Top Pen Nib & Bezier Path */}
            <path d="M50 35 L62 42 L50 49 L46 45 L50 35 Z" fill="#FFFFFF" />
            <path d="M62 42 Q72 42 72 32" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            {/* Bottom Pen Nib & Bezier Path */}
            <path d="M50 55 L62 62 L50 69 L46 65 L50 55 Z" fill="#FFFFFF" />
            <path d="M62 62 Q72 62 72 72" stroke="#FFFFFF" strokeWidth="2" fill="none" />
            <defs>
              <linearGradient id="metallicGradientFallback" x1="50" y1="4" x2="96" y2="96" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F8FAFC" />
                <stop offset="0.5" stopColor="#CBD5E1" />
                <stop offset="1" stopColor="#64748B" />
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>

      {showWordmark && (
        <span
          className={`font-['Outfit'] uppercase font-bold text-slate-100 whitespace-nowrap shrink-0 ${textMap[size]} ${wordmarkClassName}`}
        >
          BARACK <span className="font-light text-slate-400">DESIGN</span>
        </span>
      )}
    </div>
  );
};
