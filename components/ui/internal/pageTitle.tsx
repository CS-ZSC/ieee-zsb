import React from "react";
import { Text } from "@chakra-ui/react";

export default function PageTitle({ title }: { title: string }) {
  return (
    <Text
      fontWeight={"bold"}
      fontSize={"3rem"}
      textAlign={"center"}
    >
      {title}
    </Text>
  );
}