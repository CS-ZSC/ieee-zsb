import React from "react";
import { Flex } from "@chakra-ui/react";

export default function loading() {
  return (
    <Flex
      width={"full"}
      height={"100vh"}
      justifyContent={"center"}
      alignItems={"center"}
      fontSize={"3xl"}
    >
      Loading News
    </Flex>
  );
}
