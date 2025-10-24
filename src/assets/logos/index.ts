// src/assets/logos/index.ts

import manUnited from './man_united_logo.png';
import leicesterCity from './leicester_city_logo.png';
import chelseaLogo from './chelsea.png';
import liverpoolLogo from './liverpool.png';
import astonVillaLogo from './aston_villa_logo.png'; // Assuming this file exists

export const TeamLogos: { [key: string]: string } = {
    'MANU': manUnited,
    'LEIC': leicesterCity,
    'CRY': manUnited, // Placeholder for Crystal Palace
    'WHU': leicesterCity, // Placeholder for West Ham United
    'ASTON': astonVillaLogo, // Using Aston Villa logo
    'chelsea': chelseaLogo,
    'liverpool': liverpoolLogo,
};