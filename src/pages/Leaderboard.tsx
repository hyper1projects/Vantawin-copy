"use client";

import React from 'react';
import LeaderboardHero from '../components/LeaderboardHero';

const Leaderboard = () => {
  return (
    <div className="p-4"> {/* Added p-4 back to the page for consistent spacing */}
      <LeaderboardHero />
      {/* Additional leaderboard content can go here later */}
    </div>
  );
};

export default Leaderboard;