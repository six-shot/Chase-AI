"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const data = [
  {
    title: "How do I send money with Cash Tide?",
    answer:
      "Simply enter the recipient's phone number, specify the amount, and hit send. No banking details are needed!",
  },
  {
    title: "Can I use Cash Tide internationally?",
    answer:
      "Absolutely! You can send money anywhere in the world, instantly and without hassle.",
  },
  {
    title: "How does Cash Tide ensure security?",
    answer:
      "Cash Tide uses blockchain technology to ensure that all transactions are secure, transparent, and efficient.",
  },
  {
    title: "Are there any fees for sending money?",
    answer:
      "No! All transfers are completely free—there are no hidden costs or service charges.",
  },
  {
    title: "Is there a limit to how much I can send?",
    answer:
      "There are no strict limits on transfers, though certain regions may have transaction thresholds. Please check our terms for more details.",
  },
];

const Accordion = ({
  title,
  answer,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  title: string;
  answer: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (index: number | null) => void;
}) => {
  const isOpen = hoveredIndex === index;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: false }}
      onClick={() => setHoveredIndex(isOpen ? null : index)}
      className="relative p-[1px] overflow-hidden cursor-pointer"
    >
      <div className="stroke-rectangle absolute inset-0"></div>
      {isOpen && <div className="stroke-rectangle is-gradient"></div>}
      <div className=" faq-card rounded-[12px] font-[family-name:var(--font-inter)] py-[16px]">
        <motion.button
          className="flex justify-between items-center w-full px-4 sm:px-[16px] cursor-pointer "
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.2 }}
        >
          <span className="text-sm sm:text-[16px] text-[#ffff] font-medium">
            {title}
          </span>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5 sm:w-6 sm:h-6"
          >
            <path
              d="M19 9L12 16L5 9"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className=" text-sm sm:text-base lg:text-[1rem] text-[#ffffff] mt-[21px] px-4 sm:px-[16px] ">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default function FAQ() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="flex justify-center items-center mb-[96px]">
        <div className=" w-full max-w-[1280px] h-[4px] line-bg" />
      </div>
      <div className="flex flex-col gap-3 justify-center items-center px-4 sm:px-0">
        <div className="w-[150px] h-[43px] rounded-[22px] button-gradient relative">
          <div className="w-full h-full rounded-[22px] bg-black absolute top-[1px] left-[2px] flex items-center">
            <h6 className="gradient-text ml-4 font-[family-name:var(--font-inter)] font-semibold text-sm sm:text-base">
              FAQ&apos;S SECTION
            </h6>
          </div>
        </div>
        <h5 className="text-2xl sm:text-3xl lg:text-[44px] font-[family-name:var(--font-inter)] text-[#ffffff] font-medium text-center">
          Some Common FAQ&apos;s
        </h5>
        <p className="font-[family-name:var(--font-inter)] text-[#E6ECFFB2] text-center font-bold text-sm sm:text-base lg:text-lg max-w-2xl lg:max-w-none">
          Get answers to your questions and learn about our platform
        </p>
        <div className=" flex flex-col p-4 sm:p-6 lg:p-[36px] w-full max-w-[900px] gap-4 card-bg shadow-[0px_-22px_37px_0px_#1d1f130d] rounded-[20px]">
          {data.map((item, index) => (
            <Accordion
              key={index}
              index={index}
              title={item.title}
              answer={item.answer}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
