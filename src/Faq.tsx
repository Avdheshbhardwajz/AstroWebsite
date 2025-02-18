// "use client";

// import { motion } from "framer-motion";
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from "./components/ui/accordion";
// import { Card } from "./components/ui/card";
// import { HelpCircle } from "lucide-react";

// interface FaqProps {
//   data?: {
//     title: string;
//     questions: Array<{
//       question: string;
//       answer: string;
//     }>;
//   };
// }

// export default function Faq() {
//   const faqs = [
//     {
//       question: "When and where is the workshop and how long would it be?",
//       answer:
//         "The workshop will be held online, allowing participants to join from the comfort of their own homes. It's a 2-day journey into the depths of astrology, with each session lasting for hours. We're bringing the stars to you!",
//     },
//     {
//       question: "For whom is this workshop?",
//       answer:
//         "This workshop is designed for curious souls, astrology enthusiasts, and anyone seeking personal growth and enlightenment. If you have a passion for exploring the mysteries of the cosmos and unlocking the secrets of your own life, you're in the right place.",
//     },
//     {
//       question:
//         "How can Astrology help me in my personal and professional life?",
//       answer:
//         "Astrology provides insights into your strengths, and weaknesses, and helps you make informed decisions in both personal and professional aspects.",
//     },
//     {
//       question:
//         "Can Astrology be used to improve relationships and communication?",
//       answer:
//         "Yes, astrology can enhance relationships by providing insights into compatibility and improving communication. It is advisable to attend the course on PC/Mobile and with good internet connectivity for a better learning experience.",
//     },
//     {
//       question:
//         "Is prior knowledge of astrology required to attend this workshop?",
//       answer:
//         "No, this workshop is designed for both beginners and those with some prior knowledge of astrology. We'll start with the basics and gradually delve into more advanced topics.",
//     },
//     {
//       question: "Can we ask questions during the workshop?",
//       answer: "Yes, We will have separate Q&A sessions in the Workshop.",
//     },
//   ];

//   return (
//     <section className="relative py-16 bg-gradient-to-br from-white to-gray-100 text-black font-poppins overflow-hidden">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30"></div>
//       <div className="max-w-4xl mx-auto px-4 relative z-10">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-black"
//         >
//           Frequently Asked{" "}
//           <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
//             Questions
//           </span>
//         </motion.h2>
//         <Card className=" border-[#FF6B2C]/30 backdrop-blur-sm shadow-xl p-4 md:p-8">
//           <Accordion type="single" collapsible className="w-full">
//             {faqs.map((faq, index) => (
//               <AccordionItem
//                 value={`item-${index}`}
//                 key={index}
//                 className="border-b border-[#FF6B2C]/30 last:border-b-0"
//               >
//                 <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-black hover:text-[#FF6B2C] transition-colors duration-300 py-4 md:py-6">
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                     className="flex items-center w-full"
//                   >
//                     <HelpCircle className="w-5 h-5 md:w-6 md:h-6 mr-3 flex-shrink-0 text-[#FF6B2C]" />
//                     <span>{faq.question}</span>
//                   </motion.div>
//                 </AccordionTrigger>
//                 <AccordionContent className="text-black/80 text-sm md:text-base pb-4 md:pb-6">
//                   <motion.div
//                     initial={{ opacity: 0, y: -10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     {faq.answer}
//                   </motion.div>
//                 </AccordionContent>
//               </AccordionItem>
//             ))}
//           </Accordion>
//         </Card>
//       </div>
//       <motion.div
//         className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       ></motion.div>
//       <motion.div
//         className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20"
//         animate={{
//           scale: [1, 1.2, 1],
//           opacity: [0.2, 0.3, 0.2],
//         }}
//         transition={{
//           duration: 4,
//           repeat: Infinity,
//           ease: "easeInOut",
//           delay: 2,
//         }}
//       ></motion.div>
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Card } from "./components/ui/card";
import { HelpCircle } from "lucide-react";

interface FaqProps {
  data?: {
    title: string;
    questions: Array<{
      question: string;
      answer: string;
    }>;
  };
}

export default function Faq({ data }: FaqProps) {
  // Use the passed data or fallback to an empty array if no data is provided
  const faqs = data?.questions || [];

  return (
    <section className="relative py-16 bg-gradient-to-br from-white to-gray-100 text-black font-poppins overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-black"
        >
          {data?.title || "Frequently Asked "}
          <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
            {data?.title ? "" : "Questions"}
          </span>
        </motion.h2>
        <Card className=" border-[#FF6B2C]/30 backdrop-blur-sm shadow-xl p-4 md:p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-b border-[#FF6B2C]/30 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold text-black hover:text-[#FF6B2C] transition-colors duration-300 py-4 md:py-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center w-full"
                  >
                    <HelpCircle className="w-5 h-5 md:w-6 md:h-6 mr-3 flex-shrink-0 text-[#FF6B2C]" />
                    <span>{faq.question}</span>
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-black/80 text-sm md:text-base pb-4 md:pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
      <motion.div
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      ></motion.div>
    </section>
  );
}
