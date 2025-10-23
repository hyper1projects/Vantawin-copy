"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'; // Assuming shadcn/ui Card components

interface Team {
  name: string;
  logo: string;
}

interface OddsDataProps {
  time: string;
  date: string;
  teams: Team[]; // Expecting an array of teams
  gameView: string;
  odds: {
    teamAWin: number;
    draw: number;
    teamBWin: number;
  };
}

const Oddscard: React.FC<OddsDataProps> = ({ time, date, teams, gameView, odds }) => {
  // Safely access team data, providing fallbacks if teams[0] or teams[1] are undefined
  const teamA = teams[0];
  const teamB = teams[1];

  return (
    <Card className="w-full max-w-sm mx-auto shadow-lg">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">{date} - {time}</CardTitle>
        <span className={`px-2 py-1 text-xs font-semibold rounded-full
          ${gameView === 'Live' ? 'bg-red-100 text-red-800' :
             gameView === 'Upcoming' ? 'bg-blue-100 text-blue-800' :
             'bg-gray-100 text-gray-800'}`}>
          {gameView}
        </span>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {teamA && <img src={teamA.logo} alt={teamA.name} className="w-6 h-6 mr-2" />}
            <span className="font-semibold">{teamA ? teamA.name : 'Team A'}</span>
          </div>
          <span className="text-gray-500 text-sm">vs</span>
          <div className="flex items-center">
            <span className="font-semibold">{teamB ? teamB.name : 'Team B'}</span>
            {teamB && <img src={teamB.logo} alt={teamB.name} className="w-6 h-6 ml-2" />}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="text-xs text-gray-600 mb-1">{teamA ? teamA.name : 'Team A'} Win</div>
            <div className="font-bold text-lg">{odds.teamAWin.toFixed(2)}</div>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="text-xs text-gray-600 mb-1">Draw</div>
            <div className="font-bold text-lg">{odds.draw.toFixed(2)}</div>
          </div>
          <div className="p-2 bg-gray-50 rounded-md">
            <div className="text-xs text-gray-600 mb-1">{teamB ? teamB.name : 'Team B'} Win</div>
            <div className="font-bold text-lg">{odds.teamBWin.toFixed(2)}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Oddscard;