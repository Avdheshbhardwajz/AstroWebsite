// "use client";

// import { motion } from "framer-motion";
// import {
//   Video,
//   Calendar,
//   UserCheck,
//   MessageCircleQuestion,
//   ArrowRight,
// } from "lucide-react";
// import { Button } from "./components/ui/button";
// import { Progress } from "./components/ui/progress";
// import { Card, CardContent } from "./components/ui/card";

// interface FixedButtonProps {
//   openPopup: () => void;
// }

// interface HowItWorksProps {
//   openPopup: () => void;
//   data?: {
//     title: string;
//     description: string[];
//     features: Array<{
//       icon: string;
//       title: string;
//       description: string;
//     }>;
//   };
// }

// export default function HowItWorks({ openPopup }: FixedButtonProps) {
//   const features = [
//     {
//       icon: Video,
//       title: "Live Sessions",
//       description: "Day 1: 30th November at 6 PM | Day 2: 1st December at 6 PM",
//     },
//     {
//       icon: UserCheck,
//       title: "Ideal for All Levels",
//       description:
//         "Designed for Beginners and Intermediates with comprehensive curriculum",
//     },
//     {
//       icon: Calendar,
//       title: "Proven Predictive Strategies",
//       description:
//         "Master advanced techniques like dashas, transits, and yogas through structured learning",
//     },
//     {
//       icon: MessageCircleQuestion,
//       title: "Mega Q&A Session",
//       description:
//         "Clear all your doubts in an extensive session, ensuring you can implement what you've learned with ease",
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
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
//           >
//             How Does{" "}
//             <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
//               Vedic & Predictive Astrology
//             </span>{" "}
//             Masterclass Work?
//           </motion.h2>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3 }}
//             className="space-y-4"
//           >
//             <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
//               Vedic Astrology, the mother of all astrology branches, is the
//               foundation of our 2-Day Masterclass. This traditional system
//               offers unmatched prediction accuracy and a deep understanding of
//               astrology's fundamental principles, empowering you to predict
//               one's future and guide them.
//             </p>
//             <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
//               Predictive Astrology Techniques form the foundation of our
//               curriculum, teaching you how to accurately interpret and forecast
//               significant life events. This masterclass is not a quick fix—it's
//               a comprehensive, long-term approach to mastering astrology for
//               personal growth and professional development.
//             </p>
//           </motion.div>
//         </div>

//         <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 + index * 0.1 }}
//             >
//               <Card className="bg-[#062031] border-[#FF6B2C]/30 hover:border-[#FF6B2C] transition-colors h-full group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
//                 <CardContent className="p-6 text-center">
//                   <div className="bg-[#FF6B2C]/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-[#FF6B2C]/20 transition-colors">
//                     <feature.icon className="w-12 h-12 text-[#FF6B2C]" />
//                   </div>
//                   <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF6B2C] transition-colors">
//                     {feature.title}
//                   </h3>
//                   <p className="text-white group-hover:text-gray-900 transition-colors">
//                     {feature.description}
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.7 }}
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
import {
  Video,
  Calendar,
  UserCheck,
  MessageCircleQuestion,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Card, CardContent } from "./components/ui/card";

// Map for icon components
const IconMap: Record<string, LucideIcon> = {
  Video,
  Calendar,
  UserCheck,
  MessageCircleQuestion,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface HowItWorksData {
  title: string;
  description: string[];
  features: Feature[];
}

interface HowItWorksProps {
  openPopup: () => void;
  data?: HowItWorksData;
}

export default function HowItWorks({ openPopup, data }: HowItWorksProps) {
  // If no data is provided, return null or a loading state
  if (!data) {
    return null;
  }

  const handleButtonClick = () => {
    openPopup();
  };

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
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            {data.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {data.description.map((desc, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto"
              >
                {desc}
              </p>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {data.features.map((feature, index) => {
            const IconComponent = IconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className="bg-[#062031] border-[#FF6B2C]/30 hover:border-[#FF6B2C] transition-colors h-full group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
                  <CardContent className="p-6 text-center">
                    <div className="bg-[#FF6B2C]/10 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-[#FF6B2C]/20 transition-colors">
                      {IconComponent && (
                        <IconComponent className="w-12 h-12 text-[#FF6B2C]" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[#FF6B2C] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
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
              Limited to only 500 Participants!
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
