import React from "react";
import { Input } from "@chakra-ui/react";
// import VerticalDivider from "../vertical-divider";

export default function Search() {
  return (
    // <Flex>
    <Input
      placeholder="Search"
      _placeholder={{ color: "text-5" }}
      width="full"
      outline={"none"}
      border="none"
      fontSize={"1.2rem"}
      // color={"text-5"}
      padding={0}
    />
    // </Flex>
  );
}
