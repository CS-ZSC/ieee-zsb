import React from "react";
import { Flex, Stack } from "@chakra-ui/react";

interface CardProps {
  children: React.ReactNode;
  padding?: string | number;
  gap?: string | number;
}

export default function Card({
  children,
  padding = "var(--card-padding)",
  gap = 10,
}: CardProps) {
  return (
    <Flex w="full" h="full">
      <Stack
        w="full"
        align="center"
        justify="center"
        bgColor="card-bg-3"
        color="white"
        border="1px solid"
        borderColor="card-border-3"
        padding={padding}
        rounded="2xl"
        gapY={gap}
      >
        {children}
      </Stack>
    </Flex>
  );
}
