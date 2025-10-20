import React from 'react';
import { Button } from '@/components/ui/button';

interface MatchCardProps {
  date: string;
  team1Logo: string;
  team1Name: string;
  team2Logo: string;
  team2Name: string;
  option1: string;
  option2: string;
  option3: string;
}

const MatchCard: React.FC<MatchCardProps> = ({
  date,
  team1Logo,
  team1Name,
  team2Logo,
  team2Name,
  option1,
  option2,
  option3,
}) => {
  return (
    <div className="relative p-[2px] rounded-xl bg-gradient-to-br from-vanta-neon-blue to-vanta-purple w-full max-w-xs mx-auto">
      <div className="bg-[#011B47] rounded-xl h-full w-full p-4 flex flex-col items-center text-white">
        <p className="text-lg font-semibold mb-4">{date}</p>
        <div className="flex items-center justify-around w-full mb-6">
          <div className="flex flex-col items-center">
            <img src={team1Logo} alt={team1Name} className="w-12 h-12 object-contain mb-2" />
            <span className="text-xs font-medium text-center">{team1Name}</span>
          </div>
          <div className="flex flex-col items-center">
            <img src={team2Logo} alt={team2Name} className="w-12 h-12 object-contain mb-2" />
            <span className="text-xs font-medium text-center">{team2Name}</span>
          </div>
        </div>
        <div className="flex justify-center space-x-3 w-full">
          <Button className="bg-vanta-dark-blue-light hover:bg-vanta-purple text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm">
            {option1}
          </Button>
          <Button className="bg-vanta-dark-blue-light hover:bg-vanta-purple text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm">
            {option2}
          </Button>
          <Button className="bg-vanta-dark-blue-light hover:bg-vanta-purple text-white font-semibold py-2 px-4 rounded-md transition-colors duration-300 text-sm">
            {option3}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;