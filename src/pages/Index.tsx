import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  return (
    <div className="relative h-full bg-gradient-to-br from-gray-900 to-black text-white rounded-xl p-8">
      {/* All feature cards and the images section have been removed as requested. */}
      <div className="flex items-center justify-center h-full">
        <p className="text-xl text-vanta-text-light">Welcome to VantaWin!</p>
      </div>
    </div>
  );
};

export default Index;