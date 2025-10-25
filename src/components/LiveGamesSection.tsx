"use client";

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '../components/ui/collapsible'; // Correct import for Collapsible components
import { Button } from '../components/ui/button'; // Assuming Button is used

interface LiveGame {
  id: string;
  title: string;
  provider: string;
  players: number;
  thumbnail: string;
}

interface LiveGamesSectionProps {
  className?: string;
}

const LiveGamesSection: React.FC<LiveGamesSectionProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(true);

  // Dummy data for live games
  const liveGames: LiveGame[] = [
    {
      id: '1',
      title: 'Crazy Time',
      provider: 'Evolution',
      players: 12345,
      thumbnail: 'https://via.placeholder.com/150/FF5733/FFFFFF?text=Crazy+Time',
    },
    {
      id: '2',
      title: 'Lightning Roulette',
      provider: 'Evolution',
      players: 8765,
      thumbnail: 'https://via.placeholder.com/150/33FF57/FFFFFF?text=Lightning+Roulette',
    },
    {
      id: '3',
      title: 'Monopoly Live',
      provider: 'Evolution',
      players: 5432,
      thumbnail: 'https://via.placeholder.com/150/3357FF/FFFFFF?text=Monopoly+Live',
    },
    {
      id: '4',
      title: 'Blackjack Lobby',
      provider: 'Evolution',
      players: 2100,
      thumbnail: 'https://via.placeholder.com/150/FFFF33/000000?text=Blackjack+Lobby',
    },
    {
      id: '5',
      title: 'Baccarat Squeeze',
      provider: 'Evolution',
      players: 1500,
      thumbnail: 'https://via.placeholder.com/150/FF33FF/FFFFFF?text=Baccarat+Squeeze',
    },
  ];

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={`w-full ${className}`}>
      <div className="flex items-center justify-between px-4 py-2 bg-vanta-dark-card rounded-t-md border-b border-vanta-border">
        <h2 className="text-lg font-semibold text-vanta-text-light">Live Games</h2>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <span className="sr-only">Toggle</span>
            {isOpen ? (
              <ChevronUp className="h-4 w-4 text-vanta-text-medium" />
            ) : (
              <ChevronDown className="h-4 w-4 text-vanta-text-medium" />
            )}
          </Button>
        </CollapsibleTrigger>
      </div>
      <CollapsibleContent className="bg-vanta-dark-card rounded-b-md p-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {liveGames.map((game) => (
            <div key={game.id} className="relative group cursor-pointer rounded-md overflow-hidden">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-32 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent rounded-md"></div>
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                <h3 className="text-sm font-medium truncate">{game.title}</h3>
                <p className="text-xs text-vanta-text-medium">{game.provider}</p>
                <p className="text-xs text-vanta-text-light flex items-center">
                  <span className="relative flex h-2 w-2 mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  {game.players.toLocaleString()} players
                </p>
              </div>
            </div>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default LiveGamesSection;