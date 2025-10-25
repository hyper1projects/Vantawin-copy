"use client";

import React from 'react';
import SectionHeader from '../components/SectionHeader';
import LeaderboardTable from '../components/LeaderboardTable';
import LeaderboardPodium from '../components/LeaderboardPodium'; // Import the new component

const Leaderboard = () => {
  // Dummy data for the leaderboard
  const leaderboardEntries = [
    { rank: 1, playerName: 'VantaMaster', score: 150000, isCurrentUser: false },
    { rank: 2, playerName: 'ProPredictor', score: 120000, isCurrentUser: false },
    { rank: 3, playerName: 'GoalGetter', score: 105000, isCurrentUser: false },
    { rank: 4, playerName: 'SportySpice', score: 98000, isCurrentUser: false },
    { rank: 5, playerName: 'BetKing', score: 92000, isCurrentUser: true }, // Example current user
    { rank: 6, playerName: 'AcePlayer', score: 85000, isCurrentUser: false },
    { rank: 7, playerName: 'TopScorer', score: 78000, isCurrentUser: false },
    { rank: 8, playerName: 'GameChanger', score: 70000, isCurrentUser: false },
    { rank: 9, playerName: 'LuckyCharm', score: 65000, isCurrentUser: false },
    { rank: 10, playerName: 'Fanatic', score: 60000, isCurrentUser: false },
  ];

  const top3Players = leaderboardEntries.filter(entry => entry.rank <= 3);
  const remainingPlayers = leaderboardEntries.filter(entry => entry.rank > 3);

  return (
    <div className="p-4">
      <SectionHeader title="Global Leaderboard" className="mb-6" textColor="text-vanta-text-light" />
      <LeaderboardPodium topPlayers={top3Players} className="mb-8" /> {/* Render the podium */}
      <LeaderboardTable entries={remainingPlayers} /> {/* Render the table with remaining players */}
    </div>
  );
};

export default Leaderboard;