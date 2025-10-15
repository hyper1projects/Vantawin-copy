import React from 'react';
import GameCard from './GameCard';

const PointsMultiplierSection: React.FC = () => {
  // Placeholder data for game cards
  const games = [
    {
      timeLabel: "Today",
      team1Name: "ASTON MARTIN",
      team1Logo: "/public/placeholder.svg", // Replace with actual logos
      team2Name: "CRYSTAL PALACE",
      team2Logo: "/public/placeholder.svg", // Replace with actual logos
      predictionOptions: ["ASV", "DRAW", "CRY"],
    },
    {
      timeLabel: "Today",
      team1Name: "ASTON MARTIN",
      team1Logo: "/public/placeholder.svg",
      team2Name: "CRYSTAL PALACE",
      team2Logo: "/public/placeholder.svg",
      predictionOptions: ["ASV", "DRAW", "CRY"],
    },
    {
      timeLabel: "Today",
      team1Name: "ASTON MARTIN",
      team1Logo: "/public/placeholder.svg",
      team2Name: "CRYSTAL PALACE",
      team2Logo: "/public/placeholder.svg",
      predictionOptions: ["ASV", "DRAW", "CRY"],
    },
    {
      timeLabel: "Today",
      team1Name: "ASTON MARTIN",
      team1Logo: "/public/placeholder.svg",
      team2Name: "CRYSTAL PALACE",
      team2Logo: "/public/placeholder.svg",
      predictionOptions: ["ASV", "DRAW", "CRY"],
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-vanta-text-light mb-4">Points Multiplier</h2>
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide"> {/* scrollbar-hide is a custom utility, might need to add to tailwind config if not present */}
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>
    </div>
  );
};

export default PointsMultiplierSection;