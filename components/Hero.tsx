/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Hero = () => {
  return (
    <section className="relative flex items-center h-screen">
        {/* Background Image */}
        <div className="absolute min-w-3/5 inset-0 -z-10">
            <img
            src="/Frame-3.svg"
            alt="Engineer in construction gear"
            className="w-70 h-full object-cover"
            />
        </div>

        {/* Gradient Overlay */}
        <div
        className="absolute inset-0 -z-10 w-auto"
        style={{
        background:
            "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(16,37,57,1) 60%)",
        }}>
        </div>

        {/* Content Section */}
        <div className="relative w-2/5 flex flex-col items-center justify-center space-y-6 text-white z-10 ml-auto">
            {/* Bulb Icon */}
            <div className="absolute top-0 -left-16 hover:scale-100 animate-pulse">
                <img
                src="/Bulb-icon.svg"
                alt="Bulb Icon"
                className="w-32 h-32 md:w-48 md:h-48 lg:w-32 lg:h-32 xl:w-55 xl:h-55"
                />
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-4xl font-sans text-center font-extrabold max-w-4xl uppercase">
                SOLVE PRESSING REAL- <br/> WORLD PROBLEMS AND TACKLE KEY CHALLENGES HOLDING BACK NIGERIAN ENGINEERING STUDENTS.  
            </h1>

            {/* Buttons */}
            <div className="flex items-center gap-4">
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
                            <img src="/arrow up-right.png" alt="Arrow Icon" className="transition-transform duration-300" />
                        </span>
                    </a>
                </div>
            </div>

            {/* Vector Icon */}
            <div className="absolute -bottom-10 right-10">
                <img
                    src="/vector-icon.svg" 
                    alt="Vector Icon"
                    className="w-12 h-12 md:w-16 md:h-16"
                />
            </div>
        </div>
    </section>
  )
}

export default Hero
