// "use client";

// import { motion } from "framer-motion";
// import { Check, ArrowRight } from "lucide-react";
// import { Button } from "./components/ui/button";
// import { Card, CardContent } from "./components/ui/card";
// import { Progress } from "./components/ui/progress";

// export default function IntroductionSection() {
//   const features = [
//     {
//       text: "A simple, sustainable approach to weight loss with no diet restrictions or intense workouts.",
//     },
//     {
//       text: "An introduction to Kumbhak Therapy, which can help improve metabolism, boost energy and promote long-term wellness.",
//     },
//     {
//       text: "Insight into the root cause of your weight issues with the Prana Shakti Diagnosis.",
//     },
//     {
//       text: "How Our therapy works to increase your metabolism naturally, helping you lose weight and gain muscle strength.",
//     },
//     {
//       text: "The Truth About Diet Plans & Hard Exercise, Medicine that don't work.",
//     },
//     {
//       text: "Understanding Body Weight and its magical ability of the body to regulate metabolism & fat/weight.",
//     },
//     {
//       text: "Introduction to our online AMEDA-SHLESHMA SHUDDHI CHIKTSA Program",
//     },
//   ];

//   return (
//     <section className="relative font-poppins bg-gradient-to-br from-[#1B2B3B] to-[#0F1922] py-16 px-4 overflow-hidden">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto relative z-10"
//       >
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
//             Introducing{" "}
//             <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
//               "Ameda-Shleshma Shuddhi Chikitsa"
//             </span>{" "}
//             for
//             <br />
//             Weight Management
//           </h2>
//           <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
//             We've helped people just like you take control of their health
//             through a natural, sustainable approach that not only helps you lose
//             weight but strengthens your body, enhances your energy, and boosts
//             your confidence.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-4 mb-12">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
//                 <CardContent className="p-4 sm:p-6 flex items-start gap-4">
//                   <div className="bg-[#FF6B2C] rounded-lg p-2 flex-shrink-0 group-hover:bg-[#FF8F6B] transition-colors">
//                     <Check className="h-5 w-5 text-white" />
//                   </div>
//                   <p className="text-white/80 group-hover:text-white transition-colors">
//                     {feature.text}
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
//           className="text-center space-y-6"
//         >
//           <Button className="bg-[#FF6B2C] hover:bg-[#FF8F6B] text-white font-bold text-lg sm:text-xl px-8 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B2C]/50 flex items-center justify-center gap-2">
//             REGISTER NOW FOR FREE
//             <ArrowRight className="h-6 w-6" />
//           </Button>
//           <div className="max-w-md mx-auto space-y-2">
//             <Progress value={75} className="h-3 bg-[#FF6B2C]/20">
//               <div className="h-full bg-[#FF6B2C] rounded-full" />
//             </Progress>
//             <p className="text-sm sm:text-base text-[#FF6B2C]">
//               Limited to only 500 Participants!
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

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Progress } from "./components/ui/progress";

export default function WhoCanBenefitSection() {
  const beneficiaries = [
    {
      text: "Aspiring Astrologers: If you're thinking about turning astrology into a full-time career, this webinar will give you the insights and tools to start offering professional consultations and building your astrology practice.",
    },
    {
      text: "Side Income Seekers: If you're looking to earn extra income alongside your regular job, astrology can be a rewarding side hustle. Learn how to start offering consultations and turn your passion into a profitable endeavor.",
    },
    {
      text: "Astrology Beginners and Enthusiasts: Whether you're just starting to explore the world of astrology or you're looking to deepen your existing knowledge, this session is perfect for all levels.",
    },
    {
      text: "Personal Growth Seekers: If you're on a journey of self-discovery and want to understand how the planetary influences shape your life, this webinar will offer valuable insights for personal and spiritual growth.",
    },
    {
      text: "Professionals Seeking a New Perspective: Entrepreneurs, business leaders, and decision-makers looking to incorporate astrology into their strategic planning and enhance their approach to life and work will find this session highly beneficial.",
    },
    {
      text: "Those Navigating Relationships: If you're struggling with relationship challenges or simply want to understand others better, astrology can provide powerful insights to help foster stronger, more harmonious connections.",
    },
    {
      text: "Wellness Enthusiasts: For those interested in exploring alternative ways to boost your mental and physical health, astrology offers a holistic perspective that can complement your wellness practices.",
    },
    {
      text: "Students at a Career Crossroad: If you're a student or young adult trying to make sense of your future career path, understanding your astrological chart can provide you with clarity and guidance on your best direction.",
    },
  ];

  return (
    <section className="relative font-poppins bg-gradient-to-br from-[#1B2B3B] to-[#0F1922] py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
            Who Can Benefit from{" "}
            <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
              This Webinar?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-4xl mx-auto">
            We've guided individuals like you to harness the wisdom of Vedic
            Astrology, empowering them with natural, time-tested techniques that
            not only enhance their understanding of life's patterns but also
            help them build a meaningful career, assist others, and unlock
            personal clarity and confidence.
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
              <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
                <CardContent className="p-4 sm:p-6 flex items-start gap-4">
                  <div className="bg-[#FF6B2C] rounded-lg p-2 flex-shrink-0 group-hover:bg-[#FF8F6B] transition-colors">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-white/80 group-hover:text-white transition-colors">
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
          className="text-center space-y-6"
        >
          <Button className="bg-[#FF6B2C] hover:bg-[#FF8F6B] text-white font-bold text-lg sm:text-xl px-8 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B2C]/50 flex items-center justify-center gap-2">
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