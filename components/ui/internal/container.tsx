import { Flex } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Container({
  children,
  maxWidth = "1200px",
}: ContainerProps) {
  return (
    <Flex justify="center" w="full">
      <Flex flexDirection="column" maxWidth={maxWidth} w="full" gap={4}>
        {children}
      </Flex>
    </Flex>
  );
}
