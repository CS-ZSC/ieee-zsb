"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import Events from "@/components/ui/internal/home/events";
import Brief from "@/components/ui/internal/home/brief";
import News from "@/components/ui/internal/home/news";
import { HeroCard } from "@/components/ui/internal/chapters/hero-card";
import PageTitle from "@/components/ui/internal/pageTitle";
import Container from "@/components/ui/internal/container";
import Board from "@/components/ui/internal/about/board/board";

export default function Home() {
  return (
    <PageWrapper>
      <Flex
        flexDirection={"column"}
        paddingBottom={"0px"}
        gap={12}
        pb={12}
      >
        <HeroCard
          colorScheme="primary-1"
          logo="/Images/IEEE/ieee-logo-white.svg"
        />
        <Brief />
        <News />
        <Events />
        <Container>
          <PageTitle title="Executive Board" />
          <Board />
        </Container>
      </Flex>
    </PageWrapper>
  );
}
