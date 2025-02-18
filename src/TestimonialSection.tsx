// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { Play, ArrowRight } from "lucide-react";
// import { Button } from "./components/ui/button";
// import { Progress } from "./components/ui/progress";
// import { Card, CardContent } from "./components/ui/card";
// import { VideoModal } from "./components/ui/VideoModal";
// import img1 from "/Student feedback  (1).jpg";
// import img2 from "/Student feedback  (2).jpg";
// import img3 from "/Student feedback .jpg";
// import img4 from "/Student feedback.jpg";

// interface FixedButtonProps {
//   openPopup: () => void;
// }

// interface TestimonialsSectionProps {
//   openPopup: () => void;
//   data?: {
//     sectionTitle: string;
//     videoTestimonials: Array<{
//       videoId: string;
//       name: string;
//     }>;
//     imageTestimonials: Array<{
//       imageSrc: string;
//     }>;
//   };
// }

// export default function TestimonialsSection({ openPopup }: FixedButtonProps) {
//   const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

//   const videoTestimonials = [
//     {
//       videoId: "tW3drSBFMek",
//       name: "Mr Gaba",
//     },
//     {
//       videoId: "xBVMfWf6JEs",
//       name: "Archana Kulkarni",
//     },
//     {
//       videoId: "UDc-eC_u2MY",
//       name: "Mrs kamayani",
//     },
//     {
//       videoId: "J4xBwsCDtX0",
//       name: "Mrs Parool Karki",
//     },
//     {
//       videoId: "I99zCthm8HE",
//       name: "Dr Gurpreet Arora",
//     },
//   ];

//   const imageTestimonials = [
//     { imageSrc: img1 },
//     { imageSrc: img2 },
//     { imageSrc: img3 },
//     { imageSrc: img4 },
//   ];

//   const handleVideoClick = (videoId: string) => {
//     setSelectedVideo(videoId);
//   };

//   const handleCloseVideo = () => {
//     setSelectedVideo(null);
//   };

//   const handleButtonClick = () => {
//     openPopup();
//   };

//   return (
//     <section className="relative bg-gradient-to-br from-white to-gray-100 py-16 px-4 overflow-hidden font-poppins">
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="max-w-6xl mx-auto relative z-10"
//       >
//         <motion.h2
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-black"
//         >
//           What Are The Other 100+ People Already Saying About The{" "}
//           <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
//             "Astrology Workshop"
//           </span>
//         </motion.h2>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//           {videoTestimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 + index * 0.1 }}
//             >
//               <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
//                 <CardContent className="p-0">
//                   <div
//                     className="relative cursor-pointer aspect-video"
//                     onClick={() => handleVideoClick(testimonial.videoId)}
//                   >
//                     <img
//                       src={`https://img.youtube.com/vi/${testimonial.videoId}/0.jpg`}
//                       alt={`${testimonial.name}'s testimonial`}
//                       className="w-full h-full object-cover rounded-t-lg"
//                     />
//                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
//                       <motion.div
//                         whileHover={{ scale: 1.1 }}
//                         className="bg-[#FF6B2C] rounded-full p-4"
//                       >
//                         <Play className="w-8 h-8 text-white" />
//                       </motion.div>
//                     </div>
//                   </div>
//                   <div className="p-4">
//                     <h3 className="text-lg font-semibold text-[#FF6B2C] mb-2">
//                       {testimonial.name}
//                     </h3>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid md:grid-cols-2 gap-6 mb-12">
//           {imageTestimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ delay: 0.2 + index * 0.1 }}
//             >
//               <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
//                 <CardContent className="p-0">
//                   <div className="relative">
//                     <img
//                       src={testimonial.imageSrc}
//                       alt="Student feedback"
//                       className="w-full h-auto rounded-t-lg"
//                     />
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2 }}
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

//       {selectedVideo && (
//         <VideoModal
//           isOpen={!!selectedVideo}
//           onClose={handleCloseVideo}
//           videoId={selectedVideo}
//         />
//       )}
//     </section>
//   );
// }
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Card, CardContent } from "./components/ui/card";
import { VideoModal } from "./components/ui/VideoModal";

interface VideoTestimonial {
  videoId: string;
  name: string;
}

interface ImageTestimonial {
  imageSrc: string;
}

interface TestimonialsSectionProps {
  openPopup: () => void;
  data?: {
    sectionTitle: string;
    videoTestimonials: VideoTestimonial[];
    imageTestimonials: ImageTestimonial[];
  };
}

export default function TestimonialsSection({
  openPopup,
  data,
}: TestimonialsSectionProps) {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Fallback data in case props.data is undefined
  const {
    sectionTitle = "What Are The Other 100+ People Already Saying About The Astrology Workshop",
    videoTestimonials = [],
    imageTestimonials = [],
  } = data || {};

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  const handleButtonClick = () => {
    openPopup();
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 py-16 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-black"
        >
          {sectionTitle}
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
                <CardContent className="p-0">
                  <div
                    className="relative cursor-pointer aspect-video"
                    onClick={() => handleVideoClick(testimonial.videoId)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${testimonial.videoId}/0.jpg`}
                      alt={`${testimonial.name}'s testimonial`}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-all duration-300">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="bg-[#FF6B2C] rounded-full p-4"
                      >
                        <Play className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-[#FF6B2C] mb-2">
                      {testimonial.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12 ">
          {imageTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <Card className="sm:max-w-[450px] max-w-[70%] mx-auto bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-all duration-300 group hover:shadow-lg hover:shadow-[#FF6B2C]/20">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={testimonial.imageSrc}
                      alt="Student feedback"
                      className="w-full h-auto rounded-t-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
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

      {selectedVideo && (
        <VideoModal
          isOpen={!!selectedVideo}
          onClose={handleCloseVideo}
          videoId={selectedVideo}
        />
      )}
    </section>
  );
}
