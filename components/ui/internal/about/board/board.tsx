"use client";

import React from "react";
import positions from "./positions";
import PositionCard from "./positionCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import AnimatedCard from "../../animatedCard";

export default function Board() {
  const { isDesktop } = useWindowType();

  return (
    <Grid
      templateColumns={["1fr", "1fr", "1fr", "repeat(2, 1fr)"]}
      gap={4}
      w="full"
      mx="auto"
      justifyItems="center"
    >
      <GridItem
        colSpan={[1, 1, 1, 2]}
        w="full"
        maxW={isDesktop ? "50%" : "500px"}
      >
        <AnimatedCard>
          <PositionCard position={positions[0]} />
        </AnimatedCard>
      </GridItem>

      {positions.slice(1).map((position, index) => (
        <GridItem
          key={index}
          w="full"
          maxW={
            isDesktop
              ? index == positions.length - 2 && index % 2 == 0
                ? "50%"
                : "100%"
              : "500px"
          }
          justifySelf={"center"}
          colSpan={
            index == positions.length - 2 && index % 2 == 0 ? [1, 1, 1, 2] : []
          }
        >
          <AnimatedCard>
            <PositionCard position={position} />
          </AnimatedCard>
        </GridItem>
      ))}
    </Grid>
  );
}
