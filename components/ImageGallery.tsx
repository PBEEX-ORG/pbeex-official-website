"use client"
import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const images = [
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
    "/Frame-14.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  // Function to move to the next image
  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically change the image every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000);
    return () => clearInterval(intervalId); // Clean up interval on unmount
  }, []);

  return (
    <section className="relative w-full py-12 px-6 overflow-hidden">
      {/* Container for the images */}
      <div
        className={`flex transition-transform duration-1000 ease-in-out`}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full sm:w-1/3 px-2"
            style={{
              transition: "transform 1s ease-in-out",
              transform:
                index === currentIndex
                  ? "scale(1.1)"
                  : index === currentIndex - 1 || index === currentIndex + 1
                  ? "scale(0.95)"
                  : "scale(1)",
            }}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-3 py-2  rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
      >
        →
      </button>
    </section>
  );
};

export default Slideshow;
