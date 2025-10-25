"use client";

import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import PointsMultiplierSection from '../components/PointsMultiplierSection';
import LiveGamesSection from '../components/LiveGamesSection';
import UpcomingGamesSection from '../components/UpcomingGamesSection';
import SectionHeader from '../components/SectionHeader';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-vanta-blue text-white p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Image Carousel with bottom margin */}
        <div className="mb-6"> {/* Added mb-6 here */}
          <ImageCarousel />
        </div>

        {/* Points Multiplier Section */}
        <PointsMultiplierSection />

        {/* Live Games Section */}
        <div className="bg-vanta-blue-medium rounded-lg shadow-sm pb-12">
          <SectionHeader title="Live Games" className="w-full bg-[#0D2C60] rounded-t-lg" textColor="text-white" />
          <LiveGamesSection />
        </div>

        {/* Upcoming Games Section */}
        <div className="bg-vanta-blue-medium rounded-lg shadow-sm pb-12">
          <SectionHeader title="Upcoming Games" className="w-full bg-[#0D2C60] rounded-t-lg" textColor="text-white" />
          <UpcomingGamesSection />
        </div>
      </div>
    </div>
  );
};

export default Index;