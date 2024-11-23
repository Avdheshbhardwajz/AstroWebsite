import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="relative font-poppins bg-[#001524]  text-white py-16 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <div className="space-y-2 rounded-2xl bg-white/5 p-8 shadow-lg backdrop-blur-sm border border-[#FF6B2C]/30">
          <h1 className="text-2xl font-bold mb-6 text-[#FF6B2C]">
            Privacy Policy
          </h1>

          <section className="space-y-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-gray-200">
                  This site is not a part of the Facebook website / Google Ads /
                  Facebook Inc / Google Inc. Additionally, This site is NOT
                  endorsed by Facebook / Google in any way. FACEBOOK is a
                  trademark of FACEBOOK, Inc. Google Ads is a Trademark of
                  Google Inc.
                </p>
              </div>
            </div>
          </section>

          <footer className="border-t border-[#FF6B2C]/30 pt-6 text-center text-sm text-gray-400">
            Astrowallas © 2024 | All Rights Reserved
          </footer>
        </div>
      </motion.div>

      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
