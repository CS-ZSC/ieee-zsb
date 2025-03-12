"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import HamburgerIcon from "./HamburgerIcon";
import SideNavBar from "./SideNavBar";
import { useAtom } from "jotai";
import { SmallHeaderAtom } from "../../atoms";
import { Flex } from "@chakra-ui/react";

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
    <Flex justify={"center"} alignItems={"center"} margin={16}>
      <Flex p={5} w="11/12" rounded={"2xl"} h={20} opacity={"90%"} position={"fixed"} bgColor={"white"} shadow={"lg"} borderColor="white" backdropBlur={"xl"}>

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
      </Flex>
      <AnimatePresence>
        {isOpen && <SideNavBar toggleRef={toggleRef} />}
      </AnimatePresence>
    </Flex>
  );
}
