"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Gamepad2, BarChart3, Wallet, FileText, HelpCircle, Mail, Gift, Bell } from 'lucide-react'; // Added Gift and Bell icons
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Games', path: '/games', icon: Gamepad2 },
    { name: 'Pools', path: '/pools', icon: BarChart3 }, // Changed icon to BarChart3 as per image
    { name: 'Leaderboard', path: '/leaderboard', icon: Wallet }, // Changed icon to Wallet as per image
    { name: 'Wallet', path: '/wallet', icon: Gift }, // Changed icon to Gift as per image
  ];

  const bottomItems = [
    { name: 'Rewards Hub', path: '/rewards', icon: Gift },
    { name: 'User Settings', path: '/user-settings', icon: Bell },
    { name: 'Terms of use', path: '/terms-of-use', icon: FileText },
    { name: 'Help & Information', path: '/help', icon: HelpCircle },
    { name: 'Contact Us', path: '/contact', icon: Mail },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-vanta-blue-dark text-vanta-text-light p-6 flex flex-col rounded-xl z-50 m-4"> {/* Added m-4 for margin and rounded-xl for all corners */}
      <div className="flex items-center mb-10">
        <span className="text-2xl font-bold text-vanta-text-light">VANTA</span>
        <span className="text-2xl font-bold text-vanta-accent-blue">WIN</span>
      </div>

      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={cn(
                  "relative flex items-center py-3 rounded-lg transition-colors duration-200",
                  location.pathname === item.path
                    ? "bg-vanta-active-bg text-vanta-text-light font-semibold pl-5" // Adjusted padding for accent bar
                    : "text-vanta-text-light hover:bg-vanta-blue-medium pl-3"
                )}
              >
                {location.pathname === item.path && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 h-3/4 w-1 bg-vanta-accent-blue rounded-full" />
                )}
                <item.icon className={cn("h-5 w-5 mr-3", location.pathname === item.path ? "ml-0" : "ml-2")} /> {/* Adjusted icon margin */}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-auto"> {/* Pushes this section to the bottom */}
        <ul>
          {bottomItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className="flex items-center p-3 text-vanta-text-light hover:bg-vanta-blue-medium rounded-lg transition-colors duration-200"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.name}
                {/* ChevronRight is not in the image for these items, removing it */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;