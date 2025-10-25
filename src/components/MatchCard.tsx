"use client";

import React from 'react';
import { Button } from './ui/button';
import { cn } from '../lib/utils';
import { Clock, CalendarDays } from 'lucide-react';

// Define a basic Match interface if not already defined
interface Match {
  id: string;
  team1Name: string;
  team2Name: string;
  team1Logo: string;
  team2Logo: string;
  time: string;
  date: string;
  status: 'live' | 'upcoming' | 'finished';
  // Add any other properties that might be relevant for display in the right sidebar
  description?: string;
  venue?: string;
  odds?: { team1: number; team2: number; draw: number };
}

interface MatchCardProps {
  match: Match;
  onSelectMatch?: (match: Match) => void; // New optional prop to handle selection
  className?: string;
}

const MatchCard: React.FC<MatchCardProps> = ({ match, onSelectMatch, className }) => {
  const statusClasses = {
    live: 'bg-red-500',
    upcoming: 'bg-yellow-500',
    finished: 'bg-gray-500',
  };

  return (
    <div className={cn("bg-vanta-blue-medium rounded-[27px] p-6 shadow-sm text-vanta-text-light", className)}>
      {/* Match Status */}
      <div className="flex justify-end mb-4">
        <span className={cn("px-3 py-1 rounded-full text-xs font-semibold", statusClasses[match.status])}>
          {match.status.toUpperCase()}
        </span>
      </div>

      {/* Teams and Logos */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex flex-col items-center">
          <img src={match.team1Logo} alt={match.team1Name} className="w-12 h-12 object-contain mb-2" />
          <span className="text-sm font-medium text-center">{match.team1Name}</span>
        </div>
        <span className="text-lg font-bold text-gray-400">VS</span>
        <div className="flex flex-col items-center">
          <img src={match.team2Logo} alt={match.team2Name} className="w-12 h-12 object-contain mb-2" />
          <span className="text-sm font-medium text-center">{match.team2Name}</span>
        </div>
      </div>

      {/* Match Time and Date */}
      <div className="flex justify-center items-center space-x-4 text-gray-400 text-sm mb-4">
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          <span>{match.time}</span>
        </div>
        <div className="flex items-center">
          <CalendarDays className="w-4 h-4 mr-1" />
          <span>{match.date}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-2 w-full mb-2">
        <Button
          onClick={() => onSelectMatch && onSelectMatch(match)} // Call the handler when button is clicked
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