"use client";

import React from "react";
import positions from "./positions";
import PositionCard from "./positionCard";
import { Grid, GridItem } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
export default function Board() {
  const { isDesktop } = useWindowType();

  return (
    <Grid
      templateColumns={isDesktop ? "repeat(2, 1fr)" : "repeat(1, 1fr)"}
      gap={4}
      w={isDesktop ? "1000px" : ""}
      mx="auto"
      justifyItems="center"
    >
      <GridItem colSpan={[1, null, 2]} w={"400px"}>
        <PositionCard position={positions[0]} />
      </GridItem>

      {positions.slice(1).map((position, index) => (
        <GridItem key={index} w={"400px"}>
          <PositionCard position={position} />
        </GridItem>
      ))}
    </Grid>
  );
}
