"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { Card } from "./components/ui/card";
import { HelpCircle } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "When and where is the workshop and how long would it be?",
      answer:
        "The workshop details, including date, location, and duration, will be provided upon registration. Typically, our workshops are held online and last for 2-3 hours.",
    },
    {
      question: "For whom is this workshop?",
      answer:
        "This workshop is designed for a wide range of participants, including aspiring tarot readers, occult science students, freelancers, housewives, job professionals, and trainers/consultants. Anyone interested in learning about tarot is welcome!",
    },
    {
      question: "I am completely new to tarot, should I join?",
      answer:
        "This workshop is perfect for beginners. We'll cover the basics and provide a solid foundation for your tarot journey.",
    },
    {
      question: "Will I receive a certificate upon completion of the workshop?",
      answer:
        "Yes, all participants who complete the workshop will receive a digital certificate of completion.",
    },
    {
      question: "Will recordings of the workshop be available?",
      answer:
        "We typically do not provide recordings to protect the privacy of participants. However, we'll provide comprehensive materials for your reference after the workshop.",
    },
    {
      question: "When is the workshop scheduled to take place?",
      answer:
        "The exact date and time of the workshop will be communicated to registered participants via email. We offer multiple sessions to accommodate different time zones and schedules.",
    },
    {
      question: "How can I contact you for further questions or inquiries?",
      answer:
        "You can reach out to us through our contact form on the website, or email us directly at support@tarotworkshop.com. We aim to respond to all inquiries within 24-48 hours.",
    },
  ];

  return (
    <section className="relative py-16 bg-gradient-to-br from-[#892b36] to-[#5d1d24] font-poppins overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0YWI3MSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center mb-12 text-[#d4ab71]"
        >
          Frequently Asked Questions
        </motion.h2>
        <Card className="bg-[#892b36]/50 border-[#d4ab71] backdrop-blur-sm shadow-xl  p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                value={`item-${index}`}
                key={index}
                className="border-b border-[#d4ab71]/30 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-[#d4ab71] hover:text-[#f1c889] transition-colors duration-300 py-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center w-full"
                  >
                    <HelpCircle className="w-6 h-6 mr-3 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="text-[#d4ab71] opacity-90 pb-6">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#d4ab71] rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}
