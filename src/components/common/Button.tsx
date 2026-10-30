import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

export interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconPosition = 'right',
  className = '',
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: 'text-xs py-1.5 px-3.5 gap-1.5',
    md: 'text-sm py-2 px-4.5 gap-2',
    lg: 'text-base py-3 px-6 gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-b from-white via-slate-100 to-slate-200 text-slate-950 font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.4),0_0_12px_rgba(255,255,255,0.15)] hover:from-white hover:to-slate-100 active:bg-slate-300 border border-white/60',
    secondary:
      'bg-[#12151D] text-slate-200 hover:bg-[#181D26] active:bg-[#1E2430] border border-white/10 hover:border-white/20 font-medium',
    outline:
      'bg-transparent text-slate-300 hover:text-white border border-white/15 hover:border-white/30 font-medium hover:bg-white/[0.03]',
    ghost:
      'bg-transparent text-slate-400 hover:text-white hover:bg-white/[0.04] font-medium',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.015 }}
      whileTap={{ scale: disabled ? 1 : 0.985 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
      disabled={disabled}
      className={`inline-flex items-center justify-center font-['Outfit'] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </motion.button>
  );
};
