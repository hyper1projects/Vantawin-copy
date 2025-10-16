"use client";

import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const Index = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-4">
      <Link to="/leaderboard"> {/* Wrap the image in a Link */}
        <img
          src="/images/Group 1000005755.png"
          alt="Leaderboard"
          className="max-w-full h-auto"
        />
      </Link>
      <img
        src="/images/Group 1000005756.png"
        alt="Prediction Card"
        className="max-w-full h-auto"
      />
    </div>
  );
};

export default Index;