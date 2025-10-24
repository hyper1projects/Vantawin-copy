// src/utils/logoMap.ts

import { TeamLogos } from '../assets/logos'; // Import the centralized logo map

export const getLogoSrc = (logoIdentifier: string): string => {
  // Check if the logoIdentifier exists in the centralized TeamLogos map
  return TeamLogos[logoIdentifier] || ''; // Return the logo or an empty string if not found
};