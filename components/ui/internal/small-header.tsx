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
import { ColorModeButton, useColorModeValue } from "@/components/ui/color-mode";

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
  const glassBackground = useColorModeValue(
    "rgba(255, 255, 255, 0.3)",
    "rgba(0, 0, 0, 0.3)"
  );
  const borderColor = useColorModeValue(
    "rgba(255, 255, 255, 0.2)",
    "rgba(255, 255, 255, 0.1)"
  );

  return (
    <Flex justify={"betwen"} alignItems={"center"} margin={16}>
      <Flex
        p={5}
        w="11/12"
        rounded={"2xl"}
        h={20}
        opacity={"90%"}
        position={"fixed"}
        shadow={"lg"}
        backdropBlur={"xl"}
        boxShadow="lg"
        border="1px"
        borderColor={borderColor}
        backdropFilter="blur(16px)"
        bgColor={glassBackground}
      >
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
