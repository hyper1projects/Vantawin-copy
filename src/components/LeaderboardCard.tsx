import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const LeaderboardCard: React.FC = () => {
  return (
    <Card className="bg-vanta-blue-dark border border-vanta-border text-vanta-text-light rounded-xl">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Leaderboard</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-center h-32">
        <p className="text-vanta-text-muted">Login to view leaderboard</p>
      </CardContent>
    </Card>
  );
};

export default LeaderboardCard;