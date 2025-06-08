import { Text } from "@chakra-ui/react";
import React from "react";

interface TagProps {
  text: string;
}

export default function Tag({ text }: TagProps) {
  return (
    <Text
      fontSize="1rem"
      color="text-4"
      rounded="2xl"
      borderColor="text-4"
      border="1px solid"
      padding="0px 12px"
      textAlign="center"
      transition={"all"}
      _hover={{ backgroundColor: "white", color: "var(--main-identity-color)" }}
    >
      {text}
    </Text>
  );
}
