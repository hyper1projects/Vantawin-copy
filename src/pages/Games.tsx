"use client";

import React, { useState, useEffect } from 'react';
import SportCategoryButtons from '../components/SportCategoryButtons';
import LiveGamesSection from '../components/LiveGamesSection';
import PremierLeagueSection from '../components/PremierLeagueSection';
import LaLigaSection from '../components/LaLigaSection';
import SectionHeader from '../components/SectionHeader'; // Keep SectionHeader for general category titles
// Removed LivePredictionsHeader import as it's no longer used directly
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import Accordion components

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
        <Accordion type="multiple" defaultValue={["live-games", "premier-league", "la-liga"]} className="w-full space-y-4">
          {/* Live Games Accordion Item */}
          <AccordionItem value="live-games" className="bg-vanta-blue-medium rounded-[14px] shadow-sm border-none">
            <AccordionTrigger className="bg-[#0D2C60] rounded-[14px] px-6 py-4 text-white text-xl font-semibold hover:no-underline data-[state=open]:rounded-b-none">
              Live Predictions
            </AccordionTrigger>
            <AccordionContent className="p-4">
              <LiveGamesSection />
            </AccordionContent>
          </AccordionItem>

          {/* Premier League Accordion Item */}
          <AccordionItem value="premier-league" className="bg-vanta-blue-medium rounded-[14px] shadow-sm border-none">
            <AccordionTrigger className="bg-[#0D2C60] rounded-[14px] px-6 py-4 text-white text-xl font-semibold hover:no-underline data-[state=open]:rounded-b-none">
              England Premier League
            </AccordionTrigger>
            <AccordionContent className="p-4">
              <PremierLeagueSection />
            </AccordionContent>
          </AccordionItem>

          {/* La Liga Accordion Item */}
          <AccordionItem value="la-liga" className="bg-vanta-blue-medium rounded-[14px] shadow-sm border-none">
            <AccordionTrigger className="bg-[#0D2C60] rounded-[14px] px-6 py-4 text-white text-xl font-semibold hover:no-underline data-[state=open]:rounded-b-none">
              Spain La Liga
            </AccordionTrigger>
            <AccordionContent className="p-4">
              <LaLigaSection />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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