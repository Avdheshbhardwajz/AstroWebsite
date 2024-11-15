"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Star,
  SendHorizontal,
  Sparkles,
  Calendar,
  User,
  Phone,
  MapPin,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { cn } from "./lib/utils";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    state: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: "", phone: "", city: "", state: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="relative font-poppins bg-gradient-to-br from-[#1B2B3B] to-[#0F1922] min-h-screen text-white py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0ZGNkIyQyIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 bg-[#FF8F6B] rounded-full filter blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-[#FF6B2C]" />
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mx-4">
              Book Your{" "}
              <span className="text-[#FF6B2C] bg-gradient-to-r from-[#FF6B2C] to-[#FF8F6B] bg-clip-text text-transparent">
                Tarot Journey
              </span>
            </h1>
            <Star className="w-6 h-6 text-[#FF6B2C]" />
          </div>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
            Embark on a transformative journey through the ancient wisdom of
            Tarot. Join our exclusive workshop where mystical insights meet
            personal growth.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="bg-[#1B2B3B]/50 backdrop-blur-lg border-[#FF6B2C]/30 shadow-2xl">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      icon: User,
                      type: "text",
                      placeholder: "Enter your full name",
                    },
                    {
                      id: "phone",
                      label: "Contact Number",
                      icon: Phone,
                      type: "tel",
                      placeholder: "Enter your phone number",
                    },
                    {
                      id: "city",
                      label: "City",
                      icon: MapPin,
                      type: "text",
                      placeholder: "Enter your city",
                    },
                    {
                      id: "state",
                      label: "State",
                      icon: MapPin,
                      type: "text",
                      placeholder: "Enter your state",
                    },
                  ].map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label
                        htmlFor={field.id}
                        className="text-white flex items-center gap-2"
                      >
                        <field.icon className="w-4 h-4 text-[#FF6B2C]" />
                        {field.label}
                      </Label>
                      <Input
                        id={field.id}
                        name={field.id}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.id as keyof typeof formData]}
                        onChange={handleChange}
                        required
                        className={cn(
                          "bg-[#1B2B3B]/30 border-[#FF6B2C]/30 text-white",
                          "focus:border-[#FF8F6B] focus:ring-[#FF8F6B]",
                          "placeholder:text-white/50"
                        )}
                      />
                    </div>
                  ))}
                </div>

                <div className="text-center pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "bg-[#FF6B2C] hover:bg-[#FF8F6B]",
                      "text-white font-semibold py-3 px-8",
                      "rounded-full text-lg",
                      "transition duration-300 ease-in-out transform hover:scale-105",
                      "flex items-center justify-center gap-2",
                      "min-w-[200px]",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      "Processing..."
                    ) : (
                      <>
                        Book Now
                        <SendHorizontal className="w-5 h-5 ml-1" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="text-white/70 flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5 text-[#FF6B2C]" />
            Next available session:{" "}
            <span className="font-semibold text-[#FF6B2C]">June 15, 2024</span>
          </p>
        </motion.div>
      </div>

      <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-[#FF6B2C] opacity-50" />
    </section>
  );
};

export default BookingForm;
