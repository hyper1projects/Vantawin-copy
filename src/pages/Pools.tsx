"use client";

import React from 'react';
import SectionHeader from '../components/SectionHeader';
import PoolCard from '../components/PoolCard';
import { Pool } from '../types/pool';

const Pools = () => {
  // Dummy data for pools
  const allPools: Pool[] = [
    {
      id: 'pool-1',
      name: 'Bronze Pool I',
      status: 'ongoing',
      prizePool: 50000,
      entryFee: 50,
      participants: 120,
      maxParticipants: 200,
      startTime: '2024-10-20T10:00:00Z',
      endTime: '2024-11-30T23:59:59Z',
      description: 'Predict the outcomes of Premier League matches this month!',
      image: '/images/carousel/NG-1MCasinoTournament2610.jpeg',
      tier: 'Bronze',
    },
    {
      id: 'pool-2',
      name: 'Silver Pool I',
      status: 'ongoing',
      prizePool: 250000,
      entryFee: 250,
      participants: 85,
      maxParticipants: 150,
      startTime: '2024-10-25T19:00:00Z',
      endTime: '2024-12-15T23:59:59Z',
      description: 'Compete in the ultimate Champions League prediction challenge.',
      image: '/images/carousel/NG-VARPAYOUT.jpg',
      tier: 'Silver',
    },
    {
      id: 'pool-3',
      name: 'Gold Pool I',
      status: 'upcoming',
      prizePool: 1000000,
      entryFee: 1000,
      participants: 0,
      maxParticipants: 300,
      startTime: '2024-12-01T09:00:00Z',
      endTime: '2025-01-31T23:59:59Z',
      description: 'Get ready for the next round of World Cup qualifiers!',
      image: '/images/carousel/carousel-image-1.jpg',
      tier: 'Gold',
    },
    {
      id: 'pool-4',
      name: 'Bronze Pool II',
      status: 'upcoming',
      prizePool: 75000,
      entryFee: 75,
      participants: 0,
      maxParticipants: 100,
      startTime: '2025-05-01T12:00:00Z',
      endTime: '2025-06-30T23:59:59Z',
      description: 'Predict the NBA Finals winner and bracket!',
      image: '/images/carousel/carousel-image-2.jpg',
      tier: 'Bronze',
    },
    {
      id: 'pool-5',
      name: 'Silver Pool II',
      status: 'ended',
      prizePool: 500000,
      entryFee: 500,
      participants: 250,
      maxParticipants: 250,
      startTime: '2024-06-14T15:00:00Z',
      endTime: '2024-06-26T23:59:59Z',
      description: 'The group stage predictions are over. Check results!',
      image: '/images/carousel/carousel-image-3.jpg',
      tier: 'Silver',
    },
    {
      id: 'pool-6',
      name: 'Gold Pool II',
      status: 'ended',
      prizePool: 1500000,
      entryFee: 1500,
      participants: 90,
      maxParticipants: 100,
      startTime: '2024-01-15T00:00:00Z',
      endTime: '2024-01-28T23:59:59Z',
      description: 'Australian Open predictions have concluded.',
      image: '/images/carousel/NG-1MCasinoTournament2610.jpeg',
      tier: 'Gold',
    },
  ];

  const ongoingPools = allPools.filter(pool => pool.status === 'ongoing');
  const upcomingPools = allPools.filter(pool => pool.status === 'upcoming');
  const endedPools = allPools.filter(pool => pool.status === 'ended');

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-vanta-text-light mb-8 text-left">Pools</h1>

      {/* Ongoing Pools Section */}
      <div className="mb-12">
        <SectionHeader title="Ongoing Pools" className="mb-6" textColor="text-vanta-text-light" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ongoingPools.length > 0 ? (
            ongoingPools.map(pool => <PoolCard key={pool.id} pool={pool} />)
          ) : (
            <p className="text-vanta-text-medium col-span-full text-center">No ongoing pools at the moment.</p>
          )}
        </div>
      </div>

      {/* Upcoming Pools Section */}
      <div className="mb-12">
        <SectionHeader title="Upcoming Pools" className="mb-6" textColor="text-vanta-text-light" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingPools.length > 0 ? (
            upcomingPools.map(pool => <PoolCard key={pool.id} pool={pool} />)
          ) : (
            <p className="text-vanta-text-medium col-span-full text-center">No upcoming pools planned yet.</p>
          )}
        </div>
      </div>

      {/* Ended Pools Section */}
      <div className="mb-12">
        <SectionHeader title="Ended Pools" className="mb-6" textColor="text-vanta-text-light" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {endedPools.length > 0 ? (
            endedPools.map(pool => <PoolCard key={pool.id} pool={pool} />)
          ) : (
            <p className="text-vanta-text-medium col-span-full text-center">No pools have ended recently.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pools;