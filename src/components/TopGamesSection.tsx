"use client";

import React from 'react';
import MatchCard from './MatchCard';
import { TeamLogos } from '../assets/logos';

const TopGamesSection = () => {
    // Dummy data for top games
    const topGames = [
        {
            id: '1',
            team1Name: 'Manchester United',
            team2Name: 'Leicester City',
            team1Logo: TeamLogos['MANU'],
            team2Logo: TeamLogos['LEIC'],
            time: '19:00',
            date: '2024-07-20',
            stadium: 'Old Trafford',
            league: 'Premier League',
            score: '2 - 1',
            status: 'Finished',
        },
        {
            id: '2',
            team1Name: 'Crystal Palace',
            team2Name: 'West Ham United',
            team1Logo: TeamLogos['CRY'],
            team2Logo: TeamLogos['WHU'],
            time: '16:00',
            date: '2024-07-21',
            stadium: 'Selhurst Park',
            league: 'Premier League',
            score: '0 - 0',
            status: 'Live',
        },
        {
            id: '3',
            team1Name: 'Aston Villa',
            team2Name: 'Manchester United',
            team1Logo: TeamLogos['ASTON'],
            team2Logo: TeamLogos['MANU'],
            time: '14:00',
            date: '2024-07-22',
            stadium: 'Villa Park',
            league: 'Premier League',
            score: '1 - 3',
            status: 'Upcoming',
        },
    ];

    return (
        <section className="w-full">
            <div className="w-full py-8 px-4 bg-[#0D2C60] mt-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-left tracking-tight pl-4">Top Games</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {topGames.map(game => (
                    <MatchCard key={game.id} {...game} />
                ))}
            </div>
        </section>
    );
};

export default TopGamesSection;