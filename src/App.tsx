import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import PredictRedeemCard from './components/PredictRedeemCard'; // Import the PredictRedeemCard

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-vanta-blue-dark">
        <Sidebar />
        <div className="flex-1 flex flex-col ml-64 mr-80"> {/* Added mr-80 to offset the fixed right card */}
          <Header />
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Index />} />
            </Routes>
          </main>
        </div>
        <PredictRedeemCard /> {/* Render the PredictRedeemCard here */}
      </div>
    </Router>
  );
}

export default App;