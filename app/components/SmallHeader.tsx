"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon";
import SideNavBar from "./SideNavBar";
import { useAtom } from "jotai";
import { SmallHeaderAtom } from "../../atoms";

export default function SmallHeader() {
  const [isOpen, setIsOpen] = useAtom(SmallHeaderAtom);
  const toggleRef = useRef<HTMLDivElement | null>(null);

  function toggleMenu() {
    setIsOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem("SmallHeaderAtom", newValue.toString());
      return newValue;
    });
  }

  return (
    <div className="flex justify-center items-center mt-16">
      <div className="p-5 w-11/12 flex flex-row justify-between items-center rounded-2xl bg-opacity-85 h-20 fixed bg-white shadow-lg border border-white/20 bg-white/30 backdrop-blur-lg">
        <Link href="/">
          <Image
            className="hover:opacity-90 transition-all duration-200 ease-in-out"
            src="/Images/IEEE/IEEE Black.png"
            alt="IEEE Logo"
            width={85}
            height={50}
          />
        </Link>
        {/* Wrap HamburgerIcon with a div that has the toggleRef */}
        <div ref={toggleRef}>
          <HamburgerIcon isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
      <AnimatePresence>
        {isOpen && <SideNavBar toggleRef={toggleRef} />}
      </AnimatePresence>
    </div>
  );
}
