"use client";

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, BarChart2, Settings, Users, Package, ShoppingCart, CreditCard, Bell, HelpCircle, LogOut } from 'lucide-react';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Analytics', icon: BarChart2, path: '/analytics' },
    { name: 'Customers', icon: Users, path: '/customers' },
    { name: 'Products', icon: Package, path: '/products' },
    { name: 'Orders', icon: ShoppingCart, path: '/orders' },
    { name: 'Payments', icon: CreditCard, path: '/payments' },
    { name: 'Notifications', icon: Bell, path: '/notifications' },
  ];

  const bottomNavItems = [
    { name: 'Settings', icon: Settings, path: '/settings' },
    { name: 'Help & Support', icon: HelpCircle, path: '/help' },
    { name: 'Logout', icon: LogOut, path: '/logout' },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 flex flex-col border-r border-vanta-border bg-vanta-blue-dark p-4 z-50">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 mb-6">
        <h1 className="text-sm font-bold text-vanta-text-light">VANTA WIN</h1>
      </div>

      {/* Navigation */}
      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={cn(
                  "flex items-center p-3 rounded-md text-vanta-text-muted hover:bg-vanta-active-bg hover:text-vanta-text-light transition-colors",
                  location.pathname === item.path && "bg-vanta-active-bg text-vanta-text-light"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Bottom Navigation */}
      <nav className="mt-auto border-t border-vanta-border pt-4">
        <ul>
          {bottomNavItems.map((item) => (
            <li key={item.name} className="mb-2">
              <Link
                to={item.path}
                className={cn(
                  "flex items-center p-3 rounded-md text-vanta-text-muted hover:bg-vanta-active-bg hover:text-vanta-text-light transition-colors",
                  location.pathname === item.path && "bg-vanta-active-bg text-vanta-text-light"
                )}
              >
                <item.icon className="mr-3 h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;