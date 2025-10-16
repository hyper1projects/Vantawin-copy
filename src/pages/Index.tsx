import React from 'react';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-vanta-blue-dark text-vanta-text-light p-4"> {/* Added p-4 here */}
      <div className="container mx-auto py-6">
        {/* Content for the Index page will go here */}
        <h1 className="text-2xl font-bold mb-4">Welcome to VantaWin!</h1>
        <p className="text-vanta-text-medium">Select a game from the sidebar to get started.</p>
      </div>
    </div>
  );
};

export default Index;