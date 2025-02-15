"use client";

import { motion } from "framer-motion";
import { MapPin, PhoneCall, Mail, ArrowRight, Clock, Globe, ArrowUp, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const officeHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];

const socialLinks = [
  { name: "Facebook", url: "#" },
  { name: "Twitter", url: "#" },
  { name: "LinkedIn", url: "#" },
  { name: "Instagram", url: "#" }
];

export function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
        <div className="absolute right-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tl from-primary/10 to-transparent rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Get in Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about SwiftCourier? Our team is here to help you transform your delivery operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Contact Cards */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Visit Us</h3>
                    <p className="text-gray-600">123 Delivery Street, Logistics City, LC 12345</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <PhoneCall className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-center group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Us</h3>
                    <p className="text-gray-600">contact@swiftcourier.com</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Office Hours</h3>
              </div>
              <div className="space-y-3">
                {officeHours.map((schedule, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex justify-between items-center"
                  >
                    <span className="text-gray-600">{schedule.day}</span>
                    <span className="text-gray-900 font-medium">{schedule.hours}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Global Presence */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Globe className="h-6 w-6 text-primary mr-2" />
                <h3 className="text-lg font-semibold">Global Presence</h3>
              </div>
              <p className="text-gray-600 mb-4">
                With operations in over 50 cities worldwide, we're here to serve you wherever you are.
              </p>
              <div className="flex flex-wrap gap-2">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gray-50 rounded-full text-gray-600 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full transform translate-x-16 -translate-y-16" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full transform -translate-x-16 translate-y-16" />
              
              <form className="space-y-6 relative">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button className="w-full py-6 text-lg group">
                    <span>Send Message</span>
                    <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-500 text-center mt-4">
                  We'll get back to you within 24 hours
                </p>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll to Top Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showScrollTop ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}