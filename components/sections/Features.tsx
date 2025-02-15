"use client";

import { motion } from "framer-motion";
import { Truck, MessageSquare, BarChart2, CheckCircle2, MapPinned, Users, Package, ArrowRight, Box, Scan } from "lucide-react";

const features = [
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Route Optimization",
    description: "AI-powered route planning for maximum efficiency and reduced delivery times"
  },
  {
    icon: <MessageSquare className="h-8 w-8" />,
    title: "Real-time Communication",
    description: "Instant messaging between drivers and dispatch for seamless coordination"
  },
  {
    icon: <BarChart2 className="h-8 w-8" />,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into delivery performance and fleet management"
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Proof of Delivery",
    description: "Digital signature and photo capture capabilities for secure deliveries"
  },
  {
    icon: <MapPinned className="h-8 w-8" />,
    title: "Live GPS Tracking",
    description: "Monitor your fleet in real-time with precision GPS technology"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Customer Portal",
    description: "Self-service tracking and delivery management for your clients"
  }
];



export function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden -mt-48 pt-72">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Powerful Features for Modern Delivery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to manage your delivery operations efficiently
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="feature-card p-8 rounded-xl relative group"
            >
              <div className="icon-container">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
              <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2" />
            </motion.div>
          ))}
        </div>

    
      </div>
    </section>
  );
}