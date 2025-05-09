"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Heading from "@/components/ui/internal/heading";
import { newsData } from "./news";
import Card from "@/components/ui/internal/card";
import { useWindowType } from "@/hooks/use-window-type";
import Tag from "@/components/ui/internal/tag";

export default function Page() {
  const { isDesktop } = useWindowType();

  return (
    <PageWrapper>
      <Flex flexDirection={"column"} padding={"var(--global-spacing)"} gap={8}>
        <Flex flexDirection={"column"} justifyContent={"center"}>
          <Heading text={newsData.mainTitle} color="natural-2" />
          <Text textAlign={"center"}>{newsData.mainDescription}</Text>
        </Flex>
        <Flex>
          <Card>
            {/* Highlighted News */}
            <Flex
              flexDirection={isDesktop ? "row" : "column"}
              justifyContent={"space-between"}
              width={"full"}
              gap={10}
            >
              <Flex
                flexDirection={"column"}
                gap={isDesktop ? 2 : 1}
                justifyContent={"center"}
                maxWidth={"50%"}
                paddingLeft={"calc(var(--global-spacing) * 1.5)"}
              >
                <Flex alignItems={"center"} gap={isDesktop ? 5 : 3}>
                  <Text color={"text-5"}>
                    {newsData.highlightedNews.dateCreated}
                  </Text>
                  <Tag text={newsData.highlightedNews.tags[0]} />
                  <Tag text={newsData.highlightedNews.tags[1]} />
                </Flex>
                <Flex>
                  <Heading
                    text={newsData.highlightedNews.title}
                    color={"text-2"}
                  ></Heading>
                </Flex>
                <Text fontSize={"lg"} fontWeight={"light"} color={"text-2"} lineHeight={"1.8"}>
                  {newsData.highlightedNews.description}
                </Text>
              </Flex>
              <Box
                // w={"calc(50% + 8px)"}
                // maxHeight= "500px"
                width={"700px"}
                h="full"
                position={"relative"}
                bgImage={`url(${newsData.highlightedNews.mainPhoto})`}
                bgSize="cover"
                rounded="2xl"
                border="1px solid"
                borderColor="card-border-1"
                style={{
                  aspectRatio: "16/9",
                }}
              />
            </Flex>
          </Card>
        </Flex>
      </Flex>
    </PageWrapper>
  );
}
