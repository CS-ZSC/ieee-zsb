import React from "react";
import { Flex } from "@chakra-ui/react";
import { ClipLoader } from "react-spinners";

export default function loading() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
      <Flex
        height={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"3xl"}
      >
        Loading News
      </Flex>

      <ClipLoader color="var(--main-identity-color)" size={40} />
    </Flex>
  );
}
