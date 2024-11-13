"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Progress } from "./components/ui/progress";

export default function IntroductionSection() {
  const features = [
    {
      text: "A simple, sustainable approach to weight loss with no diet restrictions or intense workouts.",
    },
    {
      text: "An introduction to Kumbhak Therapy, which can help improve metabolism, boost energy and promote long-term wellness.",
    },
    {
      text: "Insight into the root cause of your weight issues with the Prana Shakti Diagnosis.",
    },
    {
      text: "How Our therapy works to increase your metabolism naturally, helping you lose weight and gain muscle strength.",
    },
    {
      text: "The Truth About Diet Plans & Hard Exercise, Medicine that don't work.",
    },
    {
      text: "Understanding Body Weight and its magical ability of the body to regulate metabolism & fat/weight.",
    },
    {
      text: "Introduction to our online AMEDA-SHLESHMA SHUDDHI CHIKTSA Program",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#d4ab71]">
            Introducing{" "}
            <span className="text-[#f1c889]">
              "Ameda-Shleshma Shuddhi Chikitsa"
            </span>{" "}
            for
            <br />
            Weight Management
          </h2>
          <p className="text-lg text-[#d4ab71] max-w-4xl mx-auto opacity-90">
            We've helped people just like you take control of their health
            through a natural, sustainable approach that not only helps you lose
            weight but strengthens your body, enhances your energy, and boosts
            your confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-[#892b36]/50 border-[#d4ab71]/30 backdrop-blur-sm hover:border-[#d4ab71] transition-colors">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-[#d4ab71] rounded-lg p-2 flex-shrink-0">
                    <Check className="h-5 w-5 text-[#892b36]" />
                  </div>
                  <p className="text-[#d4ab71]">{feature.text}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
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
