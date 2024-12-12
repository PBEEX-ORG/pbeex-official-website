"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Slideshow = () => {
  const images = [
    "/gallery-image-1.jpg",
    "/gallery-image-3.jpg",
    "/gallery-image-4.jpg",
    "/gallery-image-5.jpg",
    "/gallery-image-6.jpg",
    "/gallery-image-7.jpg",
    "/gallery-image-8.jpg",
    "/gallery-image-9.jpg",
    "/gallery-image-10.jpg",
    "/gallery-image-12.jpg",
    "/gallery-image-13.jpg",
  ];

  return (
    <section className="relative w-full py-12 px-6 overflow-hidden bg-gray-100">
      {/* Animated Image Carousel */}
      <motion.div
        className="flex items-center"
        animate={{
          x: ["0%", "-100%"], // Scrolls images leftward continuously
        }}
        transition={{
          duration: 20, // Adjust speed for smoother motion
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Duplicate images to create a seamless loop */}
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-2"
            style={{
              flex: "0 0 auto", // Prevent images from shrinking
              width: "100%", // Full width for smaller screens
              maxWidth: "400px", // Limit size for larger screens
            }}
          >
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={400}
              height={300}
              layout="responsive" // Responsive scaling
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Slideshow;
