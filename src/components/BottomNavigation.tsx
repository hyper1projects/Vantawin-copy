"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Gamepad2, Wallet, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

const BottomNavigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", icon: Home, path: "/" },
    { name: "Games", icon: Gamepad2, path: "/games" },
    { name: "Pools", icon: Trophy, path: "/pools" },
    { name: "Leaderboard", icon: Users, path: "/leaderboard" },
    { name: "Wallet", icon: Wallet, path: "/wallet" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 h-[4.5rem] bg-vanta-blue-medium border-t border-gray-700 z-50 md:hidden">
      <div className="flex items-center justify-around h-full px-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex flex-col items-center justify-center flex-1 h-full transition-colors duration-200 py-1.5",
                isActive ? "text-vanta-neon-blue" : "text-gray-400 hover:text-vanta-text-light"
              )}
            >
              <item.icon size={24} className="mb-1" />
              <span className="text-xs font-medium">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
