"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button'; // Import the Button component

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
      <h2 className="text-white text-xl font-semibold">{title}</h2>
      
      {/* Buttons for All, Live, Upcoming */}
      <div className="flex space-x-2">
        <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700 bg-transparent h-8 px-3 text-sm">All</Button>
        <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700 bg-transparent h-8 px-3 text-sm">Live</Button>
        <Button variant="outline" className="text-white border-gray-600 hover:bg-gray-700 bg-transparent h-8 px-3 text-sm">Upcoming</Button>
      </div>
    </div>
  );
};

export default SectionHeader;