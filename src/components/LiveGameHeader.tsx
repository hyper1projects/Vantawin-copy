"use client";

import React from 'react';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils'; // Assuming cn utility is available for class merging

interface LiveGameHeaderProps {
  className?: string;
}

const LiveGameHeader: React.FC<LiveGameHeaderProps> = ({ className }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-between p-4 rounded-t-xl bg-[#0D2C60]",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
        </span>
        <h3 className="text-lg font-semibold text-red-500">Live</h3>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-vanta-text-light text-sm font-medium">Game View</span>
        <span className="text-vanta-text-light text-sm font-medium">{'>'}</span>
        <div className="p-2 rounded-full bg-[#2A4B8A]">
          <Star className="text-yellow-400" size={16} fill="currentColor" />
        </div>
      </div>
    </div>
  );
};

export default LiveGameHeader;