"use client";

import React from 'react';
import PredictionSlipCard from '../components/PredictionSlipCard';
import GameCard from '../components/GameCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Index: React.FC = () => {
  return (
    <div className="p-6 bg-vanta-blue-dark min-h-screen text-vanta-text-light">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-vanta-text-light">Welcome to Vantawin</h1>
        <Button className="bg-vanta-neon-blue hover:bg-vanta-neon-blue/90 text-vanta-blue-dark font-semibold py-2 px-6 rounded-lg shadow-md transition-colors duration-200">
          View All Games <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <GameCard
          title="Coin Flip"
          description="Predict the outcome of a coin flip and double your stake!"
          icon="🪙"
          link="/game/coin-flip"
        />
        <GameCard
          title="Dice Roll"
          description="Roll the dice and guess the number for big wins."
          icon="🎲"
          link="/game/dice-roll"
        />
        <GameCard
          title="Rock Paper Scissors"
          description="Challenge the house in a classic game of strategy."
          icon="✊"
          link="/game/rock-paper-scissors"
        />
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-vanta-text-light mb-6">Your Prediction Slip</h2>
        <PredictionSlipCard />
      </div>

      <div className="mb-10">
        <h2 className="text-3xl font-bold text-vanta-text-light mb-6">Featured Games</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GameCard
            title="Higher or Lower"
            description="Guess if the next card will be higher or lower."
            icon="📈"
            link="/game/higher-lower"
          />
          <GameCard
            title="Roulette"
            description="Place your bets on the spinning wheel."
            icon="🎡"
            link="/game/roulette"
          />
          <GameCard
            title="Slots"
            description="Spin the reels for a chance at the jackpot."
            icon="🎰"
            link="/game/slots"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;