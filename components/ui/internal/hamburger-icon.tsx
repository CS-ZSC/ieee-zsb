"use client";

import React from "react";
import { motion } from "framer-motion";

interface HamburgerIconProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

export default function HamburgerIcon({
  isOpen,
  toggleMenu,
}: HamburgerIconProps) {
  return (
    <button
      className="flex flex-col justify-center items-center w-12 h-12rounded-lg cursor-pointer border-0"
      onClick={toggleMenu}
    >
      <motion.div
        className="h-[3px] bg-black rounded-full mb-1"
        animate={{
          width: isOpen ? 28 : 24,
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 7 : 0,
        }}
      />
      <motion.div
        className="h-[3px] bg-black rounded-full mb-1"
        animate={{
          width: 24,
          opacity: isOpen ? 0 : 1,
        }}
      />
      <motion.div
        className="h-[3px] bg-black rounded-full"
        animate={{
          width: isOpen ? 28 : 24,
          rotate: isOpen ? 45 : 0,
          y: isOpen ? -7 : 0,
        }}
      />
    </button>
  );
}
