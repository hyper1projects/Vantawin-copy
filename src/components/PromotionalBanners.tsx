import React from 'react';
import { Button } from '@/components/ui/button';

const PromotionalBanners: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Left Banner */}
      <div
        className="relative h-48 rounded-xl p-6 flex items-end justify-start overflow-hidden"
        style={{
          backgroundImage: `url('/images/desktop-3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-vanta-accent-purple/70 to-vanta-accent-blue/70 opacity-90 rounded-xl"></div>
        <div className="relative z-10 text-white">
          <h2 className="text-2xl font-bold mb-2">PREMIER LEAGUE GAMES TODAY</h2>
          <Button className="bg-white text-vanta-blue-dark hover:bg-gray-100 rounded-lg px-6 py-2 font-semibold">
            CLICK HERE
          </Button>
        </div>
      </div>

      {/* Right Banner */}
      <div className="h-48 rounded-xl bg-gradient-to-r from-vanta-accent-blue to-vanta-accent-purple">
        {/* This banner is empty in the image, so we'll keep it simple */}
      </div>
    </div>
  );
};

export default PromotionalBanners;