import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Image
          src={logo}
          alt="Company Logo - PBEEX"
          className="w-32 flex justify-start"
        />
        <nav className="space-x-6 border-gray-800 border-[1.5px] rounded-[42px] p-[12px]">
          <Link
            href="/home"
            className="text-gray-600 hover:text-blue-600 font-poppins text-[16px] font-normal px-[1rem] leading-[33px]"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-600 hover:text-blue-600 font-poppins text-[16px] font-normal px-[1rem] leading-[33px]"
          >
            Projects
          </Link>
          <Link
            href="/partners"
            className="text-gray-600 hover:text-blue-600 font-poppins text-[16px] font-normal px-[1rem] leading-[33px]"
          >
            Partners
          </Link>
          <Link
            href="/blog"
            className="text-gray-600 hover:text-blue-600 font-poppins text-[16px] font-normal px-[1rem] leading-[33px]"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-blue-600 font-poppins text-[16px] font-normal px-[1rem] leading-[33px]"
          >
            About
          </Link>
        </nav>
        <div>
          <Link
            href="/get-involved"
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex justify-end"
          >
            Get Involved
          </Link>
        </div>
      </div>
    </header>
  );
}
