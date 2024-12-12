"use client"
import React, { useState } from "react";
import Image from "next/image";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How many projects per engineering student association?",
    answer: "For our first edition, each engineering student association is invited to submit one primary project. This limit may be adjusted in future editions.",
  },
  {
    question: "What kind of projects are expected?",
    answer: "We're looking for visionary, cutting-edge projects that exceed the usual scope of engineering within Nigeria. With considerable support available, we encourage associations to aim high and propose bold, impactful solutions. Your projects should challenge norms, inspire curiosity, and leave people impressed with their scale and ingenuity.",
  },
  {
    question:
      "How should project proposals be submitted by each engineering student association?",
    answer:
      "After the call for proposals is announced, each engineering association should submit their project proposals by email to the address specified on the official call-for-proposals flier. Submissions must come from the association's official email.",
  },
  {
    question:
      "What is the recommended process for engineering associations to select their projects?",
    answer:
      "While associations may use any selection process they choose, the following approach is suggested: Gather project ideas from all engineering students at your institution, ideally through a Google Form. Include program goals and details in the form to guide relevant suggestions. Shortlist the most promising ideas and conduct a student vote for the top project. Choose the project with the highest votes as your final selection.",
  },
  {
    question: "Where is the location for the event?",
    answer: "The event will be held at the University of Ibadan.",
  },
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-12 px-6 lg:px-20 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-4xl font-bold text-brandred mb-8">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-300 pb-4"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center text-left text-lg font-medium text-darkblue hover:text-gray-400 transition-colors focus:outline-none"
              >
                {faq.question}
                <span
                  className={`transition-transform transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <Image 
                  src="/chevron-down.png" 
                  alt="" 
                  className="transition-transform duration-300" 
                  width={24} 
                  height={24} 
                  /> 
                </span>
              </button>
              {/* Answer */}
              <div
                className={`mt-4 overflow-hidden transition-max-height duration-300 ease-in-out ${
                  openIndex === index ? "max-h-screen" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm lg:text-base">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
