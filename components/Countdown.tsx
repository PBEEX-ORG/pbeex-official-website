import holographicScreen from "@/public/holographicScreen.png";
import Image from "next/image";

export default function Countdown() {
  return (
    <section className="bg-[#102539] text-white py-16">
      <div className="flex justify-between items-center gap-[64px] container mx-auto px-4 text-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-4">PBEEX 2024 STARTS IN</h1>
          <p className="text-lg leading-[24px]">
            PBEEX (Product-Based Engineering Expo) is designed with students at
            its core, providing them with a platform to showcase their
            innovative ideas and engineering solutions. It encourages students
            to apply their knowledge in practical, problem-solving projects
            while fostering creativity, teamwork, and a solutions-driven
            mindset. Through PBEEX, students gain exposure, build confidence,
            and connect with industry professionals, preparing them for
            impactful contributions to real-world challenges.
          </p>
        </div>
        <div>
          <Image
            src={holographicScreen}
            alt="Holographic Screen"
            className="w-[1050px]"
          />
        </div>
      </div>
    </section>
  );
}
