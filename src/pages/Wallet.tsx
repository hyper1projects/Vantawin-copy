"use client";

import React from 'react';
import SectionHeader from '../components/SectionHeader';
import WalletOverviewCard from '../components/WalletOverviewCard'; // Import the new component

const Wallet = () => {
  return (
    <div className="p-4">
      <SectionHeader title="Wallet" className="mb-4" textColor="text-vanta-text-light" />
      <p className="text-vanta-text-medium mb-8">Manage your funds here!</p>
      
      {/* Render the new WalletOverviewCard component */}
      <WalletOverviewCard />
    </div>
  );
};

export default Wallet;