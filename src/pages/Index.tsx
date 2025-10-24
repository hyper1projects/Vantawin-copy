"use client";

import React from 'react';
import MatchCard from '../components/MatchCard';
import TopGamesSection from '../components/TopGamesSection';
import SectionHeader from '../components/SectionHeader';
import { Game } from '../types/game'; // Import the Game type

const Index: React.FC = () => {
  // Dummy data for upcoming matches
  const upcomingMatches: Game[] = [
    {
      id: 'match-1',
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
      id: 'match-2',
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
      id: 'match-3',
      time: '9:00 PM',
      date: 'Fri, Apr 26',
      team1: { name: 'Arsenal', logoIdentifier: 'ARS' },
      team2: { name: 'Chelsea', logoIdentifier: 'CHE' },
      odds: { team1: 1.8, draw: 3.5, team2: 2.2 },
      league: 'Premier League',
      isLive: false,
      gameView: 'Match Info',
    },
    {
      id: 'match-4',
      time: '6:00 PM',
      date: 'Sat, Apr 27',
      team1: { name: 'Liverpool', logoIdentifier: 'LIV' },
      team2: { name: 'Everton', logoIdentifier: 'EVE' },
      odds: { team1: 1.6, draw: 3.8, team2: 2.8 },
      league: 'Premier League',
      isLive: false,
      gameView: 'Game Preview',
    },
    {
      id: 'match-5',
      time: '10:00 PM',
      date: 'Sun, Apr 28',
      team1: { name: 'Real Madrid', logoIdentifier: 'RMA' },
      team2: { name: 'Barcelona', logoIdentifier: 'BAR' },
      odds: { team1: 2.0, draw: 3.3, team2: 2.0 },
      league: 'La Liga',
      isLive: true,
      gameView: 'El Clásico',
    },
  ];

  return (
    <div className="min-h-screen bg-vanta-blue-dark text-white p-4">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Upcoming Matches" className="mb-4" />
        <div className="flex overflow-x-auto space-x-4 pb-4 mb-8 scrollbar-hide"> {/* Added overflow-x-auto and space-x-4 */}
          {upcomingMatches.map((match) => (
            <MatchCard
              key={match.id}
              date={match.date}
              team1={match.team1}
              team2={match.team2}
              odds={match.odds}
              league={match.league}
              isLive={match.isLive}
            />
          ))}
        </div>
        <TopGamesSection />
      </div>
    </div>
  );
};

export default Index;