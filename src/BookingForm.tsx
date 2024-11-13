"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, SendHorizontal, Sparkles } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardContent, CardHeader } from "./components/ui/card";
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
    <section className="relative font-poppins bg-gradient-to-br from-[#892b36] to-[#5d1d24] min-h-screen text-[#d4ab71] py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YWI3MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30" />

      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20"
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
        className="absolute bottom-20 left-20 w-32 h-32 bg-[#f1c889] rounded-full filter blur-3xl opacity-20"
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

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-[#f1c889]" />
            <h1 className="text-3xl md:text-4xl font-bold text-[#d4ab71] mx-4">
              Book Your Tarot Journey
            </h1>
            <Star className="w-6 h-6 text-[#f1c889]" />
          </div>
          <p className="text-lg text-[#d4ab71] max-w-2xl mx-auto opacity-90">
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
          <Card className="bg-[#892b36]/50 backdrop-blur-lg border-[#d4ab71]/30 shadow-2xl">
            <CardHeader className="text-center pb-4">
              <h2 className="text-xl font-semibold text-[#f1c889]">
                Reserve Your Spot
              </h2>
              <p className="text-sm text-[#d4ab71] opacity-80">
                Fill in your details below to secure your session
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      id: "name",
                      label: "Full Name",
                      type: "text",
                      placeholder: "Enter your full name",
                    },
                    {
                      id: "phone",
                      label: "Contact Number",
                      type: "tel",
                      placeholder: "Enter your phone number",
                    },
                    {
                      id: "city",
                      label: "City",
                      type: "text",
                      placeholder: "Enter your city",
                    },
                    {
                      id: "state",
                      label: "State",
                      type: "text",
                      placeholder: "Enter your state",
                    },
                  ].map((field) => (
                    <div key={field.id} className="space-y-2">
                      <Label htmlFor={field.id} className="text-[#d4ab71]">
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
                          "bg-[#892b36]/30 border-[#d4ab71]/30 text-[#d4ab71]",
                          "focus:border-[#f1c889] focus:ring-[#f1c889]",
                          "placeholder:text-[#d4ab71]/50"
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
                      "bg-gradient-to-r from-[#d4ab71] to-[#f1c889]",
                      "hover:from-[#c39a60] hover:to-[#e0b778]",
                      "text-[#892b36] font-semibold py-2 px-8",
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
      </div>

      <Sparkles className="absolute bottom-4 right-4 w-6 h-6 text-[#f1c889] opacity-50" />
    </section>
  );
};

export default BookingForm;
