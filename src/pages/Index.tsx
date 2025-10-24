"use client";

import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import PointsMultiplierSection from '../components/PointsMultiplierSection';
import SectionHeader from '../components/SectionHeader';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-vanta-blue-dark text-white">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Image Carousel Section */}
        <div className="mb-6"> {/* Added mb-6 here */}
          <ImageCarousel />
        </div>

        {/* Points Multiplier Section */}
        <section className="mb-8">
          <PointsMultiplierSection />
        </section>

        {/* Trending Bets Section */}
        <section className="mb-8">
          <SectionHeader title="Trending Bets" />
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-vanta-blue-medium border-none text-white">
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">{index + 1}</span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* How It Works Section */}
        <section className="text-center py-12 bg-vanta-blue-medium rounded-lg">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Vantawin is a revolutionary platform where you can bet on your favorite sports using Vanta Points. Predict outcomes, climb leaderboards, and win amazing prizes!
          </p>
          <Button className="bg-vanta-yellow text-vanta-blue-dark hover:bg-vanta-yellow/90 font-bold py-3 px-8 rounded-full text-lg">
            Learn More
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-vanta-blue-darker text-gray-400 py-6 text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 Vantawin. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;