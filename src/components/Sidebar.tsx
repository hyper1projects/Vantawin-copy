"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Wallet, Settings, User, LogOut } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-vanta-blue-medium text-vanta-text-light p-6 flex flex-col h-screen shadow-lg">
      <div className="text-3xl font-extrabold text-vanta-neon-blue mb-10 text-center">
        Vantawin
      </div>
      <nav className="flex-1">
        <ul>
          <li className="mb-4">
            <Link
              to="/"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-vanta-blue-light transition-colors duration-200"
            >
              <Home className="mr-4 h-6 w-6" />
              Home
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/wallet"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-vanta-blue-light transition-colors duration-200"
            >
              <Wallet className="mr-4 h-6 w-6" />
              Wallet
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/profile"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-vanta-blue-light transition-colors duration-200"
            >
              <User className="mr-4 h-6 w-6" />
              Profile
            </Link>
          </li>
          <li className="mb-4">
            <Link
              to="/settings"
              className="flex items-center p-3 rounded-lg text-lg hover:bg-vanta-blue-light transition-colors duration-200"
            >
              <Settings className="mr-4 h-6 w-6" />
              Settings
            </Link>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        <button className="flex items-center p-3 rounded-lg text-lg text-red-400 hover:bg-vanta-blue-light transition-colors duration-200 w-full">
          <LogOut className="mr-4 h-6 w-6" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;