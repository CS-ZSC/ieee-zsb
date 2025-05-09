"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Heading from "@/components/ui/internal/heading";
import { newsData } from "./news";
import { useWindowType } from "@/hooks/use-window-type";
import NewsCard from "./news-card";
import FullNewsCard from "@/app/news/full-news-card";

export default function Page() {
  const { isDesktop } = useWindowType();

  return (
    <PageWrapper>
      <Flex
        flexDirection={"column"}
        padding={"var(--global-spacing)"}
        paddingBottom={0}
        gap={8}
      >
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Heading text={newsData.mainTitle} color="natural-2" />
          <Text textAlign={"center"}>{newsData.mainDescription}</Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"var(--global-spacing)"}>
          {/* Highlighted News */}
          {isDesktop ? (
            <FullNewsCard newsObject={newsData.highlightedNews} />
          ) : (
            <NewsCard newsObject={newsData.highlightedNews} />
          )}
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
