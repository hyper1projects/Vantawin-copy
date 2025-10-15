import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GameCardProps {
  timeLabel: string;
  team1Name: string;
  team1Logo: string;
  team2Name: string;
  team2Logo: string;
  predictionOptions: string[];
  isActive?: boolean; // For active state in Points Multiplier
}

const GameCard: React.FC<GameCardProps> = ({
  timeLabel,
  team1Name,
  team1Logo,
  team2Name,
  team2Logo,
  predictionOptions,
  isActive = false,
}) => {
  return (
    <div className={cn(
      "flex flex-col items-center justify-between p-4 rounded-xl border border-vanta-border bg-vanta-blue-medium",
      isActive && "border-vanta-accent-blue" // Example active state styling
    )}>
      <span className="text-xs text-vanta-text-muted mb-3">{timeLabel}</span>
      <div className="flex items-center justify-center gap-4 mb-4">
        <div className="flex flex-col items-center">
          <img src={team1Logo} alt={team1Name} className="h-8 w-8 mb-1" />
          <span className="text-sm text-vanta-text-light font-medium">{team1Name}</span>
        </div>
        <span className="text-vanta-text-muted text-sm">VS</span>
        <div className="flex flex-col items-center">
          <img src={team2Logo} alt={team2Name} className="h-8 w-8 mb-1" />
          <span className="text-sm text-vanta-text-light font-medium">{team2Name}</span>
        </div>
      </div>
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
  );
};

export default GameCard;