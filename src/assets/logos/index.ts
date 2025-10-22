// src/assets/logos/index.ts

// Import the specific image files using relative paths from this file.
import manUnited from '../../../public/images/optimized_man_united_logo.png'; // Using optimized logo
import leicesterCity from '../../../public/images/optimized_leicester_city_logo.png'; // Using optimized logo
import crystalPalace from './England - Premier League/Crystal Palace.png';
import westHamUnited from './England - Premier League/West Ham United.png';
import astonVilla from './England - Premier League/Aston Villa.png';

// Export them in a central map using short, standardized keys.
export const TeamLogos: { [key: string]: string } = {
    'MANU': manUnited,
    'LEIC': leicesterCity,
    'CRY': crystalPalace,
    'WHU': westHamUnited,
    'ASTON': astonVilla,
};