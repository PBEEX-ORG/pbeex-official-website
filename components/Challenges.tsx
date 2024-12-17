import researchImage from "@/public/researchImage.png";
import solutionsImage from "@/public/solutionsImage.png";
import problemSolvingImage from "@/public/problemSolvingImage.png";
import Image from "next/image";

export default function Challenges() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          Solve Challenges
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Join PBEEX to collaborate, innovate, and create engineering solutions
          that address pressing national and global challenges while shaping a
          better future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Challenge Card 1 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={researchImage}
              alt="Research"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Research Your Way to Solutions
              </h3>
              <p className="text-gray-700 leading-relaxed">
                By researching, you gain deeper insights, discover new
                perspectives, and develop innovative ideas.Whether you're
                improving a product or solving a real-world issue, research is
                your tool for turning ideas into impactful solutions.
              </p>
            </div>
          </div>

          {/* Challenge Card 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={solutionsImage}
              alt="Solutions"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Find Solution to Problems
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Problems are opportunities waiting for solutions. By
                researching, you equip yourself with the knowledge and tools
                needed to understand challenges and solve them effectively.
                Don’t stop at identifying problems—dive deep, analyze, and
                create solutions that make a real difference.
              </p>
            </div>
          </div>

          {/* Challenge Card 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image
              src={problemSolvingImage}
              alt="Problem Solving"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Build Problem-Solving Products
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Through research and innovation, you can design solutions that
                address challenges and meet needs effectively. Focus on
                understanding the problem, exploring creative ideas, and
                building products that make a difference in people’s lives.
                Start creating impactful solutions today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
