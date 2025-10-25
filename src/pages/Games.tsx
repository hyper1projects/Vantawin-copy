"use client";

import React from 'react';
import GamesGrid from '../components/GamesGrid';
import { Game } from '../types/game'; // Import the Game type

const Games: React.FC = () => {
  // Sample game data (can be fetched from an API in a real application)
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
      time: '3:00 PM',
      date: 'Today',
      team1: { name: 'Paris SG', logoIdentifier: 'PSG' },
      team2: { name: 'Marseille', logoIdentifier: 'MAR' },
      odds: { team1: 1.3, draw: 3.9, team2: 5.5 },
      league: 'Ligue 1',
      isLive: false,
      gameView: 'French Derby',
    },
    {
      id: 'game-8',
      time: '4:00 PM',
      date: 'Tomorrow',
      team1: { name: 'Juventus', logoIdentifier: 'JUV' },
      team2: { name: 'Inter Milan', logoIdentifier: 'INT' },
      odds: { team1: 2.3, draw: 3.0, team2: 2.8 },
      league: 'Serie A',
      isLive: true,
      gameView: 'Derby d\'Italia',
    },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-vanta-text-light mb-6">Games</h1>
      <GamesGrid games={allGames} />
    </div>
  );
};

export default Games;