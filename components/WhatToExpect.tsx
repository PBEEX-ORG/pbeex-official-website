import React from "react";
import Image from "next/image";

const WhatToExpect: React.FC = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-brandred mb-8">
        WHAT TO EXPECT FROM PBEEX
      </h2>
      <div className="flex flex-col md:flex-row justify-between items-center bg-white md:px-20 gap-10">
        {/* Left Image Section */}
        <div className="relative flex-shrink-0 w-full md:w-1/2">
          <div className="absolute inset-0 bg-brandred rounded-xl -z-10 translate-x-3 translate-y-3"></div>
          <Image
            src="/gallery-image-1.jpg"
            alt="Students Collaborating"
            className="rounded-xl hover:scale-105 transition-transform duration-300 ease-out"
            width={500}
            height={500}
            priority 
            style={{ objectFit: 'cover' }}
          />
        </div>
        {/* Right Content Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <ul>
            {[
              "Solve real-world national and global problems.",
              "Promote a culture of research and innovation among Nigerian students.",
              "Foster a mindset among Nigerian engineering students that we are fully capable of leading modern, innovative engineering advancements.",
              "Provide financial backing to turn engineering ideas into tangible products.",
              "Create job opportunities for students and improve their network.",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-4 py-4 border-b-2 border-gray-700 animate-fadeIn hover:translate-x-4 hover:text-brandred transition-transform ease-out"
              >
                <span className="text-gray-700 text-2xl font-bold">
                  {`0${index + 1}`}
                </span>
                <p className="text-gray-700 text-lg md:text-xl">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatToExpect;
