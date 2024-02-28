// ScrollToTop.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

const THRESHOLD = 300; // Minimum scroll threshold in pixels

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    setIsVisible(window.scrollY > THRESHOLD);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Ensure cleanup on unmount to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 right-5"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.2s ease-in-out",
      }}
    >
      <button
        className="bg-purple border-purple p-3 text-white rounded-lg"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Scroll To Top"
      >
        <ArrowUp />
      </button>
    </motion.div>
  );
}
