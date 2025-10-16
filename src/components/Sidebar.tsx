"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Settings, LogOut, Users, Zap, Trophy, MessageSquare } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Leaderboard', icon: BarChart2, path: '/leaderboard' },
    { name: 'Predictions', icon: Zap, path: '/predictions' },
    { name: 'Community', icon: Users, path: '/community' },
    { name: 'Tournaments', icon: Trophy, path: '/tournaments' },
    { name: 'Chat', icon: MessageSquare, path: '/chat' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-60 bg-vanta-blue-dark text-vanta-text-light flex flex-col z-50 rounded-r-2xl">
      <div className="bg-vanta-blue-medium rounded-r-2xl flex flex-col gap-2 flex-grow font-outfit"> {/* Added font-outfit class */}
        <div className="flex items-center justify-center p-4 mb-4">
          <span className="text-xl font-bold text-vanta-text-light">VANTA</span>
          <span className="text-xl font-bold text-vanta-neon-blue">WIN</span>
        </div>

        <nav className="flex-grow">
          <ul>
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 p-3 mx-3 rounded-lg transition-colors duration-200
                    ${location.pathname === item.path
                      ? 'bg-vanta-neon-blue text-vanta-blue-dark font-semibold'
                      : 'text-vanta-text-light hover:bg-gray-700'
                    }`}
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto p-4 border-t border-gray-700">
          <ul>
            <li>
              <Link
                to="/settings"
                className={`flex items-center gap-3 p-3 mx-3 rounded-lg transition-colors duration-200
                  ${location.pathname === '/settings'
                    ? 'bg-vanta-neon-blue text-vanta-blue-dark font-semibold'
                    : 'text-vanta-text-light hover:bg-gray-700'
                  }`}
              >
                <Settings size={20} />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => console.log('Logout')}
                className="flex items-center gap-3 p-3 mx-3 rounded-lg text-vanta-text-light hover:bg-gray-700 w-full text-left transition-colors duration-200"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;