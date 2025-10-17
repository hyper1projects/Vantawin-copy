import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-8">
      {/* The content of the Index page will go here */}
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Vantawin!</h1>
      <p className="text-lg text-center text-gray-300">Your platform for exciting predictions and games.</p>
      <div className="mt-8 text-center">
        <Link to="/game">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg">
            Start Playing
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;