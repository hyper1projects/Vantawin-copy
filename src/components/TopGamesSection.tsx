import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import GameListing from './GameListing';
// Removed icon imports: Football, Basketball, Tennis, Gamepad2, Golf

const TopGamesSection: React.FC = () => {
  // Placeholder data for game listings
  const games = [
    {
      status: 'live',
      timeOrDate: 'Live',
      team1Name: 'Crystal Palace',
      team1Logo: '/public/placeholder.svg',
      team2Name: 'West Ham United',
      team2Logo: '/public/placeholder.svg',
      predictionOptions: ['CRY', 'DRAW', 'WHU'],
    },
    {
      status: 'live',
      timeOrDate: 'Live',
      team1Name: 'Crystal Palace',
      team1Logo: '/public/placeholder.svg',
      team2Name: 'West Ham United',
      team2Logo: '/public/placeholder.svg',
      predictionOptions: ['CRY', 'DRAW', 'WHU'],
    },
    {
      status: 'upcoming',
      timeOrDate: '9:00 AM AUG 8',
      team1Name: 'Crystal Palace',
      team1Logo: '/public/placeholder.svg',
      team2Name: 'West Ham United',
      team2Logo: '/public/placeholder.svg',
      predictionOptions: ['CRY', 'DRAW', 'WHU'],
    },
  ];

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-vanta-text-light mb-4">Top Games</h2>
      <div className="flex items-center justify-between mb-4">
        <Tabs defaultValue="all">
          <TabsList className="bg-vanta-blue-medium border border-vanta-border rounded-lg p-1">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-vanta-accent-blue data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md text-vanta-text-light"
            >
              All
            </TabsTrigger>
            <TabsTrigger
              value="live"
              className="data-[state=active]:bg-vanta-accent-blue data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md text-vanta-text-light"
            >
              Live
            </TabsTrigger>
            <TabsTrigger
              value="up-next"
              className="data-[state=active]:bg-vanta-accent-blue data-[state=active]:text-white data-[state=active]:shadow-sm rounded-md text-vanta-text-light"
            >
              Up Next
            </TabsTrigger>
          </TabsList>
        </Tabs>
        {/* Removed the div containing sport icons */}
      </div>

      <div className="flex flex-col gap-3">
        {games.map((game, index) => (
          <GameListing key={index} {...game} />
        ))}
      </div>

      <div className="text-center mt-6">
        <Button className="bg-vanta-accent-blue text-white hover:bg-vanta-accent-blue/90 rounded-lg px-6 py-2">
          Show More
        </Button>
      </div>
    </div>
  );
};

export default TopGamesSection;