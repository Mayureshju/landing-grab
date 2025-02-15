"use client";

import { motion } from "framer-motion";
import { Package, Truck, MapPin, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: <Package className="h-8 w-8" />,
    title: "Package Collection",
    description: "We collect your package from your specified location with care and precision",
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    icon: <Truck className="h-8 w-8" />,
    title: "Transportation",
    description: "Your package is transported through our optimized delivery network",
    color: "from-indigo-500/20 to-indigo-600/20"
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Route Optimization",
    description: "AI algorithms determine the fastest and most efficient delivery route",
    color: "from-violet-500/20 to-violet-600/20"
  },
  {
    icon: <CheckCircle className="h-8 w-8" />,
    title: "Safe Delivery",
    description: "Package is safely delivered to the destination with real-time confirmation",
    color: "from-purple-500/20 to-purple-600/20"
  }
];

export function DeliverySteps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative top divider */}
      <div className="absolute top-0 left-0 right-0">
        <svg className="w-full h-24 fill-current text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined delivery process ensures your packages reach their destination safely and efficiently
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform -translate-y-1/2 hidden md:block" />
          <div className="absolute top-1/2 left-0 w-full hidden md:block">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left"
            />
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative h-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02, translateY: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl p-8 text-center shadow-lg relative z-10 h-full flex flex-col justify-between border border-gray-100 backdrop-blur-sm"
                  style={{
                    background: "rgba(255, 255, 255, 0.9)",
                    minHeight: "320px"
                  }}
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 relative transform hover:rotate-6 transition-transform duration-300`}
                    >
                      <div className="text-primary">{step.icon}</div>
                      <div className="absolute -right-2 -top-2 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                    className="w-12 h-1 bg-gradient-to-r from-primary to-primary/50 mx-auto mt-6 rounded-full"
                  />
                </motion.div>

                {/* Mobile connection line */}
                {index < steps.length - 1 && (
                  <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/50 mx-auto my-4 md:hidden" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-0 top-1/4 w-64 h-64 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full transform -translate-x-1/2 blur-xl" />
          <div className="absolute right-0 bottom-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-full transform translate-x-1/2 blur-xl" />
        </div>
      </div>

      {/* Decorative bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 transform rotate-180">
        <svg className="w-full h-24 fill-current text-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}