import React from 'react';
import { getLogoSrc } from '../utils/logoMap'; // Import the utility function
import { Clock, CalendarDays, ChevronRight } from 'lucide-react';
import { Button } from './ui/button'; // Assuming shadcn/ui Button

interface OddscardProps {
  matchId: string;
  homeTeamName: string;
  awayTeamName: string;
  league: string;
  matchTime: string; // e.g., "19:00"
  matchDate: string; // e.g., "2023-10-27"
  isLive: boolean;
  homeOdds: string;
  drawOdds: string;
  awayOdds: string;
}

const Oddscard: React.FC<OddscardProps> = ({
  matchId,
  homeTeamName,
  awayTeamName,
  league,
  matchTime,
  matchDate,
  isLive,
  homeOdds,
  drawOdds,
  awayOdds,
}) => {
  const homeTeamLogo = getLogoSrc(homeTeamName);
  const awayTeamLogo = getLogoSrc(awayTeamName);

  return (
    <div className="flex flex-col bg-[#0D2C60] rounded-xl p-4 w-full max-w-sm">
      {/* Top section: Time/Live & Date (left), League (right) */}
      <div className="flex justify-between items-center text-gray-400 text-xs mb-4">
        <div className="flex items-center space-x-2">
          {isLive ? (
            <span className="text-red-500 font-bold">LIVE</span>
          ) : (
            <div className="flex items-center space-x-1">
              <Clock size={12} />
              <span>{matchTime}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <CalendarDays size={12} />
            <span>{matchDate}</span>
          </div>
        </div>
        <span className="font-semibold">{league}</span>
      </div>

      {/* Middle section: Team names and logos */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <img src={homeTeamLogo} alt={`${homeTeamName} logo`} className="w-6 h-6 object-contain" />
          <span className="text-white font-medium text-sm">{homeTeamName}</span>
        </div>
        <span className="text-gray-400 text-xs">vs</span>
        <div className="flex items-center space-x-2">
          <span className="text-white font-medium text-sm">{awayTeamName}</span>
          <img src={awayTeamLogo} alt={`${awayTeamName} logo`} className="w-6 h-6 object-contain" />
        </div>
      </div>

      {/* Bottom section: Odds buttons */}
      <div className="grid grid-cols-3 gap-2">
        <Button className="bg-[#1A3A6F] hover:bg-[#2A4A7F] text-white text-xs font-bold py-2 px-2 rounded-md flex justify-between items-center">
          <span>1</span>
          <span>{homeOdds}</span>
        </Button>
        <Button className="bg-[#1A3A6F] hover:bg-[#2A4A7F] text-white text-xs font-bold py-2 px-2 rounded-md flex justify-between items-center">
          <span>X</span>
          <span>{drawOdds}</span>
        </Button>
        <Button className="bg-[#1A3A6F] hover:bg-[#2A4A7F] text-white text-xs font-bold py-2 px-2 rounded-md flex justify-between items-center">
          <span>2</span>
          <span>{awayOdds}</span>
        </Button>
      </div>

      {/* View Details button */}
      <Button className="mt-4 bg-[#2A4A7F] hover:bg-[#3A5A8F] text-white text-xs font-bold py-2 px-4 rounded-md flex justify-center items-center space-x-1">
        <span>View Details</span>
        <ChevronRight size={14} />
      </Button>
    </div>
  );
};

export default Oddscard;