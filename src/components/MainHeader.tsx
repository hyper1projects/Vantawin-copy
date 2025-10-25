"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const MainHeader = () => {
  const location = useLocation();

  // Updated categories: removed 'A.Football' and replaced 'Golf' with 'Esports'
  const categories = ['Home', 'Games', 'Live', 'Esports', 'Casino']; 

  const isActive = (path: string) => {
    if (path === 'Home') {
      return location.pathname === '/';
    }
    // For other categories, check if the path starts with /sports/category
    return location.pathname.startsWith(`/sports/${path.toLowerCase().replace('.', '')}`);
  };

  return (
    <header className="bg-vanta-blue-dark text-vanta-text-light p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <Link to="/" className="text-2xl font-bold text-vanta-neon-blue">VANTA</Link>
        <nav className="flex space-x-4">
          {categories.map((category) => (
            <Link key={category} to={category === 'Home' ? '/' : `/sports/${category.toLowerCase().replace('.', '')}`}>
              <Button
                variant="ghost"
                className={cn(
                  "font-medium text-sm p-0 h-auto hover:bg-transparent",
                  isActive(category) ? 'text-[#00EEEE]' : 'text-[#B4B2C0]'
                )}
              >
                {category}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
      {/* Add other header elements like search, user profile, etc. here */}
      <div>
        {/* Example: Search bar or user icon */}
      </div>
    </header>
  );
};

export default MainHeader;