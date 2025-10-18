"use client";

import React from 'react';
import ImageCarousel from '@/components/ImageCarousel'; // Import the new ImageCarousel component

const Index = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-vanta-text-light mb-8 text-center">Welcome to VantaWin!</h1>
      <ImageCarousel />
      {/* You can add more content here later */}
      <div className="mt-8 text-center text-vanta-text-light">
        <p className="text-lg">Explore games, pools, and more!</p>
      </div>
    </div>
  );
};

export default Index;