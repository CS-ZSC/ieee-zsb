"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import Events from "@/components/ui/internal/home/events";
import Brief from "@/components/ui/internal/home/brief";
import News from "@/components/ui/internal/home/news";
import { HeroCard } from "@/components/ui/internal/chapters/hero-card";

export default function Home() {
  return (
    <PageWrapper>
      <Flex
        flexDirection={"column"}
        paddingBottom={"0px"}
        gap={"var(--global-spacing)"}
      >
        <HeroCard
          colorScheme="primary-1"
          logo="/Images/IEEE/ieee-logo-white.svg"
        />
        <Brief />
        <News />
        <Events />
      </Flex>
    </PageWrapper>
  );
}
