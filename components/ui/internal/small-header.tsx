"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import HamburgerIcon from "./hamburger-icon";
import SideNavBar from "./side-navbar";
import { useAtom } from "jotai";
import { SmallHeaderAtom } from "../../../atoms";
import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from "./logo";

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

        <Box>
          <Logo />
        </Box>
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
