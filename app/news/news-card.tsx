"use client";

import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useWindowType } from "@/hooks/use-window-type";
import type { NewsItem } from "@/app/news/news";
import Tag from "@/components/ui/internal/tag";
import Heading from "@/components/ui/internal/heading";
import { useRouter } from "next/navigation";

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
      align={"center"}
      justify={"center"}
      bgColor={"card-bg-3"}
      color={"white"}
      border="1px solid"
      borderColor="card-border-3"
      rounded={"2xl"}
    >
      <Box
        width="full"
        height="full"
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
        padding={"calc(var(--global-spacing) * 3)"}
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
          <Heading text={newsObject.title} color={"text-2"}></Heading>
        </Flex>
        <Text
          fontSize={"lg"}
          fontWeight={"light"}
          color={"text-2"}
          lineHeight={"1.8"}
          lineClamp={8}
          textOverflow={"ellipsis"}
        >
          {newsObject.description}
        </Text>
      </Flex>
    </Flex>
  );
}
