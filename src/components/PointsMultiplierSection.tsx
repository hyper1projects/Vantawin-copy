import React from 'react';
import MatchCard from './MatchCard';

const PointsMultiplierSection = () => {
  return (
    <div className="w-full py-8 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-left">Points Multiplier</h2>
      <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-6">
        <MatchCard
          date="Today"
          team1Logo="/images/man_united_logo.png"
          team1Name="ASTON MARTIN"
          team2Logo="/images/leicester_city_logo.png"
          team2Name="CRYSTAL PALACE"
          option1="ASV"
          option2="DRAW"
          option3="CRY"
        />
        <MatchCard
          date="Today"
          team1Logo="/images/man_united_logo.png"
          team1Name="ASTON MARTIN"
          team2Logo="/images/leicester_city_logo.png"
          team2Name="CRYSTAL PALACE"
          option1="ASV"
          option2="DRAW"
          option3="CRY"
        />
        <MatchCard
          date="Today"
          team1Logo="/images/man_united_logo.png"
          team1Name="ASTON MARTIN"
          team2Logo="/images/leicester_city_logo.png"
          team2Name="CRYSTAL PALACE"
          option1="ASV"
          option2="DRAW"
          option3="CRY"
        />
      </div>
    </div>
  );
};

export default PointsMultiplierSection;