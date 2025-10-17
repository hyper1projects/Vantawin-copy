"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  icon: string; // Using string for emoji icons for simplicity
  link: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="block">
      <Card className="bg-vanta-blue-medium text-vanta-text-light border-none rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 h-full flex flex-col justify-between">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          <div className="text-4xl">{icon}</div>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col justify-between">
          <CardDescription className="text-vanta-text-light text-opacity-70 mb-4">
            {description}
          </CardDescription>
          <div className="flex items-center text-vanta-neon-blue hover:underline">
            Play Now <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default GameCard;