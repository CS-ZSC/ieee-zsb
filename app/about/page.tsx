import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import React from "react";
import PageTitle from "@/components/ui/internal/pageTitle";
import About from "@/components/ui/internal/about/about";
import Container from "@/components/ui/internal/about/container";
import Faq from "@/components/ui/internal/about/faq/faq";
import Board from "@/components/ui/internal/about/board/board";

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
        <Flex flexDirection={"column"} gap={4}>
          <PageTitle title="Board" />
          <Board />
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
