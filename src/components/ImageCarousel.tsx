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

const ImageCarousel: React.FC = () => {
  const images = [
    'https://via.placeholder.com/1200x400?text=Carousel+Image+1', // Larger placeholder image
    'https://via.placeholder.com/1200x400?text=Carousel+Image+2', // Larger placeholder image
    'https://via.placeholder.com/1200x400?text=Carousel+Image+3', // Larger placeholder image
  ];

  return (
    <div className="w-full h-64">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="p-1 h-full">
                <Card className="h-full">
                  <CardContent className="flex items-center justify-center p-0 h-full">
                    <img
                      src={image}
                      alt={`Carousel Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10" />
      </Carousel>
    </div>
  );
};

export default ImageCarousel;