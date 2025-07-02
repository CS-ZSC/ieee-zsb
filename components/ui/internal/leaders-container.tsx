"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import PositionCard from "./positionCard";
import type { Position } from "@/data/position";
import { useWindowType } from "@/hooks/use-window-type";

interface Props {
  positions: Position[];
  positionBgColor: string;
}

export default function LeadersContainer({
  positions,
  positionBgColor,
}: Props) {
  const { isDesktop } = useWindowType();

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: positions.length >= 2 ? "repeat(2, 1fr)" : "",
      }}
      gap={"var(--global-spacing)"}
    >
      {positions.length > 2 ? (
        <>
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            justifySelf="center"
            maxW={
              isDesktop ? "calc(100% / 2 - var(--global-spacing) / 2)" : "500px"
            }
            w={"full"}
          >
            <PositionCard position={positions[0]} bgColor="primary-12" />
          </GridItem>
          {positions.slice(1).map((position, index) => (
            <GridItem
              key={index + 1}
              justifySelf="center"
              maxW={isDesktop ? "full" : "500px"}
              w={"full"}
            >
              <PositionCard position={position} bgColor="primary-12" />
            </GridItem>
          ))}
        </>
      ) : (
        positions.map((position, index) => (
          <GridItem
            key={index + 1}
            justifySelf="center"
            maxW={
              isDesktop
                ? positions.length === 1
                  ? "calc(100% / 2 - var(--global-spacing) / 2)"
                  : "full"
                : "500px"
            }
            w={"full"}
          >
            <PositionCard position={position} bgColor={positionBgColor} />
          </GridItem>
        ))
      )}
    </Grid>
  );
}
