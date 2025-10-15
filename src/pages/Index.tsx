import React from 'react';
import BottomBanner from '@/components/BottomBanner';
import PointsMultiplierSection from '@/components/PointsMultiplierSection';
import TopGamesSection from '@/components/TopGamesSection';
import { Card, CardContent } from '@/components/ui/card';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-vanta-blue-dark text-vanta-text-light">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-1 gap-6">
          <TopGamesSection />
          <PointsMultiplierSection />
          <BottomBanner />
        </div>
      </div>
    </div>
  );
};

export default Index;