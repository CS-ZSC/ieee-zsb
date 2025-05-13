"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { newsData } from "./news";
import { useWindowType } from "@/hooks/use-window-type";
import NewsCard from "./news-card";
import FullNewsCard from "@/app/news/full-news-card";
import NewsDisplayControl from "./display-control/news-display-control";

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
          <Flex fontWeight={"bold"} fontSize={"3rem"} justifyContent={"center"}>
            {newsData.mainTitle}
          </Flex>
          <Text textAlign={"center"} fontSize={"1.3rem"}>
            {newsData.mainDescription}
          </Text>
        </Flex>
        <Flex flexDirection={"column"} gap={"var(--global-spacing)"}>
          {/* Highlighted News */}
          {newsData.news.map((newsItem) =>
            newsItem.highlightedItem ? (
              isDesktop ? (
                <FullNewsCard key={newsItem.id} newsObject={newsItem} />
              ) : (
                <NewsCard key={newsItem.id} newsObject={newsItem} />
              )
            ) : null
          )}
          <NewsDisplayControl />
          {/* News Cards */}
          <SimpleGrid
            columns={isDesktop ? 2 : 1}
            paddingX={isDesktop ? 20 : "0px"}
            width={"full"}
            gap={"var(--global-spacing)"}
          >
            {newsData.news.map((newsItem) => (
              <NewsCard key={newsItem.id} newsObject={newsItem} />
            ))}
          </SimpleGrid>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
