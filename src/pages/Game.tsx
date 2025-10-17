"use client";

import React from 'react';
import { useParams } from 'react-router-dom';

const Game: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-vanta-text-light mb-4">Game: {gameId}</h1>
      <p className="text-vanta-text-medium">Details for the game "{gameId}" will be displayed here.</p>
    </div>
  );
};

export default Game;