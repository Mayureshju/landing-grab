"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Package2, ChevronRight, Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navClass = isScrolled
    ? "sticky-nav scrolled text-gray-900"
    : "bg-transparent text-white";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package2 className={`h-8 w-8 ${isScrolled ? 'text-primary' : 'text-white'}`} />
            <span className="text-2xl font-bold">Grab</span>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <Button variant={isScrolled ? "outline" : "secondary"}>Track Package</Button>
            <Button variant={isScrolled ? "default" : "outline"} className={isScrolled ? "" : "bg-white/10 hover:bg-white/20 border-white/20"}>
              Dashboard
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <motion.div
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          variants={{
            visible: { opacity: 1, height: "auto", marginTop: "1rem" },
            hidden: { opacity: 0, height: 0, marginTop: 0 }
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden overflow-hidden"
        >
          <div className={`flex flex-col space-y-4 pt-4 pb-6 rounded-lg mt-2 ${
            isScrolled 
              ? 'bg-white shadow-lg' 
              : 'bg-primary/95 backdrop-blur-md'
          }`}>
            <a href="#features" className="hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/10">Features</a>
            <a href="#testimonials" className="hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/10">Testimonials</a>
            <a href="#contact" className="hover:text-primary transition-colors px-4 py-2 rounded-lg hover:bg-white/10">Contact</a>
            <div className="px-4">
              <Button variant="secondary" className="w-full justify-center">Track Package</Button>
            </div>
            <div className="px-4">
              <Button variant="outline" className="w-full justify-center bg-white/10 hover:bg-white/20 border-white/20">
                Dashboard
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
}