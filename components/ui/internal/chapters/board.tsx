"use client";

import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import PositionCard from "../positionCard";
import AnimatedCard from "../animatedCard";

export default function Board({ board }: { board: PositionCard[] }) {
  const { isDesktop } = useWindowType();

  return (
    <SimpleGrid
      gap={4}
      w="full"
      h="full"
      columns={isDesktop ? 2 : 1}
    >
      {board.map((position, index) => (
        <AnimatedCard key={index}>
          <PositionCard position={position} />
        </AnimatedCard>
      ))}
    </SimpleGrid>
  );
}

