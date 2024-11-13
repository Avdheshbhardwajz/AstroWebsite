"use client";

import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Progress } from "./components/ui/progress";

export default function Featured() {
  const featuredLogos = [
    {
      name: "Press Trust of India",
      src: "/placeholder.svg?height=60&width=120",
    },
    { name: "Dainik Bhaskar", src: "/placeholder.svg?height=60&width=120" },
    { name: "Indore Dil Se", src: "/placeholder.svg?height=60&width=120" },
    { name: "Khabar Live", src: "/placeholder.svg?height=60&width=120" },
    { name: "Times Tech", src: "/placeholder.svg?height=60&width=120" },
    { name: "DD News", src: "/placeholder.svg?height=60&width=120" },
  ];

  const questions = [
    "Do you feel frustrated after trying diet after diet, but nothing works?",
    "Do you wake up tired, with low energy, and feel like your health is spiraling out of control?",
    "Are you constantly worrying about the long-term health risks of your weight?",
    "Are you overwhelmed by conflicting advice on how to lose weight and keep it off?",
    "Do you feel like you've tried everything, yet nothing seems to stick?",
    "Are you fearful that if you don't find a solution soon, your health will continue to decline?",
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#892b36] to-[#5d1d24] py-16 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YWI3MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#d4ab71] mb-8">
            Featured In
          </h2>
          <div className="bg-[#892b36]/50 backdrop-blur-sm border border-[#d4ab71]/30 rounded-xl p-6">
            <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {featuredLogos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-center"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-12 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
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
          <h2 className="text-3xl font-bold text-[#d4ab71] mb-8">
            Do You Relate To Any Of These?
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {questions.map((question, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-[#892b36]/50 border-[#d4ab71]/30 backdrop-blur-sm hover:border-[#d4ab71] transition-colors group">
                  <CardContent className="p-6 flex items-start">
                    <Plus className="w-6 h-6 text-[#d4ab71] mr-4 flex-shrink-0 group-hover:rotate-180 transition-transform duration-300" />
                    <p className="text-[#d4ab71] text-left">{question}</p>
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
          <Button className="bg-gradient-to-r from-[#d4ab71] to-[#f1c889] text-[#892b36] hover:from-[#c39a60] hover:to-[#e0b778] font-bold text-xl px-8 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
            REGISTER NOW FOR FREE
          </Button>
          <div className="max-w-md mx-auto space-y-2">
            <Progress value={75} className="h-2 bg-[#d4ab71]/20" />
            <p className="text-[#d4ab71] text-sm">
              Limited to only 500 Participants!
            </p>
          </div>
        </motion.div>
      </div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
