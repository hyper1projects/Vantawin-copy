import React from 'react';

// Mock component representing a single multiplier card
const MultiplierCard = ({ factor }) => (
    <div className="flex-shrink-0 w-64 bg-indigo-700/50 p-4 rounded-xl shadow-lg border border-indigo-600">
        <div className="text-center">
            <h3 className="text-3xl font-bold text-yellow-400">{factor}x</h3>
            <p className="text-white mt-1 text-sm">Multiplier Bonus</p>
            <p className="text-gray-300 text-xs mt-2">Available for selected games until midnight.</p>
        </div>
    </div>
);

const PointsMultiplierSection = () => {
    // Mock data for demonstration
    const multipliers = [
        { factor: 2.0 },
        { factor: 1.5 },
        { factor: 3.0 },
        { factor: 2.5 },
        { factor: 4.0 },
        { factor: 1.2 }
    ];

    return (
        <div className="mt-6 mb-8 px-4">
            <h2 className="text-xl font-bold text-white mb-4">Points Multipliers</h2>
            
            {/* ---------------------------------------------------- */}
            {/* The following div container enables horizontal scrolling */}
            {/* ---------------------------------------------------- */}
            <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-indigo-900">
                {multipliers.map((item, index) => (
                    <MultiplierCard key={index} factor={item.factor} />
                ))}
            </div>
            
            {/* You might need to add Tailwind scrollbar utilities 
                if you want to style the scrollbar (browser support varies) */}
        </div>
    );
};

export default PointsMultiplierSection;