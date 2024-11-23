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
    name: "",
    phone: "",
    city: "",
    state: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const whatsappGroupLink = "https://chat.whatsapp.com/BNIzWg3NLVI9GbLNHF9XDU";

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Contact number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit number";
    }
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();

    // Reset submission state
    setSubmitted(false);
    setSubmitMessage("");

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbwhK2Znwu2Z5HkKEzgwpkK7F8Eafy0rxSv9cFoP-ptnlykOvUn9WSTfypNlEhmy3EnQiQ/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        // Since we're using no-cors, we can't access the response content
        // We'll assume it's successful if the request doesn't throw an error
        setSubmitted(true);
        setSubmitMessage("Form submitted successfully!");

        // We don't reset the form or close the popup immediately anymore
      } catch (error) {
        console.error("Error submitting the form:", error);
        setSubmitMessage("An error occurred. Please try again.");
        setSubmitted(false);
      }

      setIsSubmitting(false);
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
            <Card className="bg-gradient-to-br font-poppins from-white to-gray-100 border-[#FF6B2C]/30 shadow-2xl">
              <CardHeader className="relative">
                <Button
                  onClick={onClose}
                  variant="ghost"
                  className="absolute right-4 top-4 text-black hover:text-[#FF6B2C] transition-colors"
                >
                  <X size={24} />
                </Button>
                <CardTitle className="text-2xl font-bold text-center text-black">
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
                    <p className="text-black text-lg mb-4">
                      Your details have been successfully submitted.
                    </p>
                    <p className="text-black text-lg mb-4">
                      Join our WhatsApp group for further updates:
                    </p>
                    <a
                      href={whatsappGroupLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white transition-colors">
                        Join WhatsApp Group
                      </Button>
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {[
                      { name: "name", label: "Name", type: "text" },
                      {
                        name: "phone",
                        label: "Phone",
                        type: "tel",
                      },
                      { name: "city", label: "City", type: "text" },
                      { name: "state", label: "State", type: "text" },
                    ].map((field) => (
                      <div key={field.name}>
                        <Label htmlFor={field.name} className="text-black">
                          {field.label}
                        </Label>
                        <Input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          value={formData[field.name as keyof typeof formData]}
                          onChange={handleChange}
                          className="border-[#FF6B2C]/30 text-black placeholder-white focus:border-[#FF6B2C] focus:ring-[#FF6B2C]"
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
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                    {submitMessage && (
                      <p className="text-center text-sm text-[#FF6B2C]">
                        {submitMessage}
                      </p>
                    )}
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
