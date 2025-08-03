"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

const GoToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY && currentScrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      position="fixed"
      bottom="1.5rem"
      right="1.5rem"
      size="lg"
      colorScheme="blue"
      borderRadius="full"
      boxShadow="lg"
      zIndex={50}
      opacity={isVisible ? 1 : 0}
      transform={isVisible ? "translateY(0)" : "translateY(10px)"}
      pointerEvents={isVisible ? "auto" : "none"}
      transition="all 0.3s ease-in-out"
      p={0}
      bgColor={"primary-1"}
    >
      <Icon
        icon="majesticons:arrow-up"
        width={30}
        height={30}
        color="white"
      />
    </Button>
  );
};

export default GoToTopButton;
