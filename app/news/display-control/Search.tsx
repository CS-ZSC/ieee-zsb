import React from "react";
import { Input } from "@chakra-ui/react";
// import VerticalDivider from "../vertical-divider";

export default function Search() {
  return (
    // <Flex>
    <Input
      placeholder="Search"
      width="full"
      color={"text-4"}
      outline={"none"}
      border="1px solid"
      borderColor="card-border-3"
      padding="calc(var(--card-padding) / 1.5)"
      rounded={"xl"}
      fontSize={"lg"}
    />
    // </Flex>
  );
}
