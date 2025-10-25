"use client";

import React from 'react';
import MatchCard from '../components/MatchCard';
import LiveGamesSection from '../components/LiveGamesSection';
import SectionHeader from '../components/SectionHeader';
// TopGamesSection import removed

const Games = () => {
  // Dummy data for demonstration. In a real app, this would come from an API.
  const premierLeagueGames = [
    { id: '3', team1: 'Arsenal', team2: 'Chelsea', time: '15:00', date: '2023-10-28', odds1: 2.0, oddsX: 3.4, odds2: 3.6 },
    { id: '4', team1: 'Man Utd', team2: 'Liverpool', time: '17:30', date: '2023-10-28', odds1: 2.8, oddsX: 3.3, odds2: 2.5 },
  ];

  return (
    <div className="p-4">
      {/* Top Games Section - removed */}

      {/* Live Games Section */}
      <div className="mt-8"> {/* Added margin-top for spacing */}
        <LiveGamesSection />
      </div>

      {/* Premier League Games Header */}
      <h2 className="text-2xl font-bold mb-4 mt-8">Premier League Games</h2>
      {/* Premier League Games Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {premierLeagueGames.map(game => (
          <MatchCard key={game.id} {...game} />
        ))}
      </div>
    </div>
  );
};

export default Games;