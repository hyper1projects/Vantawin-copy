"use client";

import React from 'react';
// Removed SectionHeader import as it's no longer used
import WalletOverviewCard from '../components/WalletOverviewCard';

const Wallet = () => {
  return (
    <div className="p-4">
      {/* Removed SectionHeader component */}
      {/* Removed "Manage your funds here!" text */}
      
      {/* Render the WalletOverviewCard component */}
      <WalletOverviewCard />
    </div>
  );
};

export default Wallet;