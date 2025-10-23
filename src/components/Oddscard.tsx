"use client";

import React from 'react';
import { Button } from './ui/button';

interface OddscardProps {
  team1: { name: string; logo: string };
  team2: { name: string; logo: string };
  odds: { team1: number; draw: number; team2: number };
  time: string;
  date: string;
  league: string;
}

const Oddscard: React.FC<OddscardProps> = ({ team1, team2, odds, time, date, league }) => {
  return (
    <div className="flex flex-col bg-[#0D2C60] rounded-xl p-4 w-full max-w-sm">
      {/* Top section: Time, Date, League */}
      <div className="flex justify-between items-center text-gray-400 text-xs mb-4">
        <span>{time}</span>
        <span>{date}</span>
        <span>{league}</span>
      </div>

      {/* Middle section: Teams and Odds */}
      <div className="flex justify-between items-center mb-4">
        {/* Teams display - MODIFIED HERE */}
        <div className="flex flex-col"> {/* Changed to flex-col for vertical stacking */}
          <div className="flex items-center"> {/* Team 1 */}
            <img src={team1.logo} alt={team1.name} className="w-6 h-6 mr-2" />
            <span className="text-white font-semibold">{team1.name}</span>
          </div>
          <div className="flex items-center mt-2"> {/* Team 2, with margin-top for spacing */}
            <img src={team2.logo} alt={team2.name} className="w-6 h-6 mr-2" />
            <span className="text-white font-semibold">{team2.name}</span>
          </div>
        </div>

        {/* Odds buttons */}
        <div className="flex space-x-2">
          <Button variant="outline" className="bg-[#0B295B] text-white border-gray-600 hover:bg-gray-700 h-8 px-3 text-sm">{odds.team1}</Button>
          <Button variant="outline" className="bg-[#0B295B] text-white border-gray-600 hover:bg-gray-700 h-8 px-3 text-sm">{odds.draw}</Button>
          <Button variant="outline" className="bg-[#0B295B] text-white border-gray-600 hover:bg-gray-700 h-8 px-3 text-sm">{odds.team2}</Button>
        </div>
      </div>

      {/* Bottom section: Game View link */}
      <div className="flex justify-end">
        <a href="#" className="text-gray-300 text-sm hover:underline">Game View &gt;</a>
      </div>
    </div>
  );
};

export default Oddscard;