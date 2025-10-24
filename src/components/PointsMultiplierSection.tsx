"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Trophy, TrendingUp, Star } from 'lucide-react';

const PointsMultiplierSection: React.FC = () => {
  const multipliers = [
    {
      title: 'Weekend Boost',
      multiplier: '2x',
      description: 'Earn double points on all weekend bets!',
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
    },
    {
      title: 'Premier League Special',
      multiplier: '1.5x',
      description: 'Get 1.5x points on all Premier League matches.',
      icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    },
    {
      title: 'New User Bonus',
      multiplier: '3x',
      description: 'Triple points on your first 3 bets!',
      icon: <Star className="h-6 w-6 text-blue-500" />,
    },
  ];

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Points Multipliers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {multipliers.map((item, index) => (
          <Card key={index} className="text-center">
            <CardHeader>
              <div className="flex justify-center mb-2">{item.icon}</div>
              <CardTitle className="text-lg">{item.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-purple-700 mb-2">{item.multiplier}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PointsMultiplierSection;