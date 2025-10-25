"use client";

import React from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { Clock, CalendarDays } from 'lucide-react';
import { Game } from '../types/game'; // Import Game type
import { getLogoSrc } from '../utils/logoMap'; // Import getLogoSrc

interface MatchCardProps {
  game: Game; // Now accepts a single 'game' object
  onSelectMatch?: (game: Game) => void;
  className?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ game, onSelectMatch, className }) => {
  // Derive status from game.isLive
  // Assuming 'upcoming' if not live, and no 'finished' status for this context
  const status: 'live' | 'upcoming' = game.isLive ? 'live' : 'upcoming'; 

  const statusClasses = {
    live: 'bg-red-500',
    upcoming: 'bg-yellow-500',
    finished: 'bg-gray-500', // Keep for completeness, though not used by derived status
  };

  return (
    <div className={cn("bg-vanta-blue-medium rounded-[27px] p-6 shadow-sm text-vanta-text-light", className)}>
      {/* Match Status */}
      <div className="flex justify-end mb-4">
        <span className={cn("px-3 py-1 rounded-full text-xs font-semibold", statusClasses[status])}>
          {status.toUpperCase()}
        </span>
      </div>

      {/* Teams and Logos */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col items-center">
          <img src={getLogoSrc(game.team1.logoIdentifier)} alt={game.team1.name} className="w-12 h-12 object-contain mb-2" />
          <span className="text-sm font-medium text-center">{game.team1.name}</span>
        </div>
        <span className="text-lg font-bold text-gray-400">VS</span>
        <div className="flex flex-col items-center">
          <img src={getLogoSrc(game.team2.logoIdentifier)} alt={game.team2.name} className="w-12 h-12 object-contain mb-2" />
          <span className="text-sm font-medium text-center">{game.team2.name}</span>
        </div>
      </div>

      {/* Match Time and Date */}
      <div className="flex justify-center items-center space-x-4 text-gray-400 text-sm mb-4">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{game.time}</span>
        </div>
        <div className="flex items-center">
          <CalendarDays className="w-4 h-4 mr-1" />
          <span>{game.date}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-2 w-full mb-2">
        <Button
          onClick={() => onSelectMatch && onSelectMatch(game)} // Pass the full game object
          className={`flex-1 py-1.5 px-3 rounded-md transition-colors duration-300 text-xs font-semibold 
            ${'bg-[#01112D] text-gray-300 hover:bg-[#012A5E]'} 
          `}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default MatchCard;