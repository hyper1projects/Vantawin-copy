import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

interface GameListingProps {
  status: 'live' | 'upcoming';
  timeOrDate: string;
  team1Name: string;
  team1Logo: string;
  team2Name: string;
  team2Logo: string;
  predictionOptions: string[];
}

const GameListing: React.FC<GameListingProps> = ({
  status,
  timeOrDate,
  team1Name,
  team1Logo,
  team2Name,
  team2Logo,
  predictionOptions,
}) => {
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-vanta-border bg-vanta-blue-medium mb-3">
      <div className="flex items-center gap-4">
        {status === 'live' ? (
          <div className="flex items-center gap-1 text-red-500 text-sm font-medium">
            <span className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
            Live
          </div>
        ) : (
          <span className="text-sm text-vanta-text-muted w-24">{timeOrDate}</span>
        )}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img src={team1Logo} alt={team1Name} className="h-5 w-5" />
            <span className="text-vanta-text-light text-sm">{team1Name}</span>
          </div>
          <div className="flex items-center gap-2">
            <img src={team2Logo} alt={team2Name} className="h-5 w-5" />
            <span className="text-vanta-text-light text-sm">{team2Name}</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center text-vanta-text-muted hover:text-vanta-accent-blue text-sm">
          Game View <ChevronRight className="h-4 w-4 ml-1" />
        </a>
        <Star className="h-5 w-5 text-vanta-text-muted hover:text-yellow-400 cursor-pointer" />
        <div className="flex gap-2">
          {predictionOptions.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="bg-vanta-blue-dark border-vanta-border text-vanta-text-light hover:bg-vanta-active-bg hover:border-vanta-accent-blue hover:text-vanta-accent-blue rounded-md px-3 py-1 text-xs"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameListing;