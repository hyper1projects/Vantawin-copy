"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainHeader from './components/MainHeader';
import Index from './pages/Index';
import Games from './pages/Games';
import Pools from './pages/Pools';
import Leaderboard from './pages/Leaderboard';
import Wallet from './pages/Wallet';
import Rewards from './pages/Rewards'; // New import
import UserSettings from './pages/UserSettings'; // New import
import NotFound from './pages/NotFound';
import Terms from './pages/Terms';
import Help from './pages/Help';
import Contact from './pages/Contact';
import Users from './pages/Users';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-vanta-blue-dark text-vanta-text-light">
        <Sidebar />
        <div className="flex-1 ml-[19rem] mt-4 mr-4 mb-4 rounded-xl overflow-hidden"> {/* Adjusted margin-left for wider sidebar + its margin, added margin and rounded-xl to main content */}
          <MainHeader />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/games" element={<Games />} />
              <Route path="/pools" element={<Pools />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/rewards" element={<Rewards />} /> {/* New route */}
              <Route path="/user-settings" element={<UserSettings />} /> {/* New route */}
              <Route path="/users" element={<Users />} />
              <Route path="/terms-of-use" element={<Terms />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/help" element={<Help />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/support" element={<Support />} />
              <Route path="/sports/:category" element={<div>Sport Category Page</div>} />
              <Route path="/how-it-works" element={<div>How It Works Page</div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;