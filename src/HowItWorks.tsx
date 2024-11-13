"use client";

import { motion } from "framer-motion";
import {
  Video,
  FileText,
  MessageCircleQuestion,
  ArrowRight,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Progress } from "./components/ui/progress";
import { Card, CardContent } from "./components/ui/card";

export default function HowItWorks() {
  const features = [
    {
      icon: Video,
      title: "Live Session",
      description:
        "At 6 PM, We will host the webinar covering everything in detail.",
    },
    {
      icon: FileText,
      title: "Root Causes of Weight Management",
      description:
        "For every step, we will be sharing knowledge about why weight management is causing life-threatening diseases.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Mega Q/A Session",
      description:
        "After the workshop we will have a mega Q/A session. So that you can implement what has been taught with ease",
    },
  ];

  return (
    <section className="relative font-poppins bg-gradient-to-br from-[#892b36] to-[#5d1d24] py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YWI3MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

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
            className="text-3xl md:text-4xl font-bold mb-6 text-[#d4ab71]"
          >
            How Does{" "}
            <span className="text-[#f1c889]">
              Ameda-Shleshma Shuddhi Chikitsa
            </span>{" "}
            Work?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg text-[#d4ab71] max-w-4xl mx-auto opacity-90">
              Kumbhak Therapy is at the core of Ameda-Shleshma Shuddhi Chikitsa,
              a natural, holistic solution designed to balance your body's
              metabolism, strength, and energy.
            </p>
            <p className="text-lg text-[#d4ab71] max-w-4xl mx-auto opacity-90">
              Unlike fad diets or extreme workouts that focus on short-term
              results, Kumbhak Therapy works on the principle of controlled
              breathing and metabolism enhancement, tackling the root cause of
              weight issues. This isn't a quick fix—it's a long-term,
              sustainable method for real transformation.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Card className="bg-[#892b36]/50 border-[#d4ab71]/30 backdrop-blur-sm hover:border-[#d4ab71] transition-colors h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#d4ab71]/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-[#d4ab71]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-[#f1c889]">
                    {feature.title}
                  </h3>
                  <p className="text-[#d4ab71] opacity-90">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center space-y-4"
        >
          <Button className="bg-gradient-to-r from-[#d4ab71] to-[#f1c889] text-[#892b36] hover:from-[#c39a60] hover:to-[#e0b778] font-bold text-xl px-8 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2">
            REGISTER NOW FOR FREE
            <ArrowRight className="h-6 w-6" />
          </Button>
          <div className="max-w-md mx-auto space-y-2">
            <Progress value={75} className="h-2 bg-[#d4ab71]/20">
              <div className="h-full bg-[#d4ab71] rounded-full" />
            </Progress>
            <p className="text-sm text-[#d4ab71] opacity-90">
              Limited to only 500 Participants!
            </p>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
