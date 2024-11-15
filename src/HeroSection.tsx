"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Globe, Video, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function HeroSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const difference = +new Date("2024-11-25T18:00:00") - +new Date();
    let timeLeft = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
          .toString()
          .padStart(2, "0"),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24)
          .toString()
          .padStart(2, "0"),
        minutes: Math.floor((difference / 1000 / 60) % 60)
          .toString()
          .padStart(2, "0"),
        seconds: Math.floor((difference / 1000) % 60)
          .toString()
          .padStart(2, "0"),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#1B2B3B] to-[#0F1922] min-h-screen text-white py-16 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover The Long-Term{" "}
            <span className="text-[#FF6B2C]">Weight Management Solution</span>{" "}
            Without{" "}
            <span className="underline decoration-2 decoration-[#FF6B2C]">
              Restrictive Diets, Hard Exercise Or Protein Shakes
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Feel Lighter, Healthier, And More Energized By Using{" "}
            <span className="text-[#FF6B2C] font-semibold">
              Kumbhak Therapy
            </span>{" "}
            Which Addresses The{" "}
            <span className="underline font-semibold">
              Root Cause Of Weight Issues.
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-0">
                <img
                  src="https://lps.avisahealing.com/wp-content/uploads/2024/10/avisa1-1.webp"
                  alt="Kumbhak Yogi - Swamy Srii Rajvibhu"
                  className="w-full h-auto"
                />
              </CardContent>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Calendar, label: "DATE", value: "25th NOV 2024" },
                { icon: Clock, label: "TIME", value: "6 PM" },
                { icon: Globe, label: "LANGUAGE", value: "Hindi & English" },
                { icon: Video, label: "LOCATION", value: "ZOOM" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm"
                >
                  <CardContent className="flex items-center p-4">
                    <div className="bg-[#FF6B2C] p-2 rounded-lg mr-3">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[#FF6B2C]">
                        {item.label}
                      </div>
                      <div className="font-bold text-white">{item.value}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <Card className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#FF6B2C] mb-6">
                  Why Attend This Webinar?
                </h2>
                <ul className="space-y-4">
                  {[
                    "To Learn How Ameda-Shleshma Shuddhi Chikitsa Can Help You Transform Your Body Weight.",
                    "How to avoid short-lived diets, exercise, and medicine without much struggle.",
                    "Start feeling younger, more vibrant, and free of joint pain or physical discomfort.",
                    "Learn how to manage your weight without cutting out your favorite meals and going to GYM.",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-6 w-6 text-[#FF6B2C] mr-2 flex-shrink-0 mt-1" />
                      <span className="text-white text-sm sm:text-base">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-center text-[#FF6B2C]">
                Workshop Starts In:
              </h3>
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {[
                  { label: "Days", value: timeLeft.days },
                  { label: "Hours", value: timeLeft.hours },
                  { label: "Minutes", value: timeLeft.minutes },
                  { label: "Seconds", value: timeLeft.seconds },
                ].map((unit, index) => (
                  <div
                    key={index}
                    className="bg-[#1B2B3B]/50 border border-[#FF6B2C]/30 rounded-lg p-2 sm:p-4 text-center backdrop-blur-sm"
                  >
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#FF6B2C]">
                      {unit.value}
                    </div>
                    <div className="text-xs sm:text-sm text-white">
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Button className="w-full bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold text-lg sm:text-xl py-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
              REGISTER NOW FOR FREE
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </motion.div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
