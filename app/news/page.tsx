"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { newsData } from "./news";
import { useWindowType } from "@/hooks/use-window-type";
import NewsCard from "./news-card";
import FullNewsCard from "@/app/news/full-news-card";
import NewsDisplayControl from "./display-control/news-display-control";
import Card from "@/components/ui/internal/card";
import { useAtom } from "jotai";
import {
  newsFilterCheckedItemsAtom,
  newsFilterLabelsAtom,
} from "@/atoms/atoms";

export default function Page() {
  const { isDesktop } = useWindowType();
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedItems] = useAtom(newsFilterCheckedItemsAtom);
  const [filterItems] = useAtom(newsFilterLabelsAtom);
  const selectedTags = filterItems.filter((_, index) => checkedItems[index]);

  const filteredNews = newsData.news.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesTag =
      selectedTags.includes("All") ||
      item.tags.some((tag) => selectedTags.includes(tag));

    return matchesSearch && matchesTag;
  });

  useEffect(() => {
    localStorage.setItem("newsCounter", String(filteredNews.length));
  }, [filteredNews]);

  return (
    <PageWrapper>
      <Flex
        flexDirection="column"
        padding="var(--global-spacing)"
        paddingBottom={0}
        gap={"var(--global-spacing)"}
      >
        <Flex flexDirection="column" justifyContent="center">
          <Flex fontWeight="bold" fontSize="3rem" justifyContent="center">
            {newsData.mainTitle}
          </Flex>
          <Text textAlign="center" fontSize="1.3rem">
            {newsData.mainDescription}
          </Text>
        </Flex>

        {/* Highlighted News */}
        <Flex flexDirection={"column"} gap={"var(--global-spacing)"}>
          {newsData.news.map((newsItem) =>
            newsItem.highlightedItem ? (
              isDesktop ? (
                <FullNewsCard key={newsItem.id} newsObject={newsItem} />
              ) : (
                <NewsCard key={newsItem.id} newsObject={newsItem} />
              )
            ) : null
          )}
        </Flex>

        <NewsDisplayControl onSearch={setSearchQuery} />

        {/*Filtered news*/}
        {filteredNews.length > 0 ? (
          <Flex flexDirection="column" gap="var(--global-spacing)">
            <SimpleGrid
              columns={isDesktop ? 2 : 1}
              paddingX={isDesktop ? 20 : "0px"}
              width="full"
              gap="var(--global-spacing)"
            >
              {filteredNews.map((newsItem) => (
                <NewsCard key={newsItem.id} newsObject={newsItem} />
              ))}
            </SimpleGrid>
          </Flex>
        ) : (
          <Card>
            <Text fontSize={"2xl"}>No news Found!</Text>
          </Card>
        )}
      </Flex>
    </PageWrapper>
  );
}
