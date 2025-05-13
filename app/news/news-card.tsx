"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useWindowType } from "@/hooks/use-window-type";
import type { NewsItem } from "@/app/news/news";
import Tag from "@/components/ui/internal/tag";
import { useRouter } from "next/navigation";
import Description from "./description";

type Props = {
  newsObject: NewsItem;
};

export default function NewsCard({ newsObject }: Props) {
  const { isDesktop } = useWindowType();
  const router = useRouter();

  return (
    <Flex
      onClick={() => router.push(`/news/${newsObject.id}`)}
      cursor={"pointer"}
      _hover={{ transform: "scale(0.98)" }}
      transition="all 0.2s ease-in-out"
      flexDirection={"column"}
      width="full"
      alignItems={"center"}
      bgColor={"card-bg-3"}
      color={"white"}
      border="1px solid"
      borderColor="card-border-3"
      rounded={"2xl"}
    >
      <Box
        width="full"
        position={"relative"}
        bgImage={`url(${newsObject.mainPhoto})`}
        bgSize="cover"
        roundedTop="2xl"
        borderBottom="1px solid"
        borderColor="card-border-1"
        style={{
          aspectRatio: "16/9",
        }}
      />
      <Flex
        flexDirection={"column"}
        gap={isDesktop ? 2 : 1}
        justifyContent={"center"}
        padding={"calc(var(--card-padding) * 1.1)"}
      >
        <Flex alignItems={"center"} gap={isDesktop ? 5 : 3}>
          <Text color={"text-5"}>
            {newsObject.dateCreated} - {newsObject.author}
          </Text>
          <Flex flexWrap={"wrap"} gap={2}>
            <Tag text={newsObject.tags[0]} />
            {/* <Tag text={newsObject.tags[1]} /> */}
          </Flex>
        </Flex>
        <Flex>
          <Text
            fontSize="2rem"
            fontWeight="bold"
            color={"text-2"}
            textAlign="left"
          >
            {newsObject.title}
          </Text>
        </Flex>
        <Description
          color={"text-2"}
          lineClamp={isDesktop ? "4" : "8"}
          maxWidth="auto"
          description={newsObject.description}
        ></Description>
      </Flex>
    </Flex>
  );
}
