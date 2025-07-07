import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { cn } from "@/lib/utils";

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function ImageCarousel({
  images,
  autoPlay = true,
  interval = 3000,
  className,
}: ImageCarouselProps) {
  const [api, setApi] = useState<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout>();
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle auto-scroll
  useEffect(() => {
    if (!autoPlay || !api) return;

    const play = () => {
      if (api) {
        api.scrollNext();
      }
    };

    if (!isHovered) {
      autoPlayRef.current = setInterval(play, interval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [api, autoPlay, interval, isHovered]);

  // Handle mouse movement for manual scrolling
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !api) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    
    // If mouse is in the left third, scroll left
    if (x < width / 3) {
      api.scrollPrev();
    } 
    // If mouse is in the right third, scroll right
    else if (x > (width * 2) / 3) {
      api.scrollNext();
    }
  };



  return (
    <div 
      ref={containerRef}
      className={cn("w-full overflow-hidden", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
          slidesToScroll: 1,
          duration: 30,
          startIndex: 0,
        }}
        className="w-full py-8"
      >
        <CarouselContent className="-ml-4">
          {[...images, ...images, ...images].map((image, index) => (
            <CarouselItem 
              key={`${image.src}-${index}`}
              className="pl-4 basis-auto"
            >
              <div className="relative aspect-[3/4] w-64 overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  draggable="false"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
