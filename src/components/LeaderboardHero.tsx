"use client";

import React from 'react';

const LeaderboardHero: React.FC = () => {
  return (
    <div className="bg-vanta-blue-medium rounded-xl p-8 flex flex-col items-start justify-start w-[429px] h-[303px]">
      <h1 className="text-[20px] font-bold text-vanta-text-light mb-4">Leaderboard</h1>
      <p className="text-xl text-vanta-text-medium">Login to view leaderboard</p>
    </div>
  );
};

export default LeaderboardHero;