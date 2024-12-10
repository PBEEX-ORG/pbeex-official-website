import React from "react";
import Image from 'next/image';

const WhatIsPbeex: React.FC = () => {
  return (
    <section className="relative bg-white py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col justify-center">
        {/* Title */}
        <h1 className="text-brandred text-6xl lg:text-7xl font-bold text-left">
          WHAT&apos;S PBEEX?
        </h1>

        {/* Content */}
        <div className="mt-10 text-gray-700">
          <p className="text-xl lg:ml-20 font-bold text-center md:text-left">
            Prof. O. A. Bamiro Engineering Expo (PBEEX) is an annual gathering
            of all technology and engineering students across Nigeria where
            each technology/engineering student association selects and
            executes a major engineering project, which is then showcased at
            the expo.
          </p>
          <p className="mt-6 lg:ml-20 text-xl text-center md:text-left leading-7">
            Each Technology/engineering student association of each Nigerian
            Tertiary institution would select a massive engineering project to
            implement. We will partner with Nigerian engineering organizations
            such as COREN, NSE etc., local and international engineering
            companies, for-profit and nonprofit organizations and even the
            Nigerian government to provide the network, resources, equipment,
            facilities, expert support, funding, etc., required to bring their
            projects to life.
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="mt-6 lg:ml-20 flex">
            <a
                href="#"
                className="px-6 py-2 bg-red-500 text-white border rounded-full shadow-lg hover:scale-105 hover:gap-5 active:bg-red-600 flex items-center gap-2 transition-transform duration-500"
            >
                Register Now
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

        {/* Decorative Icons */}
        <div className="hidden md:flex justify-between mt-12">
          <div className="absolute right-20 top-10 w-24 h-24 opacity-30 animate-spin-slow">
          <Image 
            src="/icon_black.png" 
            alt="Decorative icon" 
            width={200} 
            height={200} 
            priority 
          />              
          </div>
          <div className="absolute bottom-10 left-10 w-24 h-24 opacity-30 animate-spin-slow">
          <Image 
            src="/icon_black.png" 
            alt="Decorative icon" 
            width={200} 
            height={200} 
            priority 
          />            
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPbeex;
