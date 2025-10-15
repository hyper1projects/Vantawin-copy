import React from 'react';
import { Button } from '@/components/ui/button';

const BottomBanner: React.FC = () => {
  return (
    <div className="relative h-48 rounded-xl p-6 flex items-center justify-between overflow-hidden bg-vanta-accent-blue">
      <div className="relative z-10 flex items-center gap-6">
        {/* Placeholder for player image */}
        <img src="/public/placeholder.svg" alt="Player" className="h-32 w-32 object-cover rounded-full" />
        <div className="text-white">
          <h2 className="text-2xl font-bold mb-2">FOR STATS, LATEST SCORES & NEWS!</h2>
          <Button className="bg-white text-vanta-blue-dark hover:bg-gray-100 rounded-lg px-6 py-2 font-semibold">
            CLICK HERE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;