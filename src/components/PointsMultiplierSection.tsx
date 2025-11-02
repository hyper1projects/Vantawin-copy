"use client";

import React from 'react';
import MatchCard from './MatchCard';
import SectionHeader from './SectionHeader';
import { Game } from '../types/game';
// Removed logoMap import as it's now handled within MatchCard

interface PointsMultiplierSectionProps {
  className?: string; // Add className prop
}

const PointsMultiplierSection: React.FC<PointsMultiplierSectionProps> = ({ className }) => { // Destructure className
  // Define an array of game data, using the logo identifiers from logoMap.ts
  const allGames: Game[] = [
    {
      id: 'game-1',
      time: '7:00 PM',
      date: 'Today',
      team1: { name: 'Crystal Palace', logoIdentifier: 'CRY' },
      team2: { name: 'West Ham United', logoIdentifier: 'WHU' },
      odds: { team1: 1.5, draw: 3.0, team2: 2.5 },
      league: 'Premier League',
      isLive: false,
      gameView: 'View Game Details',
    },
    {
      id: 'game-2',
      time: '8:30 PM',
      date: 'Tomorrow',
      team1: { name: 'Manchester United', logoIdentifier: 'MANU' },
      team2: { name: 'Leicester City', logoIdentifier: 'LEIC' },
      odds: { team1: 2.1, draw: 3.2, team2: 1.9 },
      league: 'La Liga',
      isLive: true,
      gameView: 'View Matchup',
    },
    {
      id: 'game-3',
      time: '9:00 PM',
      date: 'Today',
      team1: { name: 'Arsenal', logoIdentifier: 'ARS' },
      team2: { name: 'Chelsea', logoIdentifier: 'CHE' },
      odds: { team1: 1.8, draw: 3.5, team2: 2.2 },
      league: 'Premier League',
      isLive: false,
      gameView: 'Match Info',
    },
    {
      id: 'game-4',
      time: '6:00 PM',
      date: 'Today',
      team1: { name: 'Liverpool', logoIdentifier: 'LIV' },
      team2: { name: 'Everton', logoIdentifier: 'EVE' },
      odds: { team1: 1.2, draw: 4.0, team2: 6.0 },
      league: 'Premier League',
      isLive: false,
      gameView: 'Derby Details',
    },
    {
      id: 'game-5',
      time: '10:00 PM',
      date: 'Tomorrow',
      team1: { name: 'Real Madrid', logoIdentifier: 'RMA' },
      team2: { name: 'Barcelona', logoIdentifier: 'BAR' },
      odds: { team1: 2.0, draw: 3.1, team2: 2.0 },
      league: 'La Liga',
      isLive: true,
      gameView: 'El Clásico',
    },
    {
      id: 'game-6',
      time: '5:00 PM',
      date: 'Yesterday',
      team1: { name: 'Bayern Munich', logoIdentifier: 'BAY' },
      team2: { name: 'Borussia Dortmund', logoIdentifier: 'DOR' },
      odds: { team1: 1.6, draw: 3.8, team2: 4.5 },
      league: 'Bundesliga',
      isLive: false,
      gameView: 'German Derby',
    },
    {
      id: 'game-7',
      time: '4:00 PM',
      date: 'Today',
      team1: { name: 'Tottenham', logoIdentifier: 'TOT' },
      team2: { name: 'Manchester City', logoIdentifier: 'MCI' },
      odds: { team1: 3.5, draw: 3.3, team2: 1.8 },
      league: 'Premier League',
      isLive: false,
      gameView: 'View Match',
    },
    {
      id: 'game-8',
      time: '7:30 PM',
      date: 'Tomorrow',
      team1: { name: 'Atletico Madrid', logoIdentifier: 'ATM' },
      team2: { name: 'Sevilla', logoIdentifier: 'SEV' },
      odds: { team1: 1.9, draw: 3.4, team2: 2.8 },
      league: 'La Liga',
      isLive: false,
      gameView: 'View Game',
    },
    {
      id: 'game-9',
      time: '9:30 PM',
      date: 'Today',
      team1: { name: 'Juventus', logoIdentifier: 'JUV' },
      team2: { name: 'AC Milan', logoIdentifier: 'MIL' },
      odds: { team1: 2.2, draw: 3.0, team2: 2.4 },
      league: 'Serie A',
      isLive: true,
      gameView: 'View Details',
    },
    {
      id: 'game-10',
      time: '6:30 PM',
      date: 'Tomorrow',
      team1: { name: 'PSG', logoIdentifier: 'PSG' },
      team2: { name: 'Marseille', logoIdentifier: 'MAR' },
      odds: { team1: 1.4, draw: 4.2, team2: 5.5 },
      league: 'Ligue 1',
      isLive: false,
      gameView: 'View Match',
    },
  ];

  // Function to get the highest odd for a game
  const getMaxOdd = (game: Game) => {
    return Math.max(game.odds.team1, game.odds.draw, game.odds.team2);
  };

  // Sort games by the highest odd in descending order
  const gamesWithBestOdds = [...allGames]
    .sort((a, b) => getMaxOdd(b) - getMaxOdd(a));

  return (
    <div className={`flex flex-col items-center space-y-6 ${className || ''}`}> {/* Apply className here */}
      <div className="w-full"> 
        <SectionHeader title="Points Multiplier" className="w-full" textColor="text-white" />
      </div>
      {/* Horizontal scrolling carousel */}
      <div className="w-full overflow-x-auto pb-4 scroll-smooth [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-vanta-blue-dark [&::-webkit-scrollbar-thumb]:bg-vanta-neon-blue [&::-webkit-scrollbar-thumb]:rounded-full">
        <div className="flex gap-4 px-2 min-w-min">
          {gamesWithBestOdds.map((game) => (
            <div key={game.id} className="flex-shrink-0">
              <MatchCard
                game={game} // Pass the full game object
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PointsMultiplierSection;