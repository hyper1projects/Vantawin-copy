"use client";

import React from 'react';
import { Card, CardContent } from './ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

// Placeholder images - in a real app, these would likely come from an API or be more dynamic
const carouselImages = [
  'https://via.placeholder.com/800x300/FF5733/FFFFFF?text=Exciting+Matchups',
  'https://via.placeholder.com/800x300/33FF57/FFFFFF?text=Big+Wins+Ahead',
  'https://via.placeholder.com/800x300/3357FF/FFFFFF?text=Daily+Specials',
];

const ImageCarousel: React.FC = () => {
  return (
    <div className="mb-6">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {carouselImages.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img src={src} alt={`Carousel Image ${index + 1}`} className="w-full h-full object-cover rounded-lg" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;