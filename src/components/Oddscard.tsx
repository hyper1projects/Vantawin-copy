"use client";

import React from 'react';
import { cn } from '../lib/utils';
import { Game } from '../types/game';
import { useMatchSelection } from '../context/MatchSelectionContext';
import { Button } from '@/components/ui/button';
import { Star, ChevronRight } from 'lucide-react';
import { getLogoSrc } from '../utils/logoMap'; // Import getLogoSrc

interface OddscardProps {
  game: Game; // Pass the full game object
}

const Oddscard: React.FC<OddscardProps> = ({ game }) => {
  const { selectedGame, selectedOutcome, setSelectedMatch } = useMatchSelection();

  const handleSelectOutcome = (outcome: 'team1' | 'draw' | 'team2') => {
    setSelectedMatch(game, outcome);
  };

  // Defensive checks for odds values
  const team1Odd = game.odds?.team1 !== undefined ? game.odds.team1.toFixed(2) : '-';
  const drawOdd = game.odds?.draw !== undefined ? game.odds.draw.toFixed(2) : '-';
  const team2Odd = game.odds?.team2 !== undefined ? game.odds.team2.toFixed(2) : '-';

  // Abbreviate team names for buttons
  const team1Abbr = game.team1.name.substring(0, 3).toUpperCase();
  const team2Abbr = game.team2.name.substring(0, 3).toUpperCase();

  // Format date to "DD/MM DayOfWeek"
  const formatDate = (dateString: string) => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);

    const gameDate = new Date(dateString); // Assuming dateString is parsable, e.g., "YYYY-MM-DD" or "Today", "Tomorrow"
    
    if (dateString === 'Today') {
      return new Date().toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', weekday: 'short' }).replace(',', '');
    }
    if (dateString === 'Tomorrow') {
      return tomorrow.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', weekday: 'short' }).replace(',', '');
    }
    // Fallback for actual date strings if needed, or adjust dummy data
    return dateString; // For now, just return as is if not 'Today'/'Tomorrow'
  };

  return (
    <div className="bg-[#011B47] rounded-[14px] p-4 shadow-sm flex flex-col text-vanta-text-light w-full">
      {/* Top Row: Time, Game View, Star */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-medium text-white">{game.time}</span>
        <div className="flex items-center space-x-2">
          <a href="#" className="text-vanta-neon-blue text-sm font-medium flex items-center">
            Game View <ChevronRight size={16} className="ml-1" />
          </a>
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
        </div>
      </div>

      {/* Middle Section: Teams and Odds Buttons */}
      <div className="flex items-center justify-between">
        {/* Teams Column */}
        <div className="flex flex-col space-y-2 w-1/2">
          <div className="flex items-center">
            <img src={getLogoSrc(game.team1.logoIdentifier)} alt={`${game.team1.name} Logo`} className="w-6 h-6 object-contain mr-2" />
            <span className="text-base font-medium text-white">{game.team1.name}</span>
          </div>
          <div className="flex items-center">
            <img src={getLogoSrc(game.team2.logoIdentifier)} alt={`${game.team2.name} Logo`} className="w-6 h-6 object-contain mr-2" />
            <span className="text-base font-medium text-white">{game.team2.name}</span>
          </div>
        </div>

        {/* Odds Buttons Column */}
        <div className="flex space-x-2 w-1/2 justify-end">
          <Button
            className={cn(
              "py-2 px-3 rounded-md transition-colors duration-300 text-sm font-semibold",
              selectedGame?.id === game.id && selectedOutcome === 'team1'
                ? "bg-vanta-neon-blue text-vanta-blue-dark"
                : "bg-[#01112D] text-gray-300 hover:bg-[#012A5E]"
            )}
            onClick={() => handleSelectOutcome('team1')}
          >
            {team1Abbr}
          </Button>
          <Button
            className={cn(
              "py-2 px-3 rounded-md transition-colors duration-300 text-sm font-semibold",
              selectedGame?.id === game.id && selectedOutcome === 'draw'
                ? "bg-vanta-neon-blue text-vanta-blue-dark"
                : "bg-[#01112D] text-gray-300 hover:bg-[#012A5E]"
            )}
            onClick={() => handleSelectOutcome('draw')}
          >
            DRAW
          </Button>
          <Button
            className={cn(
              "py-2 px-3 rounded-md transition-colors duration-300 text-sm font-semibold",
              selectedGame?.id === game.id && selectedOutcome === 'team2'
                ? "bg-vanta-neon-blue text-vanta-blue-dark"
                : "bg-[#01112D] text-gray-300 hover:bg-[#012A5E]"
            )}
            onClick={() => handleSelectOutcome('team2')}
          >
            {team2Abbr}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Oddscard;