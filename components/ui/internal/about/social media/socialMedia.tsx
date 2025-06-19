import React from "react";
import Card from "../../card";
import { Flex, Stack } from "@chakra-ui/react";

export default function SocialMedia() {
  return (
    <Flex
      w="fit"
      align="center"
      justify="center"
      alignSelf={"center"}
      bgColor="card-bg-3"
      color="white"
      border="1px solid"
      borderColor="card-border-3"
      rounded="2xl"
      padding={2}
      gap={2}
    >
      <Flex
        bgColor="primary-2"
        border="1px solid"
        borderColor="card-border-3"
        paddingY={"calc(var(--card-padding) * 2)"}
        rounded="xl"
        width={"200px"}
        justifyContent={"center"}
      >
        few
      </Flex>
    </Flex>
  );
}
