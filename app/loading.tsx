"use client";
import { PacmanLoader } from "react-spinners";
import { Flex } from "@chakra-ui/react"


export default function Loading() {
  return (
    <Flex  bgColor={"red"} justifyContent={"center"} alignItems={"center"}>
      <PacmanLoader color="#000000" size={50} />
    </Flex>
  );
}
