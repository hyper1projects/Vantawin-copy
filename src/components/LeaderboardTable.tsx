"use client";

import React from 'react';
import { Trophy } from 'lucide-react';
import { cn } from '../lib/utils'; // For conditional class merging

interface LeaderboardEntry {
  rank: number;
  playerName: string;
  score: number;
  isCurrentUser?: boolean; // Optional: to highlight the current user
}

interface LeaderboardTableProps {
  entries: LeaderboardEntry[];
  className?: string;
}

const LeaderboardTable: React.FC<LeaderboardTableProps> = ({ entries, className }) => {
  return (
    <div className={cn("bg-vanta-blue-medium rounded-[27px] p-6 shadow-sm text-vanta-text-light", className)}>
      {/* Table Header */}
      <div className="grid grid-cols-3 gap-4 pb-4 mb-4 border-b border-vanta-accent-dark-blue">
        <span className="text-sm font-semibold text-gray-400">Rank</span>
        <span className="text-sm font-semibold text-gray-400">Player</span>
        <span className="text-sm font-semibold text-gray-400 text-right">Score</span>
      </div>

      {/* Leaderboard Entries */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className={cn(
              "grid grid-cols-3 gap-4 items-center py-2 px-3 rounded-lg",
              entry.isCurrentUser ? "bg-vanta-accent-dark-blue border border-vanta-neon-blue" : "hover:bg-[#012A5E]"
            )}
          >
            <div className="flex items-center">
              {/* Removed Trophy icons and special text colors for top 3 */}
              <span className="text-base">
                {entry.rank}
              </span>
            </div>
            <span className="text-base">{entry.playerName}</span>
            <span className="text-base text-right text-vanta-neon-blue">{entry.score.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTable;