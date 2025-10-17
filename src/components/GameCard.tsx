"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  icon: string; // Using string for emoji icons for simplicity
  link: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="block bg-vanta-blue-medium rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 group">
      <div className="flex items-center mb-4">
        <div className="text-4xl mr-4">{icon}</div>
        <h3 className="text-2xl font-bold text-vanta-text-light group-hover:text-vanta-neon-blue transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-vanta-text-light opacity-80 mb-6 text-base">{description}</p>
      <div className="flex items-center text-vanta-neon-blue group-hover:text-vanta-text-light transition-colors duration-300">
        <span className="font-semibold text-base">Play Now</span>
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </div>
    </Link>
  );
};

export default GameCard;