"use client";

import React, { useState, useEffect } from 'react';
import SportCategoryButtons from '../components/SportCategoryButtons';
import LiveGamesSection from '../components/LiveGamesSection';
import PremierLeagueSection from '../components/PremierLeagueSection';
import LaLigaSection from '../components/LaLigaSection';
import SectionHeader from '../components/SectionHeader';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from 'lucide-react'; // Import ChevronRight for the trigger

const Games = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);
  const urlCategory = queryParams.get('category') || 'football';
  
  const [selectedSport, setSelectedSport] = useState<string>(urlCategory);

  useEffect(() => {
    setSelectedSport(urlCategory);
  }, [urlCategory]);

  const handleSelectCategory = (category: string) => {
    navigate(`/games?category=${category.toLowerCase()}`);
  };

  const formattedSelectedSport = selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1);

  // Dummy live count for the header
  const liveCount = 2; // Based on the dummy data in LiveGamesSection

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
            <AccordionTrigger className="bg-[#0D2C60] rounded-[14px] px-6 py-4 text-white text-xl font-semibold hover:no-underline data-[state=open]:rounded-b-none flex justify-between items-center ">
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-semibold text-white">Live Predictions</h2>
                <span className="bg-[#01112D] text-vanta-neon-blue text-sm font-bold px-3 py-1 rounded-full">
                  {liveCount}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-vanta-neon-blue">All Live</span>
                <span className="bg-[#01112D] text-vanta-neon-blue text-sm font-bold px-3 py-1 rounded-full">
                  {liveCount}
                </span>
              </div>
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