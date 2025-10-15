"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Navbar = () => {
  const sportsCategories = [
    { name: 'Football', path: '/sports/football' },
    { name: 'Basketball', path: '/sports/basketball' },
    { name: 'Tennis', path: '/sports/tennis' },
    { name: 'A Football', path: '/sports/a-football' },
    { name: 'Golf', path: '/sports/golf' },
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-vanta-blue-dark border-b border-vanta-border flex items-center justify-between px-4 z-40">
      {/* Left Section: Sports Categories */}
      <div className="flex items-center space-x-6">
        {sportsCategories.map((category) => (
          <Link key={category.name} to={category.path} className="text-vanta-text-light hover:text-vanta-text-muted transition-colors text-sm">
            {category.name}
          </Link>
        ))}
      </div>

      {/* Center Section: How it works & Search Bar */}
      <div className="flex items-center space-x-6">
        <Link to="/how-it-works" className="text-vanta-text-light hover:text-vanta-text-muted transition-colors text-sm">
          How it works
        </Link>
        <div className="relative flex items-center">
          <Search className="absolute left-3 h-4 w-4 text-vanta-text-muted" />
          <Input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-2 rounded-md bg-vanta-blue-medium border border-vanta-border text-vanta-text-light placeholder:text-vanta-text-muted focus:outline-none focus:ring-1 focus:ring-vanta-accent-blue w-48"
          />
        </div>
      </div>

      {/* Right Section: Login & Register Buttons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" className="text-vanta-text-light hover:bg-vanta-blue-light">
          Login
        </Button>
        <Button className="bg-[#00eeee] hover:bg-[#00eeee]/90 text-white rounded-lg px-4 py-2">
          Register
        </Button>
      </div>
    </div>
  );
};

export default Navbar;