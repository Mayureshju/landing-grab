"use client";

import { motion } from "framer-motion";
import { ArrowRight, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeliveryAnimation } from "@/components/animations/DeliveryAnimation";

const stats = [
  { number: "10M+", label: "Packages Delivered" },
  { number: "98%", label: "On-Time Delivery" },
  { number: "50+", label: "Cities Covered" },
  { number: "24/7", label: "Customer Support" }
];

export function Hero() {
  return (
    <div className="relative">
      {/* Gradient background wrapper */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-white pointer-events-none" style={{ height: "150%" }} />

      <header className="relative text-white min-h-screen">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 pt-32 flex flex-col justify-between min-h-screen">
          <div className="container mx-auto px-4 sm:px-6 flex-grow flex items-center">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
                  Next-Gen Courier Management Platform
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-white/90">
                  Revolutionize your delivery operations with our advanced courier management system. Track, manage, and optimize your deliveries in real-time.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                  <Button size="lg" variant="secondary" className="text-primary w-full sm:w-auto group">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20 w-full sm:w-auto">
                    View Dashboard Demo
                  </Button>
                </div>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="glass-card p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300"
                    >
                      <div className="text-3xl font-bold mb-1">{stat.number}</div>
                      <div className="text-sm text-white/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="hidden lg:block relative h-[600px]"
              >
                <div className="absolute inset-0">
                  <DeliveryAnimation />
                </div>
              </motion.div>
            </div>
          </div>

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 max-w-7xl mx-auto">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 5,
                    delay: i * 0.5,
                    repeat: Infinity,
                  }}
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                >
                  <Box className="text-white/10 w-12 h-12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}