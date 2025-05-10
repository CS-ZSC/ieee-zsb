"use client";

import React from "react";
import Heading from "@/components/ui/internal/heading";
import Card from "@/components/ui/internal/card";
import Tag from "@/components/ui/internal/tag";
import type { NewsItem } from "@/app/news/news";
import { Box, Flex, Text } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import { useRouter } from "next/navigation";
import Description from "./description";

type Props = {
  newsObject: NewsItem;
};

export default function FullNewsCard({ newsObject }: Props) {
  const { isDesktop } = useWindowType();
  const router = useRouter();
  return (
    <Flex
      width={"full"}
      cursor={"pointer"}
      onClick={() => router.push(`/news/${newsObject.id}`)}
      _hover={{ transform: "scale(0.98)" }}
      transition="all 0.2s ease-in-out"
    >
      <Card>
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
                {newsObject.dateCreated} - {newsObject.author}
              </Text>
              <Tag text={newsObject.tags[0]} />
              <Tag text={newsObject.tags[1]} />
            </Flex>
            <Flex>
              <Heading text={newsObject.title} color={"text-2"}></Heading>
            </Flex>
            <Description description={newsObject.description} />
          </Flex>
          <Box
            width={"700px"}
            h="full"
            position={"relative"}
            bgImage={`url(${newsObject.mainPhoto})`}
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
  );
}
