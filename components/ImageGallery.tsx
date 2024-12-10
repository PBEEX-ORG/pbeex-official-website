"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Slideshow = () => {
  const images = [
    "/gallery-image-1.jpg",
    "/gallery-image-2.jpg",
    "/gallery-image-3.jpg",
    "/gallery-image-4.jpg",
    "/gallery-image-5.jpg",
    "/gallery-image-6.jpg",
  ];

  return (
    <section className="relative w-full py-12 px-6 overflow-hidden bg-gray-100">
      {/* Animated Image Carousel */}
      <motion.div
        className="flex items-center"
        animate={{
          // Scrolls all images leftward
          x: ["0%", "-100%"], 
        }}
        transition={{
          // Adjusted speed for faster motion
          duration: 10, 
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {/* Duplicate images to create a seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full sm:w-1/3 px-2"
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Slideshow;
