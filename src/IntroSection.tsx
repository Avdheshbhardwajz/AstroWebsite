// "use client";

// import { motion } from "framer-motion";
// import { Check, ArrowRight } from "lucide-react";
// import { Button } from "./components/ui/button";
// import { Card, CardContent } from "./components/ui/card";
// import { Progress } from "./components/ui/progress";

// interface FixedButtonProps {
//   openPopup: () => void;
// }

// interface IntroductionSectionProps {
//   openPopup: () => void;
//   data?: {
//     title: string;
//     subtitle: string;
//     beneficiaries: Array<{
//       text: string;
//     }>;
//   };
// }
// export default function WhoCanBenefitSection({ openPopup }: FixedButtonProps) {
//   const beneficiaries = [
//     {
//       text: " If you’re someone who is thinking about turning astrology into a full-time career and offering professional consultations, this webinar is for you.",
//     },
//     {
//       text: "If you’re looking to earn extra income alongside your regular job and want to explore astrology as a profitable side hustle, this is for you.",
//     },
//     {
//       text: "If you’re just beginning your astrology journey or seeking to deepen your understanding, this webinar has something valuable for you.",
//     },
//     {
//       text: " If you’re on a path of self-discovery and wish to understand how planetary influences shape your life, this is the perfect opportunity for you.",
//     },
//     {
//       text: "If you’re aiming to incorporate astrology into your professional life and enhance your decision-making and strategy, this webinar is tailored for you.",
//     },
//     {
//       text: " If you’re facing challenges in your relationships or want to understand others better, this is an ideal resource for you.",
//     },
//     {
//       text: " If you’re looking for alternative ways to boost your mental and physical health through astrology, this webinar is designed with you in mind",
//     },
//     {
//       text: " If you’re a student or young adult unsure about your future career path, exploring your astrological chart can offer clarity and help guide you toward the right direction",
//     },
//   ];
//   const handleButtonClick = () => {
//     openPopup();
//   };
//   return (
//     <section className="relative font-poppins bg-gradient-to-br from-white to-gray-100 py-16 px-4 overflow-hidden">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto relative z-10"
//       >
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
//             Who Can Benefit from{" "}
//             <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
//               This Webinar?
//             </span>
//           </h2>
//           <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
//             We've guided individuals like you to harness the wisdom of Vedic
//             Astrology, empowering them with natural, time-tested techniques that
//             not only enhance their understanding of life's patterns but also
//             help them build a meaningful career, assist others, and unlock
//             personal clarity and confidence.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-4 mb-12">
//           {beneficiaries.map((beneficiary, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Card className="bg-[#062031] border-[#FF6B2C]/30 hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
//                 <CardContent className="p-4 sm:p-6 flex items-start gap-4">
//                   <div className="bg-[#FF6B2C] rounded-lg p-2 flex-shrink-0 group-hover:bg-[#FF8F6B] transition-colors">
//                     <Check className="h-5 w-5 text-white" />
//                   </div>
//                   <p className="text-white group-hover:text-[#FF6B2C] transition-colors">
//                     {beneficiary.text}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-center space-y-6 flex flex-col items-center justify-center"
//         >
//           <Button
//             onClick={handleButtonClick}
//             className="bg-[#FF6B2C] hover:bg-[#FF8F6B] text-white font-bold text-lg sm:text-xl px-8 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B2C]/50 flex items-center justify-center gap-2"
//           >
//             REGISTER NOW FOR FREE
//             <ArrowRight className="h-6 w-6" />
//           </Button>
//           <div className="max-w-md mx-auto space-y-2">
//             <Progress value={75} className="h-3 bg-[#FF6B2C]/20">
//               <div className="h-full bg-[#FF6B2C] rounded-full" />
//             </Progress>
//             <p className="text-sm sm:text-base text-[#FF6B2C]">
//               Limited Spots Available! Reserve Your Seat Now!
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
//       <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
//     </section>
//   );
// }

"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Progress } from "./components/ui/progress";

interface IntroductionSectionProps {
  openPopup: () => void;
  data?: {
    title: string;
    subtitle: string;
    beneficiaries: Array<{
      text: string;
    }>;
  };
}

export default function WhoCanBenefitSection({
  openPopup,
  data,
}: IntroductionSectionProps) {
  const handleButtonClick = () => {
    openPopup();
  };

  // Use data from props, fallback to empty arrays/strings if not provided
  const title = data?.title || "Who Can Benefit from This Webinar?";
  const subtitle =
    data?.subtitle ||
    "We've guided individuals like you to harness the wisdom of Vedic Astrology, empowering them with natural, time-tested techniques that not only enhance their understanding of life's patterns but also help them build a meaningful career, assist others, and unlock personal clarity and confidence.";
  const beneficiaries = data?.beneficiaries || [];

  return (
    <section className="relative font-poppins bg-gradient-to-br from-white to-gray-100 py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            {title.split("from").map((part, index) => (
              <React.Fragment key={index}>
                {index > 0 && "from"}
                {index > 0 ? (
                  <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
                    {part}
                  </span>
                ) : (
                  part
                )}
              </React.Fragment>
            ))}
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {beneficiaries.map((beneficiary, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#062031] border-[#FF6B2C]/30 hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
                <CardContent className="p-4 sm:p-6 flex items-start gap-4">
                  <div className="bg-[#FF6B2C] rounded-lg p-2 flex-shrink-0 group-hover:bg-[#FF8F6B] transition-colors">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white group-hover:text-[#FF6B2C] transition-colors">
                    {beneficiary.text}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-6 flex flex-col items-center justify-center"
        >
          <Button
            onClick={handleButtonClick}
            className="bg-[#FF6B2C] hover:bg-[#FF8F6B] text-white font-bold text-lg sm:text-xl px-8 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B2C]/50 flex items-center justify-center gap-2"
          >
            REGISTER NOW FOR FREE
            <ArrowRight className="h-6 w-6" />
          </Button>
          <div className="max-w-md mx-auto space-y-2">
            <Progress value={75} className="h-3 bg-[#FF6B2C]/20">
              <div className="h-full bg-[#FF6B2C] rounded-full" />
            </Progress>
            <p className="text-sm sm:text-base text-[#FF6B2C]">
              Limited Spots Available! Reserve Your Seat Now!
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
