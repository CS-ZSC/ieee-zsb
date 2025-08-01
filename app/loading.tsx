"use client";
import { Stack, Text } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
import { MoonLoader } from "react-spinners";

export default function Loading() {
  const indicatorColor = useColorModeValue("black", "white");
  const subTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Stack height="100vh" width="100vw" justify="center" align="center" bg={"primary-1"}>
      <MoonLoader color={indicatorColor} size={50} speedMultiplier={1.2} />
      <Text fontSize="2xl" fontWeight="bold" color={indicatorColor} marginTop={2} textAlign="center">
        IEEE is charging the electrons...
      </Text>
      <Text fontSize="md" color={subTextColor} maxW="sm" textAlign="center">
        Please wait while we align the bits and bytes. Your data is being processed at the speed of light (almost)!
      </Text>
    </Stack>
  );
}
