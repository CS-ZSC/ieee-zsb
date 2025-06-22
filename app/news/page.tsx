"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { newsData } from "../../components/ui/internal/news/news";
import { useWindowType } from "@/hooks/use-window-type";
import NewsCard from "../../components/ui/internal/news/news-card";
import FullNewsCard from "@/components/ui/internal/news/full-news-card";
import NewsDisplayControl from "@/components/ui/internal/news/display-control/news-display-control";
import Card from "@/components/ui/internal/card";
import { useAtom } from "jotai";
import {
  newsFilterCheckedItemsAtom,
  newsFilterLabelsAtom,
} from "@/atoms/atoms";
import Loading from "../../components/ui/internal/news/loading";
import PageTitle from "@/components/ui/internal/pageTitle";
import AnimatedCard from "@/components/ui/internal/animatedCard";

export default function Page() {
  const { isDesktop } = useWindowType();
  const [searchQuery, setSearchQuery] = useState("");
  const [checkedItems] = useAtom(newsFilterCheckedItemsAtom);
  const [filterItems] = useAtom(newsFilterLabelsAtom);
  const [isMounted, setIsMounted] = useState(false);

  const selectedTags = filterItems.filter((_, index) => checkedItems[index]);

  const filteredNews = newsData.filter((item) => {
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

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <Loading />;

  return (
    <PageWrapper>
      <Flex
        flexDirection="column"
        paddingBottom={0}
        gap={"var(--global-spacing)"}
      >
        <Flex flexDirection="column" justifyContent="center">
          <PageTitle title="News" />
          <AnimatedCard>
            <Text textAlign="center" fontSize="1.3rem">
              Discover the latest news about us!
            </Text>
          </AnimatedCard>
        </Flex>

        {/* Highlighted News */}
        <AnimatedCard>
          <Flex flexDirection={"column"} gap={"var(--global-spacing)"}>
            {newsData.map((newsItem) =>
              newsItem.highlightedItem ? (
                isDesktop ? (
                  <FullNewsCard key={newsItem.id} newsObject={newsItem} />
                ) : (
                  <NewsCard key={newsItem.id} newsObject={newsItem} />
                )
              ) : null
            )}
          </Flex>
        </AnimatedCard>

        <AnimatedCard>
          <NewsDisplayControl onSearch={setSearchQuery} />
        </AnimatedCard>

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
            <Text fontSize={"2xl"} color={"neutral-1"}>
              No news Found!
            </Text>
          </Card>
        )}
      </Flex>
    </PageWrapper>
  );
}
