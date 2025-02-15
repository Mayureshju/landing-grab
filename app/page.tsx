

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { DeliverySteps } from "@/components/sections/DeliverySteps";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <DeliverySteps />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}