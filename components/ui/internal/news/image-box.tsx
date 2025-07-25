import { Image } from "@chakra-ui/react";
import React from "react";

interface ImageBoxProps {
  path: string;
  alt: string | undefined;
  maxWidth?: string;
  aspectRatio?: string;
  mx?: string;
}

export default function ImageBox({
  path,
  alt = "Photo",
  maxWidth = "850px",
  aspectRatio = "16/9",
  mx = "auto",
}: ImageBoxProps) {
  return (
    <Image
      src={path}
      alt={alt}
      width="full"
      maxWidth={maxWidth}
      mx={mx}
      position="relative"
      objectFit="cover"
      border="1px solid"
      borderColor="primary-3"
      rounded="2xl"
      style={{
        aspectRatio: aspectRatio,
      }}
    />
  );
}
