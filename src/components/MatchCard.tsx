"use client";

import React from 'react';
import OddsCard from './OddsCard'; // Import OddsCard

interface MatchCardProps {
  id: string;
  team1: string;
  team2: string;
  time: string;
  date: string;
  odds1: number;
  oddsX: number;
  odds2: number;
  onSelectOdd?: (matchId: string, oddType: '1' | 'X' | '2', oddValue: number) => void;
}

const MatchCard: React.FC<MatchCardProps> = ({
  id,
  team1,
  team2,
  time,
  date,
  odds1,
  oddsX,
  odds2,
  onSelectOdd,
}) => {
  const handleOddClick = (oddType: '1' | 'X' | '2', oddValue: number) => {
    if (onSelectOdd) {
      onSelectOdd(id, oddType, oddValue);
    }
  };

  return (
    <div className="bg-white shadow-sm rounded-lg p-4 border border-gray-200">
      <div className="flex justify-between items-center mb-2">
        <span className="text-xs text-gray-500">{date} - {time}</span>
        {time === 'LIVE' && (
          <span className="text-xs font-semibold text-red-600 bg-red-100 px-2 py-1 rounded-full">LIVE</span>
        )}
      </div>
      <div className="text-lg font-semibold text-gray-900 mb-3">
        <p>{team1}</p>
        <p className="text-sm font-normal text-gray-600">vs</p>
        <p>{team2}</p>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-4">
        <OddsCard label="1" oddValue={odds1} onClick={() => handleOddClick('1', odds1)} />
        <OddsCard label="X" oddValue={oddsX} onClick={() => handleOddClick('X', oddsX)} />
        <OddsCard label="2" oddValue={odds2} onClick={() => handleOddClick('2', odds2)} />
      </div>
    </div>
  );
};

export default MatchCard;