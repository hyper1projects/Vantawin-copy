"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const ImageCarousel: React.FC = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  const images = [
    "/images/carousel-1.png",
    "/images/carousel-2.png",
    "/images/carousel-3.png",
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="border-none">
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={image}
                    alt={`Carousel Image ${index + 1}`}
                    className="w-full h-64 object-cover rounded-lg" // Changed h-48 to h-64
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2" />
      <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white bg-black/50 hover:bg-black/70 rounded-full p-2" />
    </Carousel>
  );
};

export default ImageCarousel;