"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      {/* Left Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 p-4 shadow-lg flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-blue-400 mb-8">Dyad</h1>
          <nav className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
              <span className="text-xl">Home</span>
            </Link>
            <Link to="/dashboard" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
              <span className="text-xl">Dashboard</span>
            </Link>
            <Link to="/settings" className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors">
              <span className="text-xl">Settings</span>
            </Link>
          </nav>
        </div>
        <div className="text-gray-500 text-sm">
          &copy; 2023 Dyad. All rights reserved.
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-64 p-8">
        {/* Top Navigation Bar (Placeholder) */}
        <div className="h-16 bg-gray-800 rounded-lg mb-8 flex items-center justify-end px-6 shadow-md">
          <Button variant="ghost" className="text-gray-300 hover:text-blue-400">Sign In</Button>
        </div>

        {/* Hero Section */}
        <section className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Welcome to Dyad
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Your ultimate platform for managing predictions and engaging with your community.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-full shadow-lg">
            Get Started
          </Button>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-blue-400">Real-time Predictions</CardTitle>
              <CardDescription className="text-gray-400">Engage with live events.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Make predictions on various events and see results instantly.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-blue-400">Learn More</Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-blue-400">Community Leaderboards</CardTitle>
              <CardDescription className="text-gray-400">Compete with friends.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Climb the ranks and show off your prediction skills.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-blue-400">Explore Leaderboards</Button>
            </CardFooter>
          </Card>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardHeader>
              <CardTitle className="text-blue-400">Customizable Dashboards</CardTitle>
              <CardDescription className="text-gray-400">Personalize your experience.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Track your performance and favorite events with ease.</p>
            </CardContent>
            <CardFooter>
              <Button variant="link" className="text-blue-400">Customize Now</Button>
            </CardFooter>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gray-800 p-10 rounded-lg shadow-xl">
          <h3 className="text-4xl font-bold mb-4 text-blue-400">Ready to Start Predicting?</h3>
          <p className="text-lg text-gray-300 mb-6">Join Dyad today and become part of a thriving community.</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-4 rounded-full shadow-lg">
            Sign Up Free
          </Button>
        </section>
      </div>

      {/* Prediction Card Image */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
        <img
          src="/images/Group 1000005762.png"
          alt="Prediction Card"
          className="w-full max-w-xs rounded-xl"
        />
      </div>
    </div>
  );
};

export default Index;