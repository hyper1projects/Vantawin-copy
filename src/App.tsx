"use client";

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IndexPage from './pages/Index'; // Assuming your main content is in Index.tsx

// Placeholder component for match details
const MatchDetailsPage: React.FC = () => {
  return (
    <div className="p-4 text-white">
      <h1 className="text-2xl font-bold">Match Details</h1>
      <p>This is where the details for a specific match would be displayed.</p>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/match/:matchId" element={<MatchDetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;