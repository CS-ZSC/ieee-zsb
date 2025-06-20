import { Box } from "@chakra-ui/react";
import React from "react";

interface ImageBoxProps {
  path: string;
  maxWidth?: string;
  aspectRatio?: string;
}

export default function ImageBox({
  path,
  maxWidth = "850px",
  aspectRatio = "16/9",
}: ImageBoxProps) {
  return (
    <Box
      width={"full"}
      maxWidth={maxWidth}
      mx={"auto"}
      position={"relative"}
      bgImage={`url(${path})`}
      bgSize="cover"
      rounded="2xl"
      border="1px solid"
      borderColor="card-border-1"
      style={{
        aspectRatio: aspectRatio,
      }}
    />
  );
}
