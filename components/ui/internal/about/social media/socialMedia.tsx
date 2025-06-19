"use client";

import React from "react";
import { Grid } from "@chakra-ui/react";
import SocialMediaLinks from "../../social-media-links";
import SocialMediaLinkItem from "./socialMediaLinkItem";
import AnimatedCard from "../../animatedCard";

export default function SocialMedia() {
  return (
    <AnimatedCard>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: `repeat(${Math.min(SocialMediaLinks.length, 5)}, 1fr)`,
        }}
        justifyContent="center"
        alignItems="center"
        bgColor="card-bg-3"
        color="white"
        border="1px solid"
        borderColor="card-border-3"
        rounded="2xl"
        padding={2}
        gap={2}
        width="fit-content"
        marginX="auto"
        marginBottom={16}
      >
        {SocialMediaLinks.map((link, index) => (
          <SocialMediaLinkItem key={index} link={link} />
        ))}
      </Grid>
    </AnimatedCard>
  );
}
