"use client";

import React from "react";
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
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"full"}
          gap={10}
        >
          <Flex
            flexDirection={"column"}
            gap={isDesktop ? 2 : 1}
            justifyContent={"center"}
            maxWidth={"40%"}
            paddingLeft={"calc(var(--global-spacing) * 1.5)"}
          >
            <Flex alignItems={"center"} gap={isDesktop ? 5 : 3}>
              <Text color={"text-5"}>
                {newsObject.dateCreated} - {newsObject.author}
              </Text>
              <Tag text={newsObject.tags[0]} />
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
            <Description description={newsObject.description} lineClamp="8" />
          </Flex>
          <Box
            width="100%"
            maxWidth="60%"
            position="relative"
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
