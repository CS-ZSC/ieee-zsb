import { Text } from "@chakra-ui/react";
import React from "react";

interface TagProps {
  text: string;
  color?: string;
}

export default function Tag({ text, color = "neutral-1" }: TagProps) {
  return (
    <Text
      fontSize="1rem"
      color={color}
      rounded="2xl"
      border="1px solid"
      borderColor={color}
      padding="0px 12px"
      textAlign="center"
      transition={"all"}
      _hover={{
        backgroundColor: "primary-3",
        borderColor: "primary-3",
        color: "neutral-1",
      }}
    >
      {text}
    </Text>
  );
}
