import React from 'react';

interface MetadataItem {
  label: string;
  isMono?: boolean;
}

interface MetadataTextProps {
  items: (string | MetadataItem)[];
  separator?: string;
  className?: string;
  size?: 'xs' | 'sm';
}

export const MetadataText: React.FC<MetadataTextProps> = ({
  items,
  separator = '·',
  className = '',
  size = 'xs',
}) => {
  const sizeClasses = size === 'xs' ? 'text-xs' : 'text-sm';

  return (
    <div
      className={`flex items-center flex-wrap gap-2 text-slate-400 font-['Plus_Jakarta_Sans'] ${sizeClasses} ${className}`}
    >
      {items.map((item, index) => {
        const isObject = typeof item === 'object';
        const label = isObject ? item.label : item;
        const isMono = isObject ? item.isMono : false;

        return (
          <React.Fragment key={index}>
            <span
              className={
                isMono
                  ? "font-['Space_Mono'] tracking-tight text-slate-300 tabular-nums"
                  : "text-slate-300"
              }
            >
              {label}
            </span>
            {index < items.length - 1 && (
              <span className="text-slate-600 select-none" aria-hidden="true">
                {separator}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
