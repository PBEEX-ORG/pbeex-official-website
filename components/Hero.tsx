import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative flex items-center h-screen m-0 px-6 md:px-12 lg:px-24">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10 w-3/5 h-full">
        <Image
            src="/Frame-3.svg"
            alt="Engineer in construction gear"
            className="w-full h-full object-cover"
            width={1000}
            height={500} 
            priority 
        />
        </div>

        {/* Gradient Overlay */}
        <div
        className="absolute inset-0 -z-10 w-full h-full"
        style={{
        background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(16,37,57,1) 60%)",
        }}>
        </div>

        {/* Content Section */}
        <div className="relative w-full md:w-3/5 lg:w-2/5 flex flex-col items-center justify-start space-y-6 text-white z-10 ml-auto lg:pb-16">
            {/* Bulb Icon */}
            <div className="absolute top-0 -left-24 md:-left-32 hover:scale-100 animate-pulse">
            <Image
            src="/Bulb-icon.svg"
            alt="Bulb Icon"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48"
            width={100} 
            height={100} 
            />
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans text-center font-bold w-full uppercase">
                SOLVE PRESSING REAL-WORLD PROBLEMS AND TACKLE KEY CHALLENGES HOLDING BACK NIGERIAN ENGINEERING STUDENTS.  
            </h1>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 justify-center">
                <button className="px-6 py-2 text-white border rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                    Learn More
                </button>
                {/* Call to Action Button */}
                <div className="flex md:justify-center">
                    <a
                        href="#"
                        className="px-6 py-2 bg-red-500 text-white border rounded-full shadow-lg hover:scale-105 hover:gap-5 active:bg-red-600 flex items-center gap-2 transition-transform duration-500"
                    >
                        Get Involved
                        <span className="w-8 items-center">
                        <Image 
                        src="/arrow-up-right.png" 
                        alt="Arrow Icon" 
                        className="transition-transform duration-300" 
                        width={50} 
                        height={50} 
                        priority 
                        />  
                        </span>
                    </a>
                </div>
            </div>

            {/* Vector Icon */}
            <div className="absolute -bottom-10 -right-10 lg:bottom-0">
            <Image
            src="/vector-icon.svg" 
            alt="Vector Icon"
            className="w-12 h-12 md:w-16 md:h-16"
            width={64} 
            height={64} 
            />
            </div>
        </div>
    </section>
  )
}

export default Hero;
