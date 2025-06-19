import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import React from "react";
import PageTitle from "@/components/ui/internal/pageTitle";
import Container from "@/components/ui/internal/about/container";
import About from "@/components/ui/internal/about/about";
import Faq from "@/components/ui/internal/about/faq/faq";
import Board from "@/components/ui/internal/about/board/board";
import SocialMedia from "@/components/ui/internal/about/social media/socialMedia";

export default function page() {
  return (
    <PageWrapper>
      <Flex flexDirection={"column"} gap={12}>
        <Container>
          <PageTitle title="About us" />
          <About />
        </Container>
        <Container>
          <PageTitle title="FAQ" />
          <Faq />
        </Container>
        <Container>
          <PageTitle title="Board" />
          <Board />
        </Container>
        <Container>
          <PageTitle title="Connect with us on social media" />
          <SocialMedia />
        </Container>
      </Flex>
    </PageWrapper>
  );
}
