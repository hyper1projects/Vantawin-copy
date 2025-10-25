"use client";

import React, { useState, useEffect } from 'react';
import MatchCard from '../components/MatchCard';
import SectionHeader from '../components/SectionHeader';
import SportCategoryButtons from '../components/SportCategoryButtons';
import LiveGamesSection from '../components/LiveGamesSection';
import { useLocation, useNavigate } from 'react-router-dom';

const Games = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get category from URL query parameter, default to 'football'
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get('category') || 'football';
  
  const [selectedSport, setSelectedSport] = useState<string>(urlCategory);

  useEffect(() => {
    // Update selectedSport state if URL category changes
    setSelectedSport(urlCategory);
  }, [urlCategory]);

  const handleSelectCategory = (category: string) => {
    // Update URL with the new category query parameter
    navigate(`/games?category=${category.toLowerCase()}`);
  };

  // Dummy data for demonstration. In a real app, this would come from an API.
  const premierLeagueGames = [
    { id: '3', team1: 'Arsenal', team2: 'Chelsea', time: '15:00', date: '2023-10-28', odds1: 2.0, oddsX: 3.4, odds2: 3.6 },
    { id: '4', team1: 'Man Utd', team2: 'Liverpool', time: '17:30', date: '2023-10-28', odds1: 2.8, oddsX: 3.3, odds2: 2.5 },
  ];

  const formattedSelectedSport = selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1);

  return (
    <div className="p-4">
      {/* Sport Category Buttons Section */}
      <SportCategoryButtons 
        onSelectCategory={handleSelectCategory} 
        selectedCategory={formattedSelectedSport} 
      />

      {/* Conditionally render content based on selectedSport */}
      {selectedSport === 'football' ? (
        <>
          <div className="mt-8">
            <LiveGamesSection />
          </div>

          {/* Premier League Games Header */}
          <h2 className="text-2xl font-bold mb-4 mt-8 text-vanta-text-light">Premier League Games</h2>
          {/* Premier League Games Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {premierLeagueGames.map(game => (
              <MatchCard key={game.id} {...game} />
            ))}
          </div>
        </>
      ) : (
        <div className="mt-8">
          <SectionHeader title={`${formattedSelectedSport} Games`} className="mb-4" textColor="text-vanta-text-light" />
          <p className="text-vanta-text-medium mt-4">
            Content for the {formattedSelectedSport} category will go here.
          </p>
        </div>
      )}
    </div>
  );
};

export default Games;