"use client";

import { motion } from "framer-motion";
import { Package2, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Package2 className="h-8 w-8" />
              <span className="text-2xl font-bold">SwiftCourier</span>
            </div>
            <p className="text-gray-400 mb-6">
              Next-generation courier management platform for modern businesses.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <Facebook className="h-6 w-6" />, href: "#" },
                { icon: <Twitter className="h-6 w-6" />, href: "#" },
                { icon: <Instagram className="h-6 w-6" />, href: "#" },
                { icon: <Linkedin className="h-6 w-6" />, href: "#" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Company
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {["About Us", "Careers", "Press", "Blog"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Resources
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {["Documentation", "Help Center", "API Reference", "Status"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 relative">
              Legal
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"].map((item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href="#" className="text-gray-400 hover:text-white transition-colors inline-flex items-center">
                    <span>{item}</span>
                    <ChevronRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} SwiftCourier. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full transform translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
      </div>
    </footer>
  );
}