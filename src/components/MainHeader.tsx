"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Search, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const MainHeader = () => {
  const sportsCategories = ['Football', 'Basketball', 'Tennis', 'A.Football', 'Golf'];

  return (
    <div className="fixed top-0 left-60 right-0 h-16 flex items-center justify-between px-8 pr-20 border-b border-gray-700 z-50 bg-vanta-blue-dark"> {/* Added bg-vanta-blue-dark */}
      {/* Left Section: Sports Categories and How It Works */}
      <div className="flex items-center space-x-6">
        {sportsCategories.map((category) => (
          <Link key={category} to={`/sports/${category.toLowerCase().replace('.', '')}`}>
            <Button
              variant="ghost"
              className={`font-bold text-lg ${category === 'Football' ? 'text-vanta-neon-blue' : 'text-vanta-text-light'} hover:bg-transparent p-0 h-auto`} {/* Updated text colors */}
            >
              {category}
            </Button>
          </Link>
        ))}
        {/* How It Works link */}
        <Link to="/how-it-works" className="flex items-center space-x-1 ml-4">
          <AlertCircle size={18} className="text-vanta-neon-blue" /> {/* Updated icon color */}
          <Button variant="ghost" className="text-vanta-neon-blue font-bold text-lg hover:bg-transparent p-0 h-auto"> {/* Updated text color */}
            How it works
          </Button>
        </Link>
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex-grow max-w-lg mx-8 relative bg-vanta-blue-dark rounded-full h-10 flex items-center border border-vanta-neon-blue"> {/* Updated background and added border */}
        <Search className="absolute left-3 text-vanta-neon-blue" size={18} /> {/* Updated icon color */}
        <Input
          type="text"
          placeholder="Search for matches, teams, or players..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-transparent border-none text-vanta-text-light placeholder-vanta-text-light/70 focus:ring-0" {/* Updated text and placeholder colors */}
        />
      </div>

      {/* Right Section: Login, Register */}
      <div className="flex items-center space-x-4">
        <Link to="/login">
          <Button className="bg-vanta-blue-dark text-vanta-text-light border border-vanta-neon-blue rounded-full px-6 py-2 font-bold hover:bg-vanta-blue-dark/80"> {/* Updated colors and border */}
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button className="bg-vanta-neon-blue text-vanta-blue-dark rounded-full px-6 py-2 font-bold hover:bg-vanta-neon-blue/80"> {/* Updated colors */}
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MainHeader;