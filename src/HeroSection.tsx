"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Globe, Video, Check, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import heroImage from "/heroImage.jpg";

interface FixedButtonProps {
  openPopup: () => void;
}

export default function HeroSection({
  openPopup,
}: FixedButtonProps): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  const handleButtonClick = () => {
    openPopup();
  };

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
    <section className="relative bg-white min-h-screen text-black py-16 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Turn Your Passion for{" "}
            <span className="text-[#FF6B2C]">
              Astrology into a Profitable Career
            </span>{" "}
            Using{" "}
            <span className="underline decoration-2 decoration-[#FF6B2C]">
              Proven Techniques in Just 2 Days!
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Master the Secrets of Predictive Astrology in Just 2 Days– Join Our
            Free Live Webinar to{" "}
            <span className="text-[#FF6B2C] font-semibold">
              Unlock Personal Growth
            </span>{" "}
            and{" "}
            <span className="underline font-semibold">
              Create a Second Income with Confidence
            </span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="bg-[#F8F8F8] border-[#FF6B2C]/30 overflow-hidden backdrop-blur-sm">
              <CardContent className="p-0">
                <img
                  src={heroImage}
                  alt="Expert Astrology Trainer"
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
                  className="bg-[#062031] border-[#FF6B2C]/30 backdrop-blur-sm"
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
            <Card className="bg-[#062031] border-[#FF6B2C]/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#FF6B2C] mb-6">
                  Why Attend This Webinar?
                </h2>
                <ul className="space-y-4">
                  {[
                    "To Understand planets, houses, and zodiac signs like never before.",
                    "Learn how to read and interpret birth charts to make accurate predictions.",
                    "Turn your passion for astrology into a fulfilling career or a profitable side hustle.",
                    "Get professional guidance with proven strategies by a 12+ years experienced Astrologer",
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
                    className="bg-[#062031] border border-[#FF6B2C]/30 rounded-lg p-2 sm:p-4 text-center backdrop-blur-sm"
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

            <Button
              onClick={handleButtonClick}
              className="w-full bg-[#FF6B2C] hover:bg-[#FF6B2C]/90 text-white font-bold text-lg sm:text-xl py-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
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
