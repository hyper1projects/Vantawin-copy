import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import RightSidebar from './components/RightSidebar';
import Index from './pages/Index';
import './app/globals.css'; // Ensure global styles are imported

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background text-foreground"> {/* Apply custom background color */}
        <Sidebar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Add other routes here */}
          </Routes>
        </main>
        <RightSidebar />
      </div>
    </Router>
  );
}

export default App;