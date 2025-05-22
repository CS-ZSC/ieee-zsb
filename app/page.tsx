"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import HeroSection from "@/components/ui/internal/home/hero-section";
import { Carousel } from "@/components/ui/internal/carousel";
import Events from "@/components/ui/internal/home/events";
import Board from "@/components/ui/internal/board";
import Brief from "@/components/ui/internal/home/brief";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <Flex
        flexDirection={"column"}
        paddingBottom={"0px"}
        gap={"var(--global-spacing)"}
      >
        <Brief />
        <Carousel />
        <Events />
        <Board />
      </Flex>
    </PageWrapper>
  );
}
