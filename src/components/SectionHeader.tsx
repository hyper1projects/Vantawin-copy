"use client";

import React from 'react';
import { cn } from '@/lib/utils'; // Assuming cn utility is available for class merging

interface SectionHeaderProps {
  title: string;
  bgColor?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, bgColor, className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 rounded-t-xl",
        bgColor ? `bg-[${bgColor}]` : "bg-vanta-blue-medium", // Use dynamic background color or a default
        className
      )}
    >
      <h3 className="text-lg font-semibold text-vanta-text-light">{title}</h3>
      {/* You can add more elements here if needed, like a "View All" button */}
    </div>
  );
};

export default SectionHeader;