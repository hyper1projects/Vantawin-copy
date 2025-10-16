import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-8">
      {/* Images Section */}
      <div className="absolute top-24 right-8 flex flex-col gap-4">
        <img
          src="/images/Group 1000005755.png"
          alt="Leaderboard"
          className="w-64 rounded-xl"
        />
        <img
          src="/images/Group 1000005762.png"
          alt="Prediction Card"
          className="w-64 rounded-xl"
        />
      </div>
    </div>
  );
};

export default Index;