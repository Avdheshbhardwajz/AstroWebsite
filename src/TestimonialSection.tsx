"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Card, CardContent } from "./components/ui/card";

export default function TestimonialsSection() {
  const videoTestimonials = [
    {
      name: "Naina",
      description: "Improved appetite, metabolism & vomiting problem",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Sujata Chakravarty",
      description: "Lost 1 kg in 10 days, increased motivation and energy",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Alpana",
      description:
        "Suffered joint pains, body aches. Now revitalized with increased energy quotient",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Vineeta Awasthy",
      description:
        "Mental issues resolved & now high on energy & full of appreciation for healers",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Priti Sharma",
      description:
        "Increased energy levels, lost 5kg inches in 2 weeks, feels rejuvenated and satisfied",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
    {
      name: "Sneha Habbu",
      description:
        "All the freshness, energy and healing is evidence for another earth",
      thumbnail: "/placeholder.svg?height=200&width=300",
    },
  ];

  const chatTestimonials = Array(6).fill(
    "/placeholder.svg?height=400&width=250"
  );

  return (
    <section className="relative bg-gradient-to-br from-[#1B2B3B] to-[#0F1922] py-16 px-4 overflow-hidden font-poppins">
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
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-white"
        >
          What Are The Other 100+ People Already Saying About The{" "}
          <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
            "Kumbhak Therapy"
          </span>
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
                  <div className="relative">
                    <img
                      src={testimonial.thumbnail}
                      alt={`${testimonial.name}'s testimonial`}
                      className="w-full h-48 object-cover rounded-t-lg"
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
                    <p className="text-white/80 text-sm">
                      {testimonial.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {chatTestimonials.map((chat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="relative group"
              >
                <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm hover:border-[#FF6B2C] transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B2C]/20">
                  <CardContent className="p-2">
                    <div className="relative">
                      <img
                        src={chat}
                        alt="WhatsApp testimonial"
                        className="w-full rounded"
                      />
                      <div className="absolute top-2 left-2 bg-[#FF6B2C] rounded-full p-1">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
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
