"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Timer, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "./components/ui/button";

interface FixedButtonProps {
  openPopup: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
}

const FixedButton = ({ openPopup }: FixedButtonProps): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft());
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  function getTimeLeft(): TimeLeft {
    const expiryDate = new Date("2024-11-10T23:59:59");
    const now = new Date();
    const difference = expiryDate.getTime() - now.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      return { days, hours, minutes };
    }
    return { days: 0, hours: 0, minutes: 0 };
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const handleButtonClick = () => {
    openPopup();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50"
        >
          <div className="bg-gradient-to-t from-white to-gray-100 backdrop-blur-md border-t border-[#FF6B2C]/20 p-4 shadow-lg font-poppins">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center bg-[#1B2B3B]/50 p-2 rounded-lg border border-[#FF6B2C]/30"
                  >
                    <Timer className="text-[#FF6B2C] w-5 h-5 mr-2" />
                    <span className="text-white font-medium">
                      Offer expires in:{" "}
                      <motion.span
                        key={`${timeLeft.days}${timeLeft.hours}${timeLeft.minutes}`}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 25,
                        }}
                        className="text-[#FF6B2C]"
                      >
                        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                      </motion.span>
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="hidden sm:flex items-center"
                  >
                    <span className="text-2xl font-bold text-[#FF6B2C]">
                      FREE
                    </span>
                    <span className="ml-2 text-lg line-through text-white/70">
                      ₹199
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    className="w-full sm:w-auto bg-[#FF6B2C] hover:bg-[#FF8F6B] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-[#FF6B2C]/50 flex items-center justify-center gap-2 group"
                    onClick={handleButtonClick}
                  >
                    <Sparkles className="w-5 h-5" />
                    Register Now
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FixedButton;
