"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    city: "",
    state: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Name is required";
    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.contactNumber)) {
      newErrors.contactNumber = "Please enter a valid 10-digit number";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          fullName: "",
          contactNumber: "",
          city: "",
          state: "",
        });
        onClose();
      }, 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="w-full max-w-md"
          >
            <Card className="bg-gradient-to-br font-poppins from-[#1B2B3B] to-[#0F1922] border-[#FF6B2C]/30 shadow-2xl">
              <CardHeader className="relative">
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="absolute right-4 top-4 text-white hover:text-[#FF6B2C] transition-colors"
                >
                  <X size={24} />
                </Button>
                <CardTitle className="text-2xl font-bold text-center text-white">
                  {submitted ? "Thank You!" : "Enter Your Details"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <Sparkles className="w-16 h-16 text-[#FF6B2C] mx-auto mb-4" />
                    <p className="text-white text-lg">
                      Your details have been successfully submitted.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: "fullName", label: "Full Name", type: "text" },
                      {
                        name: "contactNumber",
                        label: "Contact Number",
                        type: "tel",
                      },
                      { name: "city", label: "City", type: "text" },
                      { name: "state", label: "State", type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <Label htmlFor={field.name} className="text-white">
                          {field.label}
                        </Label>
                        <Input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="bg-[#1B2B3B]/50 border-[#FF6B2C]/30 text-white placeholder-white/50 focus:border-[#FF6B2C] focus:ring-[#FF6B2C]"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                        />
                        {errors[field.name] && (
                          <p className="text-[#FF6B2C] text-sm mt-1">
                            {errors[field.name]}
                          </p>
                        )}
                      </div>
                    ))}
                    <Button
                      type="submit"
                      className="w-full bg-[#FF6B2C] hover:bg-[#FF8F6B] text-white transition-colors"
                    >
                      Submit
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;
