"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slideshow = () => {
  // Use your six images
  const images = [
    "/gallery-image-1.jpg",
    "/gallery-image-2.jpg",
    "/gallery-image-3.jpg",
    "/gallery-image-4.jpg",
    "/gallery-image-5.jpg",
    "/gallery-image-6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to move to the previous image
  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Automatically change the image every 4 seconds
  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000);
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <section className="relative w-full py-12 px-6 overflow-hidden">
      {/* Image Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
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
            <Image
              src={image}
              alt={`Slide ${index + 1}`}
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500 ease-in-out"
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
        aria-label="Previous Slide"
      >
        ←
      </button>
      <button
        onClick={nextImage}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white px-3 py-2 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
        aria-label="Next Slide"
      >
        →
      </button>
    </section>
  );
};

export default Slideshow;
