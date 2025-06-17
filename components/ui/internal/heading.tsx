import React from "react";
import { Text } from "@chakra-ui/react";

interface HeadingProps {
  text: string;
  color: string
}

export default function Heading({ text, color }: HeadingProps) {
  return (
    <Text fontSize="2rem" fontWeight="bold" color={color} textAlign="center">
      {text}
    </Text>
  );
}
