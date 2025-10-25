"use client";

import React, { useState } from 'react';
import { Button } from './ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Oddscard from './OddsCard'; // Changed to Oddscard (lowercase 'c') to match file name

interface Team {
  name: string;
  logoIdentifier: string;
}

interface Game {
  id: string;
  league: string;
  isLive?: boolean;
  homeTeam: Team;
  awayTeam: Team;
  time: string;
  date: string;
  odds: {
    home: number;
    draw?: number;
    away: number;
  };
  gameView: string;
}

// Dummy live game data for this component
const dummyLiveGames: Game[] = [
  {
    id: 'fpl1', league: 'Premier League', isLive: true,
    homeTeam: { name: 'Man Utd', logoIdentifier: 'man_utd' },
    awayTeam: { name: 'Liverpool', logoIdentifier: 'liverpool' },
    time: '20:00', date: 'Today', odds: { home: 2.50, draw: 3.20, away: 2.80 }, gameView: 'View Game'
  },
  {
    id: 'fol1', league: 'La Liga', isLive: true,
    homeTeam: { name: 'Real Madrid', logoIdentifier: 'real_madrid' },
    awayTeam: { name: 'Barcelona', logoIdentifier: 'barcelona' },
    time: '21:00', date: 'Today', odds: { home: 1.90, draw: 3.50, away: 4.00 }, gameView: 'View Game'
  },
  {
    id: 'fol3', league: 'Ligue 1', isLive: true,
    homeTeam: { name: 'PSG', logoIdentifier: 'psg' },
    awayTeam: { name: 'Marseille', logoIdentifier: 'marseille' },
    time: '19:30', date: 'Today', odds: { home: 1.40, draw: 4.50, away: 7.00 }, gameView: 'View Game'
  },
  {
    id: 'bna1', league: 'NBA', isLive: true,
    homeTeam: { name: 'Lakers', logoIdentifier: 'lakers' },
    awayTeam: { name: 'Celtics', logoIdentifier: 'celtics' },
    time: '03:00', date: 'Tomorrow', odds: { home: 1.80, away: 2.00 }, gameView: 'View Game'
  },
  {
    id: 'tat1', league: 'ATP Tour', isLive: true,
    homeTeam: { name: 'Djokovic', logoIdentifier: 'djokovic' },
    awayTeam: { name: 'Nadal', logoIdentifier: 'nadal' },
    time: '14:00', date: 'Today', odds: { home: 1.60, away: 2.20 }, gameView: 'View Game'
  },
  {
    id: 'ell1', league: 'LEC', isLive: true,
    homeTeam: { name: 'Fnatic', logoIdentifier: 'fnatic' },
    awayTeam: { name: 'G2 Esports', logoIdentifier: 'g2' },
    time: '18:00', date: 'Today', odds: { home: 1.75, away: 2.05 }, gameView: 'View Game'
  },
];

interface LiveGamesSectionProps {
  className?: string;
}

const LiveGamesSection: React.FC<LiveGamesSectionProps> = ({ className }) => {
  const [liveGamesOpen, setLiveGamesOpen] = useState(true);

  if (dummyLiveGames.length === 0) return null;

  return (
    <Collapsible open={liveGamesOpen} onOpenChange={setLiveGamesOpen} className={`w-full ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-vanta-dark-card rounded-t-md border-b border-vanta-border mt-4">
        <h2 className="text-lg font-semibold text-vanta-text-light">Live Games</h2>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <span className="sr-only">Toggle</span>
            {liveGamesOpen ? (
              <ChevronUp className="h-4 w-4 text-vanta-text-medium" />
            ) : (
              <ChevronDown className="h-4 w-4 text-vanta-text-medium" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="bg-vanta-dark-card rounded-b-md p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {dummyLiveGames.map((game) => (
            <Oddscard
              key={game.id}
              homeTeam={game.homeTeam}
              awayTeam={game.awayTeam}
              odds={game.odds}
              time={game.time}
              date={game.date}
              league={game.league}
              isLive={game.isLive || false}
              gameView={game.gameView}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default LiveGamesSection;