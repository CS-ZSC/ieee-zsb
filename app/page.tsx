"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import HeroSection from "@/components/ui/internal/home/hero-section";
import Events from "@/components/ui/internal/home/events";
import Brief from "@/components/ui/internal/home/brief";
import News from "@/components/ui/internal/home/news";

export default function Home() {
  return (
    <PageWrapper>
      <Flex
        flexDirection={"column"}
        paddingBottom={"0px"}
        gap={"var(--global-spacing)"}
      >
        <HeroSection />
        <Brief />
        <News />
        <Events />
      </Flex>
    </PageWrapper>
  );
}
