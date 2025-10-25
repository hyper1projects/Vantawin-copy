"use client";

import React from 'react';
import { useParams } from 'react-router-dom';
import SportCategoryButtons from '../components/SportCategoryButtons';
import SectionHeader from '../components/SectionHeader'; // Assuming you might want a header for the page

const SportCategoryPage: React.FC = () => {
  const { category } = useParams<{ category: string }>(); // Get the category from the URL

  // Capitalize the first letter of the category for display
  const formattedCategory = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Sport';

  return (
    <div className="p-4">
      <SectionHeader title={`${formattedCategory} Games`} className="mb-4" textColor="text-vanta-text-light" />
      <SportCategoryButtons selectedCategory={formattedCategory} /> {/* Pass the category to highlight the button */}
      <p className="text-vanta-text-medium mt-4">
        Content for the {formattedCategory} category will go here.
      </p>
      {/* You can add more components or game listings specific to the selected sport here */}
    </div>
  );
};

export default SportCategoryPage;