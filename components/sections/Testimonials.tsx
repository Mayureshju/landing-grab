"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Logistics Manager",
    company: "Global Express",
    content: "SwiftCourier has transformed our delivery operations. The real-time tracking and route optimization have reduced our delivery times by 35%.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Operations Director",
    company: "FastTrack Logistics",
    content: "The analytics dashboard provides invaluable insights that have helped us optimize our entire delivery fleet operations.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "CEO",
    company: "Swift Deliveries",
    content: "Customer satisfaction has increased dramatically since implementing SwiftCourier. The real-time tracking feature is a game-changer.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  },
  {
    name: "David Wilson",
    role: "Fleet Manager",
    company: "Prime Logistics",
    content: "The integration was seamless, and the support team was exceptional. Our delivery efficiency has improved significantly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
    rating: 5
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => (prev + newDirection + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Decorative wave transition */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-0 right-0 transform -translate-y-1/2"
      >
        <svg className="w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            fill="currentColor"
            className="text-white"
          ></path>
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what our customers have to say about SwiftCourier
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid grid-cols-3 gap-8 mb-12">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-xl relative backdrop-blur-sm border border-gray-100"
            >
              <Quote className="absolute text-gray-100 w-24 h-24 -top-4 -left-4 transform -rotate-12 z-0" />
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                      <motion.img
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <motion.div 
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 180 }}
                      className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1.5"
                    >
                      <Quote className="w-3 h-3" />
                    </motion.div>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    <p className="text-primary text-sm font-medium">{testimonial.company}</p>
                  </div>
                </div>
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="flex mb-4"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </motion.div>
                <p className="text-gray-700 leading-relaxed">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile/Tablet Carousel View */}
        <div className="lg:hidden relative">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white rounded-2xl p-8 shadow-xl relative backdrop-blur-sm border border-gray-100"
          >
            <Quote className="absolute text-gray-100 w-24 h-24 -top-4 -left-4 transform -rotate-12 z-0" />
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                    <motion.img
                      initial={{ scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <motion.div 
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 180 }}
                    className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-1.5"
                  >
                    <Quote className="w-3 h-3" />
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-600 text-sm">{testimonials[currentIndex].role}</p>
                  <p className="text-primary text-sm font-medium">{testimonials[currentIndex].company}</p>
                </div>
              </div>
              <motion.div 
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="flex mb-4"
              >
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </motion.div>
              <p className="text-gray-700 leading-relaxed">{testimonials[currentIndex].content}</p>
            </div>
          </motion.div>

          {/* Navigation buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between items-center px-4">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-white/80 backdrop-blur-sm shadow-lg hover:bg-white"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setAutoplay(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave transition */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-0 right-0 transform rotate-180"
      >
        <svg className="w-full h-24" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            fill="currentColor"
            className="text-white"
          ></path>
        </svg>
      </motion.div>
    </section>
  );
}