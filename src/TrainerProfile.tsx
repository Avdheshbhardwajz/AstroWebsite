"use client";

import { motion } from "framer-motion";
import { ScrollText, Book, Star, Sparkles } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";

export default function TrainerProfile() {
  const achievements = [
    { icon: ScrollText, text: "Author of Multiple Books on Vedic Astrology" },
    { icon: Book, text: "Founder of Suryanshm School of Astrology" },
    { icon: Star, text: "Expert in Lal Kitab & KP Astrology" },
    { icon: Sparkles, text: "Pioneer in Predictive Astrology Systems" },
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#892b36] to-[#5d1d24] py-20 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YWI3MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#d4ab71] mb-2">
            Meet Your <span className="text-[#f1c889]">Trainer</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-[#d4ab71] to-[#f1c889] mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <Card className="bg-[#892b36]/50 border-[#d4ab71]/30 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/placeholder.svg?height=600&width=500"
                    alt="Acharya Harish Kumar"
                    className="w-full object-cover rounded-lg transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#892b36] via-transparent to-transparent opacity-60" />
                </div>
              </CardContent>
            </Card>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-[#f1c889]">
                Acharya Harish Kumar
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#d4ab71]/20 text-[#d4ab71] hover:bg-[#d4ab71]/30">
                  Astrologer
                </Badge>
                <Badge className="bg-[#d4ab71]/20 text-[#d4ab71] hover:bg-[#d4ab71]/30">
                  Vastu Shastri
                </Badge>
                <Badge className="bg-[#d4ab71]/20 text-[#d4ab71] hover:bg-[#d4ab71]/30">
                  Author
                </Badge>
              </div>
            </div>

            <Card className="bg-[#892b36]/50 border-[#d4ab71]/30 backdrop-blur-sm">
              <CardContent className="p-6 grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="bg-[#d4ab71]/10 rounded-lg p-2 flex-shrink-0">
                      <achievement.icon className="w-5 h-5 text-[#d4ab71]" />
                    </div>
                    <p className="text-[#d4ab71] text-sm">{achievement.text}</p>
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
              <p className="text-[#d4ab71] leading-relaxed">
                Join the upcoming{" "}
                <span className="text-[#f1c889] font-semibold">
                  3-Day KP Astrology Masterclass
                </span>{" "}
                where you'll unlock the mysteries of astrology and enhance your
                understanding of the stars' influence on our lives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
