import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="relative bg-white min-h-screen text-black py-16 px-4 overflow-hidden font-poppins">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MiIgaGVpZ2h0PSI1MiI+CjxwYXRoIGQ9Ik0yNiAwIEwzOSAyNiBMMjYgNTIgTDEzIDI2IFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiIHN0cm9rZS13aWR0aD0iMiI+PC9wYXRoPgo8L3N2Zz4=')] opacity-10" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center">
          Privacy <span className="text-[#FF6B2C]">Policy</span>
        </h1>

        <div className="space-y-8 rounded-2xl bg-[#F8F8F8] p-8 shadow-lg backdrop-blur-sm border border-[#FF6B2C]/30">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">
              Privacy Policy for Astrowallas
            </h2>
            <p className="text-gray-700">Last updated: 2024</p>

            <div className="space-y-4">
              <p className="text-gray-700">
                At Astrowallas, we take your privacy seriously. This Privacy
                Policy outlines how we collect, use, and protect your personal
                information when you use our services.
              </p>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#FF6B2C]">
                  Information We Collect
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>
                    Personal identification information (Name, email address,
                    phone number)
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#FF6B2C]">
                  How We Use Your Information
                </h3>
                <ul className="list-inside list-disc space-y-2 text-gray-700">
                  <li>To provide astrological services</li>
                  <li>To send you updates about our services</li>
                  <li>To improve our website and services</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#FF6B2C]">
                  Third-Party Disclaimer
                </h3>
                <p className="text-gray-700">
                  This site is not a part of the Facebook website / Google Ads /
                  Facebook Inc / Google Inc. Additionally, This site is NOT
                  endorsed by Facebook / Google in any way. FACEBOOK is a
                  trademark of FACEBOOK, Inc. Google Ads is a Trademark of
                  Google Inc.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-[#FF6B2C]">
                  Contact Us
                </h3>
                <p className="text-gray-700">
                  If you have any questions about this Privacy Policy, please
                  contact us.
                </p>
              </div>
            </div>
          </section>

          <footer className="border-t border-[#FF6B2C]/30 pt-6 text-center text-sm text-gray-600">
            Astrowallas © 2024 | All Rights Reserved
          </footer>
        </div>
      </motion.div>
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#FF6B2C] rounded-full filter blur-3xl opacity-20 animate-pulse" />
    </section>
  );
}
