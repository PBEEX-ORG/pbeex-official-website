import React from "react";
import Image from 'next/image';


const Footer: React.FC = () => {
  return (
    <footer className="bg-darkblue text-white py-12 px-6 lg:px-20">
        {/* Top Border */}
      <div className="border-t border-gray-700 mb-12"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
            {/* Left Section: Logo and Social Media */}
            <div className="space-y-6">
                <div className="flex items-center space-x-2 w-52">
                <Image
                src="/horizontal_white.png" 
                alt="PBEEX Logo"
                width={200}
                height={100}
                priority 
                />
                </div>
                <div className="flex space-x-6">
                    <a href="https://facebook.com" className="hover:scale-110 transition-transform">
                        <img src="/facebook-icon.png" alt="Facebook" className="h-6 w-6" />
                    </a>
                    <a href="https://twitter.com" className="hover:scale-110 transition-transform">
                        <img src="/twitter-icon.png" alt="X (formerly Twitter)" className="h-6 w-6" />
                    </a>
                    <a href="https://instagram.com" className="hover:scale-110 transition-transform">
                        <img src="/instagram-icon.png" alt="Instagram" className="h-6 w-6" />
                    </a>
                    <a href="https://linkedin.com" className="hover:scale-110 transition-transform">
                        <img src="/linkedin-icon.png" alt="LinkedIn" className="h-6 w-6" />
                    </a>
                    <a href="https://whatsapp.com" className="hover:scale-110 transition-transform">
                        <img src="/whatsapp-icon.png" alt="WhatsApp" className="h-6 w-6" />
                    </a>
                </div>
                <p className="text-sm">
                    Stay updated about the Expo and tech 
                </p>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-4 py-2 rounded-full border bg-darkblue text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandred"
                    />
                    <div className="flex gap-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full md:w-1/2 px-4 py-2 rounded-full border bg-darkblue text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brandred"
                        />
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-2 rounded-full border bg-brandred text-white font-semibold hover:bg-opacity-90 transition-all"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* Center Section: Navigation */}
            <div className="flex justify-center text-center lg:text-left">
            <ul className="space-y-6 text-center">
                {["Home", "Blog", "Projects", "About", "Partners", "Contact"].map(
                (item, index) => (
                    <li
                    key={index}
                    className="text-1xl font-medium hover:text-brandred hover:underline transition-colors cursor-pointer"
                    >
                    {item}
                    </li>
                )
                )}
            </ul>
            </div>

            {/* Right Section: Event Details */}
            <div className="flex flex-col items-center min-w-1.5 lg:items-end space-y-6">
            <div className="text-center lg:text-right">
                <h2 className="text-brandred text-lg font-semibold">
                When is PBEEX 2024?
                </h2>
                <p className="text-sm">
                PBEEX is happening on the <br /> 11th January, 2024.
                </p>
            </div>
            <Image
            src="/icon_colored.png"
            alt="PBEEEX Icon"
            width={192} 
            height={192} 
            className="opacity-40"
            priority 
            />
            </div>
      </div>

      {/* Bottom Border */}
      <div className="border-t border-gray-700 mt-12"></div>
    </footer>
  );
};

export default Footer;
