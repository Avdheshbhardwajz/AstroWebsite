// "use client";

// import { motion } from "framer-motion";
// import { Plus } from "lucide-react";
// import { Button } from "./components/ui/button";
// import { Card, CardContent } from "./components/ui/card";
// import { Progress } from "./components/ui/progress";

// export default function Featured() {
//   const featuredLogos = [
//     {
//       name: "Press Trust of India",
//       src: "/placeholder.svg?height=60&width=120",
//     },
//     { name: "Dainik Bhaskar", src: "/placeholder.svg?height=60&width=120" },
//     { name: "Indore Dil Se", src: "/placeholder.svg?height=60&width=120" },
//     { name: "Khabar Live", src: "/placeholder.svg?height=60&width=120" },
//     { name: "Times Tech", src: "/placeholder.svg?height=60&width=120" },
//     { name: "DD News", src: "/placeholder.svg?height=60&width=120" },
//   ];

//   const questions = [
//     "Do you wish you could use astrology to help others, but do not know how to turn it into a real career?",
//     "Have you always been curious about astrology, but feel overwhelmed by the complexity of it all?",
//     "Are you feeling stuck in your current career and dreaming of a more meaningful, fulfilling path?",
//     "Do you want to learn astrology as a way to earn extra income, but aren’t sure how to get started or find clients?",
//     "Are you looking for a side hustle that’s both fulfilling and flexible, where you can help others while making money, all without quitting your current job?",
//     "Do you want to pursue a career in astrology, but don’t know where to start?",
//   ];

//   return (
//     <section className="relative bg-gradient-to-br from-[#1B2B3B] to-[#0F1922] py-16 px-4 overflow-hidden font-poppins">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

//       <div className="max-w-6xl mx-auto relative z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#FF6B2C] mb-8">
//             Featured In
//           </h2>
//           <div className="bg-[#1B2B3B]/50 backdrop-blur-sm border border-[#FF6B2C]/30 rounded-xl p-4 sm:p-6">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 items-center">
//               {featuredLogos.map((logo, index) => (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: index * 0.1 }}
//                   className="flex items-center justify-center"
//                 >
//                   <img
//                     src={logo.src}
//                     alt={logo.name}
//                     className="max-h-8 sm:max-h-12 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
//                   />
//                 </motion.div>
//               ))}
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#FF6B2C] mb-8">
//             Do You relate to this?
//           </h2>
//           <div className="grid md:grid-cols-2 gap-4">
//             {questions.map((question, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-colors group">
//                   <CardContent className="p-4 sm:p-6 flex items-start">
//                     <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B2C] mr-3 sm:mr-4 flex-shrink-0 group-hover:rotate-180 transition-transform duration-300" />
//                     <p className="text-white text-sm sm:text-base text-left">
//                       {question}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="text-center space-y-4"
//         >
//           <Button className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
//             REGISTER NOW FOR FREE
//           </Button>
//           <div className="max-w-md mx-auto space-y-2">
//             <Progress value={75} className="h-2 bg-[#FF6B2C]/20" />
//             <p className="text-[#FF6B2C] text-xs sm:text-sm">
//               Limited to only 500 Participants!
//             </p>
//           </div>
//         </motion.div>
//       </div>

//       <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
//       <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
//     </section>
//   );
// }
"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Progress } from "./components/ui/progress";

interface FixedButtonProps {
  openPopup: () => void;
}

export default function Featured({ openPopup }: FixedButtonProps) {
  const featuredLogos = [
    {
      name: "Press Trust of India",
      src: "https://akm-img-a-in.tosshub.com/indiatoday/images/reporter/201804/pti_new.jpeg?VersionId=Pom4kxkCWVIuguBJOksKEW0ArP_ICIQe",
    },
    {
      name: "Dainik Bhaskar",
      src: "https://cdn.branch.io/branch-assets/1584531581578-og_image.png",
    },
    {
      name: "Indore Dil Se",
      src: "https://hoblist.s3.ap-south-1.amazonaws.com/favorite/others/1622742668563_DD%20News.jpg",
    },
    {
      name: "Khabar Live",
      src: "https://is2-ssl.mzstatic.com/image/thumb/Purple62/v4/88/8b/f8/888bf8d4-ee0a-0ff6-ef35-175d0b837288/source/512x512bb.jpg",
    },
    {
      name: "Aaj Tak",
      src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Aaj_tak_logo.png",
    },
    {
      name: "Amar Ujala",
      src: "https://th.bing.com/th/id/R.bcf0f0be2311b18dae498b5b1ff180db?rik=dQdVlgCouGuLtA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-91e2PSMrZjE%2fTvSUGtNlGDI%2fAAAAAAAAD6U%2fiA-rHM7NIx8%2fs1600%2famar-ujala-logo.gif&ehk=aiuglMepEKKElm8TIuScORmoaivbXNMscTfI81DDKQs%3d&risl=&pid=ImgRaw&r=0",
    },
  ];

  const questions = [
    "Do you wish you could use astrology to help others, but do not know how to turn it into a real career?",
    "Have you always been curious about astrology, but feel overwhelmed by the complexity of it all?",
    "Are you feeling stuck in your current career and dreaming of a more meaningful, fulfilling path?",
    "Do you want to learn astrology as a way to earn extra income, but aren't sure how to get started or find clients?",
    "Are you looking for a side hustle that's both fulfilling and flexible, where you can help others while making money, all without quitting your current job?",
    "Do you want to pursue a career in astrology, but don't know where to start?",
  ];

  const handleButtonClick = () => {
    openPopup();
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 py-16 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FF6B2C] mb-8">
            Featured In
          </h2>
          <div className="bg-[#062031] text-white backdrop-blur-sm border border-[#FF6B2C]/30 rounded-xl p-4 sm:p-6 shadow-md">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6 items-center">
              {featuredLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center "
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-8 sm:max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#FF6B2C] mb-8">
            Do You relate to this?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#062031]  border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-colors group shadow-md">
                  <CardContent className="p-4 sm:p-6 flex items-start">
                    <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B2C] mr-3 sm:mr-4 flex-shrink-0 group-hover:rotate-180 transition-transform duration-300" />
                    <p className="text-white text-sm sm:text-base text-left">
                      {question}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center space-y-4"
        >
          <Button
            onClick={handleButtonClick}
            className="bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold text-lg sm:text-xl px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            REGISTER NOW FOR FREE
          </Button>
          <div className="max-w-md mx-auto space-y-2">
            <Progress value={75} className="h-2 bg-[#FF6B2C]/20" />
            <p className="text-[#FF6B2C] text-xs sm:text-sm">
              Limited to only 500 Participants!
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
