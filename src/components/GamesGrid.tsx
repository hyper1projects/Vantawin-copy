"use client";

import React from 'react';
import GameCard from './GameCard';
import { Game } from '../types/game';

interface GamesGridProps {
  games: Game[];
}

const GamesGrid: React.FC<GamesGridProps> = ({ games }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesGrid;