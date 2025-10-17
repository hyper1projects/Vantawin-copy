"use client";

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { Search, Bell, Settings, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';

const MainHeader = () => {
  const sportsCategories = ['Football', 'Basketball', 'Esports', 'Tennis', 'Cricket'];

  return (
    <div className="fixed top-0 left-60 right-80 h-16 flex items-center justify-between pl-0 pr-8 border-b border-gray-700 bg-vanta-blue-dark z-50">
      {/* Left Section: How It Works and Sports Categories */}
      <div className="flex items-center space-x-8">
        <Link to="/how-it-works">
          <Button variant="ghost" className="text-vanta-text-light hover:bg-vanta-blue-medium">
            How It Works
          </Button>
        </Link>
        {sportsCategories.map((category) => (
          <Link key={category} to={`/sports/${category.toLowerCase()}`}>
            <Button variant="ghost" className="text-vanta-text-light hover:bg-vanta-blue-medium">
              {category}
            </Button>
          </Link>
        ))}
      </div>

      {/* Middle Section: Search Bar */}
      <div className="flex-grow max-w-md mx-8 relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        <Input
          type="text"
          placeholder="Search for matches, teams, or players..."
          className="w-full pl-10 pr-4 py-2 rounded-full bg-vanta-blue-medium border-none text-vanta-text-light placeholder-gray-400 focus:ring-2 focus:ring-vanta-accent-blue"
        />
      </div>

      {/* Right Section: User Actions, Register, Login */}
      <div className="flex items-center space-x-4">
        <Link to="/register">
          <Button variant="ghost" className="text-vanta-text-light hover:bg-vanta-blue-medium">
            Register
          </Button>
        </Link>
        <Link to="/login">
          <Button variant="ghost" className="text-vanta-text-light hover:bg-vanta-blue-medium">
            Login
          </Button>
        </Link>
        <Button variant="ghost" size="icon" className="text-vanta-text-light hover:bg-vanta-blue-medium">
          <Bell size={20} />
        </Button>
        <Button variant="ghost" size="icon" className="text-vanta-text-light hover:bg-vanta-blue-medium">
          <Settings size={20} />
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default MainHeader;