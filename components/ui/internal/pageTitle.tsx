"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import AnimatedCard from "./animatedCard";

export default function PageTitle({ title }: { title: string }) {
  return (
    <AnimatedCard>
      <Text fontWeight={"bold"} fontSize={"3rem"} textAlign={"center"}>
        {title}
      </Text>
    </AnimatedCard>
  );
}
