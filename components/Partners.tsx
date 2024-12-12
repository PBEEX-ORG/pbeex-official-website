import React from "react";
import Image from 'next/image';

const PartnersSection = () => {
  return (
    <section className="bg-white">
        {/* Save the Date and Countdown */}
        <div className="relative container mx-auto px-4 py-12">
            {/* Gradient Overlay */}
            <div
                className="absolute inset-0 -z-10 w-auto"
                style={{
                background:
                    "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(16,37,57,1) 65%)",
                }}>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center text-center lg:text-left">
            {/* Save the Date Section */}
            <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                Save the date for PBEEX 2024:
                </h2>
                <div className="mt-4">
                <p className="text-lg text-gray-600 mb-2">
                    📅 <span className="font-medium">Date:</span> 29th January, 2024
                </p>
                <p className="text-lg text-gray-600">
                    📍 <span className="font-medium">Venue:</span> University of Ibadan
                </p>
                <p className="text-sm text-gray-500 mt-2">
                    This is going to be the first edition of the Expo!
                </p>
                </div>
            </div>

            {/* Countdown Section */}
            <div className="flex justify-center lg:justify-end">
                <div className="bg-gray-100 shadow-lg rounded-lg px-6 py-4 text-gray-800">
                <h3 className="text-xl font-semibold mb-4">Countdown to PBEEX 2024</h3>
                <div className="flex space-x-4 justify-center">
                    <div className="text-center">
                    <p className="text-3xl font-bold">25</p>
                    <p className="text-sm">Days</p>
                    </div>
                    <div className="text-center">
                    <p className="text-3xl font-bold">04</p>
                    <p className="text-sm">Hours</p>
                    </div>
                    <div className="text-center">
                    <p className="text-3xl font-bold">47</p>
                    <p className="text-sm">Mins</p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>

        {/* Partners Section */}
        <div className="bg-[#102539] py-16">
        <div className="container mx-auto px-6 lg:px-12">
            <h3 className="text-center text-4xl md:text-5xl font-bold text-white mb-10">
            OUR PARTNERS
            </h3>
            <p className="text-center text-white text-lg md:text-xl mb-12">
            We collaborate with leading organizations to drive innovation and growth.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 items-center">
            {/* Partner Logos */}
            {[
                "/images__1_-removebg-preview.png",
                "/images__2_-removebg-preview.png",
                "/images__3_-removebg-preview.png",
                "/images__4_-removebg-preview.png",
                "/images__5_-removebg-preview.png",
                "/spe-logo-blue.png",
                "/images__6_-removebg-preview.png",
                "/images-removebg-preview.png",
            ].map((src, index) => (
                <div
                key={index}
                className="flex justify-center items-center bg-white rounded-lg shadow-lg p-4 transition-transform hover:scale-105"
                >
                <Image
                src={src}
                alt={`Partner ${index + 1}`}
                className="h-20 md:h-24 object-contain"
                width={100} 
                height={80}
                />
                </div>
            ))}
            </div>
        </div>
        </div>

    </section>
  );
};

export default PartnersSection;
