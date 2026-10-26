import React from 'react';

interface SectionLabelProps {
  number?: string;
  text: string;
  className?: string;
}

export const SectionLabel: React.FC<SectionLabelProps> = ({
  number,
  text,
  className = '',
}) => {
  return (
    <div className={`inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-medium text-white/50 mb-6 ${className}`}>
      {number && (
        <span className="text-[#7C6CF5] font-semibold">{number}</span>
      )}
      <span className="w-8 h-[1px] bg-white/20 inline-block" />
      <span>{text}</span>
    </div>
  );
};
