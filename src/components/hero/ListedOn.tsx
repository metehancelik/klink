"use client";

import { motion, useAnimationControls } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import { listedOn } from "@/data";

export function ListedOn() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(150);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const tripleItems = [...listedOn, ...listedOn, ...listedOn];

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth < 1280);

      if (screenWidth < 640) {
        setItemWidth(120);
      } else if (screenWidth < 1024) {
        setItemWidth(130);
      } else {
        setItemWidth(150);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      const newIndex = (currentIndex + 1) % listedOn.length;

      if (newIndex === 0) {
        controls
          .start({
            x: -(listedOn.length * itemWidth),
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
  }, [currentIndex, controls, itemWidth, isMobile]);

  return (
    <div className="flex flex-col gap-3 z-20 relative text-center md:text-left md:m-0 -mx-5">
      <p className="text-white/70 font-semibold text-base">$KLINK Listed On</p>

      {isMobile ? (
        <div className="relative overflow-hidden xl:hidden">
          <div className="overflow-hidden" ref={carouselRef}>
            <motion.div className="flex" animate={controls} style={{ x: 0 }}>
              {tripleItems.map((item, index) => (
                <motion.div
                  key={`${item.name}-${index}`}
                  className="flex-shrink-0 items-center px-6 py-3 bg-[#242036] rounded-2xl border-2 border-[#362B4F] cursor-pointer mx-2"
                  style={{ width: `${itemWidth}px` }}
                >
                  <Image
                    src={item.src}
                    alt={`${item.name} logo`}
                    width={0}
                    height={24}
                    style={{ width: "auto", height: "24px" }}
                    className="h-6"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="hidden xl:flex xl:gap-5">
          {listedOn.map((item) => (
            <div
              key={item.name}
              className="flex items-center px-6 py-3 bg-[#242036] rounded-2xl border-2 border-[#362B4F] cursor-pointer"
            >
              <Image
                src={item.src}
                alt={`${item.name} logo`}
                width={0}
                height={24}
                style={{ width: "auto", height: "24px" }}
                className="h-6"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
