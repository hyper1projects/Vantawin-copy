"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const RightSidebar = () => {
  const [selectedMultiplier, setSelectedMultiplier] = useState(2.0);
  const [betAmount, setBetAmount] = useState(10);

  const handleMultiplierChange = (value: number[]) => {
    setSelectedMultiplier(value[0]);
  };

  const handleBetAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBetAmount(Number(e.target.value));
  };

  const handlePlaceBet = () => {
    console.log(`Bet placed: ${betAmount} on ${selectedMultiplier}x multiplier`);
    // Here you would typically send this data to a backend or update global state
  };

  return (
    <div className="w-full md:w-1/4 bg-gray-800 text-white p-6 flex flex-col">
      <h3 className="text-2xl font-bold mb-6">Place Your Bet</h3>

      {/* Bet Amount Input */}
      <div className="mb-6">
        <Label htmlFor="bet-amount" className="text-lg font-semibold mb-2 block">Bet Amount</Label>
        <Input
          id="bet-amount"
          type="number"
          value={betAmount}
          onChange={handleBetAmountChange}
          min="1"
          className="w-full bg-gray-700 border-gray-600 text-white"
        />
      </div>

      <Button onClick={handlePlaceBet} className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-md text-lg">
        Place Bet
      </Button>

      <div className="mt-auto pt-6 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          Your current balance: <span className="font-bold text-white">1,250 Points</span>
        </p>
      </div>
    </div>
  );
};

export default RightSidebar;