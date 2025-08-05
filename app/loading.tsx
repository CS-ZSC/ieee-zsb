"use client";

import { Stack, Text } from "@chakra-ui/react";
import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <Stack
      height="80vh"
      width="full"
      justify="center"
      align="center"
      bg={"primary-1"}
      color={"white"}
      borderRadius={"3xl"}
    >
      <MoonLoader color={"white"} size={50} speedMultiplier={1.2} />
      <Text fontSize="2xl" fontWeight="bold" marginTop={2} textAlign="center">
        IEEE is charging the electrons...
      </Text>
      <Text fontSize="md" color={"whitesmoke"} maxW="sm" textAlign="center">
        Please wait while we align the bits and bytes. Your data is being
        processed at the speed of light (almost)!
      </Text>
    </Stack>
  );
}
