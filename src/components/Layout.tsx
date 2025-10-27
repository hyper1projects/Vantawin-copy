"use client";

import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'; // Import useLocation
import Sidebar from './Sidebar';
import MainHeader from './MainHeader';
import RightSidebar from './RightSidebar';

const Layout = () => {
  const location = useLocation();
  const excludedPaths = ['/pools', '/leaderboard', '/wallet']; // Paths where RightSidebar should not appear
  const showRightSidebar = !excludedPaths.includes(location.pathname);

  return (
    <div className="flex min-h-screen bg-vanta-blue-dark text-vanta-text-light">
      <Sidebar />
      <MainHeader />
      <div className={`flex-1 ml-60 mt-16 ${showRightSidebar ? 'mr-80' : 'mr-4'} mb-4 rounded-xl overflow-hidden`}>
        <div className="p-4">
          <Outlet /> {/* This is where your route components will be rendered */}
        </div>
      </div>
      {showRightSidebar && <RightSidebar />} {/* Conditionally render RightSidebar */}
    </div>
  );
};

export default Layout;