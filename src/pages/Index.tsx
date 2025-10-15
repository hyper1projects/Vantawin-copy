import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import PromotionalBanners from '@/components/PromotionalBanners';
import LeaderboardCard from '@/components/LeaderboardCard';
import PointsMultiplierSection from '@/components/PointsMultiplierSection';
import PredictRedeemCard from '@/components/PredictRedeemCard';
import TopGamesSection from '@/components/TopGamesSection';
import BottomBanner from '@/components/BottomBanner';
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-vanta-blue-dark text-vanta-text-light">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <PromotionalBanners />
              <PointsMultiplierSection />
              <TopGamesSection />
              <BottomBanner />
            </div>
            <div className="lg:col-span-1 flex flex-col gap-6">
              <LeaderboardCard />
              <PredictRedeemCard />
            </div>
          </div>
          <MadeWithDyad />
        </main>
      </div>
    </div>
  );
};

export default Index;