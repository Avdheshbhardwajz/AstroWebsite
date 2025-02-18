// "use client";

// import { motion } from "framer-motion";
// import { ScrollText, Book, Star, Sparkles } from "lucide-react";
// import { Card, CardContent } from "./components/ui/card";
// import { Badge } from "./components/ui/badge";
// import img from "/MentorImage.jpg";

// interface TrainerProfileProps {
//   data?: {
//     header: {
//       title: string;
//       highlight: string;
//     };
//     trainer: {
//       image: {
//         src: string;
//         alt: string;
//         hoverEffect: string;
//       };
//       name: string;
//       badges: Array<{
//         label: string;
//       }>;
//       description: string;
//     };
//   };
// }

// export default function TrainerProfile() {
//   const achievements = [
//     { icon: ScrollText, text: "Expert in Vedic Astrology & Numerology." },
//     { icon: Book, text: "BestSelling Author" },
//     { icon: Star, text: "Founder of Astrowallas" },
//     { icon: Sparkles, text: "Pioneer in Predictive Astrology Systems" },
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-white to-gray-100 py-20 px-4 overflow-hidden font-poppins">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

//       <div className="max-w-7xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
//             Meet Your{" "}
//             <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
//               Trainer
//             </span>
//           </h2>
//           <div className="w-40 h-1 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] mx-auto rounded-full" />
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="relative"
//           >
//             <Card className="bg-white border-[#FF6B2C]/30 overflow-hidden hover:shadow-lg hover:shadow-[#FF6B2C]/20 transition-all duration-300">
//               <CardContent className="p-0">
//                 <div className="relative">
//                   <img
//                     src={img}
//                     alt=" ADVANCED TECHNIQUES "
//                     className="w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
//                 </div>
//               </CardContent>
//             </Card>
//             <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//             className="space-y-6"
//           >
//             <div className="space-y-4">
//               <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B2C]">
//                 Sugandha Rawat
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 <Badge className="bg-[#FF6B2C]/20 text-[#FF6B2C] hover:bg-[#FF6B2C]/30">
//                   Jyotish Acharya
//                 </Badge>
//                 <Badge className="bg-[#FF6B2C]/20 text-[#FF6B2C] hover:bg-[#FF6B2C]/30">
//                   Vastu Acharya
//                 </Badge>
//                 <Badge className="bg-[#FF6B2C]/20 text-[#FF6B2C] hover:bg-[#FF6B2C]/30">
//                   Jyotish Alankar
//                 </Badge>
//                 <Badge className="bg-[#FF6B2C]/20 text-[#FF6B2C] hover:bg-[#FF6B2C]/30">
//                   Phd
//                 </Badge>
//               </div>
//             </div>

//             <Card className="bg-[#062031] border-[#FF6B2C]/30 hover:shadow-lg hover:shadow-[#FF6B2C]/20 transition-all duration-300">
//               <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {achievements.map((achievement, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.6 + index * 0.1 }}
//                     className="flex items-start gap-3 group"
//                   >
//                     <div className="bg-[#FF6B2C]/10 rounded-lg p-2 flex-shrink-0 group-hover:bg-[#FF6B2C]/20 transition-colors duration-300">
//                       <achievement.icon className="w-5 h-5 text-[#FF6B2C]" />
//                     </div>
//                     <p className="text-white text-sm group-hover:text-[#FF6B2C] transition-colors duration-300">
//                       {achievement.text}
//                     </p>
//                   </motion.div>
//                 ))}
//               </CardContent>
//             </Card>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className="space-y-4"
//             >
//               <p className="text-gray-700 leading-relaxed text-lg ">
//                 With more than 15 years of Experience, Dr. Sughandha Rawat has
//                 empowered thousands with {""}
//                 <span className="text-[#FF6B2C] font-semibold">
//                   practical astrology techniques.
//                 </span>{" "}
//                 Many of her students now thrive as professional astrologers,
//                 offering consultations and building successful careers
//               </p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </div>

//       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
//       <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
//     </section>
//   );
// }
"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollText, Book, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

interface TrainerProfileProps {
  data?: {
    header: {
      title: string;
      highlight: string;
    };
    trainer: {
      image: {
        src: string;
        alt: string;
        hoverEffect: string;
      };
      name: string;
      badges: Array<{
        label: string;
      }>;
      description: string;
    };
  };
}

export default function TrainerProfile({ data }: TrainerProfileProps) {
  // Default achievements in case no custom achievements are passed
  const defaultAchievements = [
    { icon: ScrollText, text: "Expert in Vedic Astrology & Numerology." },
    { icon: Book, text: "BestSelling Author" },
    { icon: Star, text: "Founder of Astrowallas" },
    { icon: Sparkles, text: "Pioneer in Predictive Astrology Systems" },
  ];

  // Use data from props or fallback to default values
  const headerTitle = data?.header?.title || "Meet Your Trainer";
  const headerHighlight = data?.header?.highlight || "Trainer";
  const trainerImage = data?.trainer?.image?.src || "/MentorImage.jpg";
  const trainerImageAlt = data?.trainer?.image?.alt || "ADVANCED TECHNIQUES";
  const trainerName = data?.trainer?.name || "Sugandha Rawat";
  const trainerBadges = data?.trainer?.badges || [];
  const trainerDescription =
    data?.trainer?.description ||
    "With more than 15 years of Experience, Dr. Sughandha Rawat has empowered thousands with practical astrology techniques. Many of her students now thrive as professional astrologers, offering consultations and building successful careers";

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 py-20 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
            {headerTitle.split(headerHighlight).map((part, index) => (
              <React.Fragment key={index}>
                {index > 0 ? (
                  <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
                    {headerHighlight}
                  </span>
                ) : null}
                {part}
              </React.Fragment>
            ))}
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-white border-[#FF6B2C]/30 overflow-hidden hover:shadow-lg hover:shadow-[#FF6B2C]/20 transition-all duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={trainerImage}
                    alt={trainerImageAlt}
                    className="w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                </div>
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FF6B2C]">
                {trainerName}
              </h3>
              <div className="flex flex-wrap gap-2">
                {trainerBadges.map((badge, index) => (
                  <Badge
                    key={index}
                    className="bg-[#FF6B2C]/20 text-[#FF6B2C] hover:bg-[#FF6B2C]/30"
                  >
                    {badge.label}
                  </Badge>
                ))}
              </div>
            </div>

            <Card className="bg-[#062031] border-[#FF6B2C]/30 hover:shadow-lg hover:shadow-[#FF6B2C]/20 transition-all duration-300">
              <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {defaultAchievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="bg-[#FF6B2C]/10 rounded-lg p-2 flex-shrink-0 group-hover:bg-[#FF6B2C]/20 transition-colors duration-300">
                      <achievement.icon className="w-5 h-5 text-[#FF6B2C]" />
                    </div>
                    <p className="text-white text-sm group-hover:text-[#FF6B2C] transition-colors duration-300">
                      {achievement.text}
                    </p>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="space-y-4"
            >
              <p className="text-gray-700 leading-relaxed text-lg">
                {trainerDescription
                  .split("practical astrology techniques")
                  .map((part, index) => (
                    <React.Fragment key={index}>
                      {part}
                      {index === 0 && (
                        <span className="text-[#FF6B2C] font-semibold">
                          practical astrology techniques
                        </span>
                      )}
                    </React.Fragment>
                  ))}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
