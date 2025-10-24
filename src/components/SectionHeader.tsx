"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  className?: string;
  textColor?: string; // Added textColor prop
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className, textColor = "text-white" }) => { // Default to text-white
  return (
    <div className={cn("flex items-center justify-between p-4", className)}>
      <h2 className={cn("text-lg font-semibold", textColor)}>{title}</h2> {/* Applied textColor here */}
    </div>
  );
};

export default SectionHeader;