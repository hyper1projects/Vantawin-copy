"use client";

import React from 'react';
import MatchCard from '@/components/MatchCard';
import LiveGameHeader from './LiveGameHeader'; // Importing the new LiveGameHeader
import { TeamLogos } from '@/assets/logos';

const TopGamesSection: React.FC = () => {
  return (
    <div className="w-full py-8 px-4">
      <LiveGameHeader className="mb-6" /> {/* Using the new LiveGameHeader */}
      <div className="flex flex-wrap justify-center gap-6 bg-[#0B295B] p-6 rounded-b-xl">
        <MatchCard
          date="Live" // Changed date to "Live"
          team1Logo={TeamLogos.CRY} // Crystal Palace logo
          team1Name="Crystal Palace"
          team2Logo={TeamLogos.WHU} // West Ham United logo
          team2Name="West Ham United"
          option1="CRY" // Options from the image
          option2="DRAW"
          option3="WHU"
        />
        {/* Removed other MatchCard components to show only one game */}
      </div>
    </div>
  );
};

export default TopGamesSection;