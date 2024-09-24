"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="flex justify-between items-center px-8 py-20 border-2 border-black">
      <div>
        <div className="max-w-lg text-center">
          <h1 className="text-8xl font-bold leading-tight">
            <span className="text-Black">GO </span>
            <span className="text-Red">LIVE </span>
            <span className="text-Black">NOW</span>
          </h1>
        </div>
        <div className="flex justify-center items-center relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-600">
              Join Us For Engaging Live Streams, Exclusive Offers, And
              Personalized Shopping Experiences.
            </p>
            <button className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 mt-4">
              Watch & Buy
            </button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-96 ml-8"
          >
            <img
              src="/images/hero-image.png"
              alt="Live stream"
              className="rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="absolute right-8 text-right text-gray-500 space-y-2"
          >
            <div>99.99% UPTIME</div>
            <div>24/7 SUPPORT</div>
            <div>0% Downtime</div>
            <div>300ms Ultra-low latency</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
