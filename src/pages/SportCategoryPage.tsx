"use client";

import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SportCategoryButtons from '../components/SportCategoryButtons';
import SectionHeader from '../components/SectionHeader';
import LiveGamesSection from '../components/LiveGamesSection';

const SportCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const navigate = useNavigate();

  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Sport';

  // Handle category selection from SportCategoryButtons
  const handleSelectCategory = (selected: string) => {
    if (selected === 'Football') {
      navigate('/games'); // Route to /games if Football is selected
    } else {
      navigate(`/sports/${selected.toLowerCase()}`); // Otherwise, navigate to the specific sport category page
    }
  };

  // Redirect if the current category is 'football' but the route should be '/games'
  useEffect(() => {
    if (category?.toLowerCase() === 'football') {
      navigate('/games', { replace: true }); // Redirect to /games and replace history entry
    }
  }, [category, navigate]);


  return (
    <div className="p-4">
      <SectionHeader title={`${formattedCategory} Games`} className="mb-4" textColor="text-vanta-text-light" />
      <SportCategoryButtons 
        onSelectCategory={handleSelectCategory} 
        selectedCategory={formattedCategory} 
      />
      {/* LiveGamesSection is conditionally rendered here, but the page will redirect if category is 'football' */}
      {/* So, this block will effectively not render if the category is 'football' because of the redirect */}
      {category?.toLowerCase() === 'football' && (
        <div className="mt-8">
          <LiveGamesSection />
        </div>
      )}
      <p className="text-vanta-text-medium mt-4">
        Content for the {formattedCategory} category will go here.
      </p>
    </div>
  );
};

export default SportCategoryPage;