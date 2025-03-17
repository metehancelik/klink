"use client";

import Image from "next/image";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { partners } from "@/data";

export function PartnersCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(250);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const tripleItems = [...partners, ...partners, ...partners];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 640) {
        // Mobile
        setItemWidth(180);
      } else if (screenWidth < 1024) {
        // Tablet
        setItemWidth(200);
      } else {
        // Desktop
        setItemWidth(250);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % partners.length;

      if (newIndex === 0) {
        controls
          .start({
            x: -(partners.length * itemWidth),
            transition: { duration: 0.5 },
          })
          .then(() => {
            controls.set({ x: 0 });
            setCurrentIndex(0);
          });
      } else {
        controls.start({
          x: -(newIndex * itemWidth),
          transition: { duration: 0.5 },
        });
        setCurrentIndex(newIndex);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex, controls, itemWidth]);

  return (
    <div className="relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-r from-white/70 via-white/40 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 md:w-24 lg:w-32 bg-gradient-to-l from-white/70 via-white/40 to-transparent z-10" />

      <div className="overflow-hidden" ref={carouselRef}>
        <motion.div className="flex" animate={controls} style={{ x: 0 }}>
          {tripleItems.map((item, index) => (
            <motion.div
              key={`${item.name}-${index}`}
              className="flex-shrink-0 flex items-center justify-center p-2 sm:p-4 md:p-6"
              style={{ width: `${itemWidth}px` }}
            >
              <Image
                src={item.src}
                alt={`${item.name} logo`}
                width={200}
                height={100}
                className="w-auto h-[60px] sm:h-[80px] md:h-[100px] object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
