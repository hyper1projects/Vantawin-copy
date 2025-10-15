"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Gamepad, Wallet, Trophy, Users, Settings, FileText, HelpCircle, Mail, Gift } from 'lucide-react';

const Sidebar = () => {
  const primaryLinks = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Games', icon: Gamepad, path: '/games' },
    // { name: 'Pools', icon: Wallet, path: '/pools' }, // Removed Pools link
    { name: 'Leaderboard', icon: Trophy, path: '/leaderboard' },
    { name: 'Wallet', icon: Wallet, path: '/wallet' },
  ];

  const secondaryLinks = [
    { name: 'Rewards Hub', icon: Gift, path: '/rewards', isGold: true },
    { name: 'User Settings', icon: Settings, path: '/settings' },
    { name: 'Terms of Use', icon: FileText, path: '/terms' },
    { name: 'Help & Information', icon: HelpCircle, path: '/help' },
    { name: 'Contact Us', icon: Mail, path: '/contact' },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex-col border-r border-vanta-border bg-vanta-blue-dark p-4 z-50">
      <div className="flex items-center justify-center h-16 mb-6">
        <h1 className="text-2xl font-bold text-vanta-text-light">VANTA WIN</h1>
      </div>

      <nav className="flex-grow">
        <ul className="space-y-2 mb-6">
          {primaryLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="flex items-center p-2 text-vanta-text-light hover:bg-vanta-blue-light rounded-md transition-colors"
              >
                <link.icon className="mr-3 h-5 w-5" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="space-y-2">
          {secondaryLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`flex items-center p-2 hover:bg-vanta-blue-light rounded-md transition-colors text-sm ${link.isGold ? 'text-yellow-400' : 'text-vanta-text-light'}`}
              >
                <link.icon className="mr-3 h-4 w-4" />
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;