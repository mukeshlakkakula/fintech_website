"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/layout/Header";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full h-auto min-h-[90vh] md:h-[95vh] md:p-6 md:pb-0 bg-background">
      <div className="relative w-full h-full md:rounded-[3rem] overflow-hidden bg-black shadow-2xl flex flex-col">
        {/* Header inside the rounded container */}
        <Header isOverDark={true} />

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-brand/10 to-transparent pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand/5 rounded-full blur-3xl pointer-events-none" />

        {/* Content Container */}
        <div className="relative z-20 flex-1 flex flex-col md:flex-row items-center justify-center px-6 md:px-20 pt-32 pb-20 md:pt-20 md:pb-0">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-6xl lg:text-6xl font-heading font-bold text-[#ffffff] leading-[1.1] tracking-tight text-balance">
                Elite FinTech &
                <br />
                <span className="text-highlight">Wealth Advisory</span>
              </h1>

              <div className="mt-10 md:mt-20">
                <Link
                  href="/consultation"
                  className="btn-primary md:px-10 md:py-5 md:text-base group"
                >
                  Free Consultation
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Floating Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-16 md:mt-0 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-full max-w-[500px] aspect-square md:aspect-auto md:h-[70vh]"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full relative"
              >
                <Image
                  src="/assets/bgremove_hero_img.png"
                  alt="FinTech Hero Image"
                  fill
                  className="object-contain drop-shadow-[0_20px_50px_rgba(0,102,255,0.3)]"
                  priority
                />
              </motion.div>

              {/* Decorative circles behind image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand/5 rounded-full blur-3xl -z-10 animate-pulse" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
