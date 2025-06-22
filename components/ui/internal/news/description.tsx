import React from "react";
import { Text } from "@chakra-ui/react";

interface DescriptionProps {
  description: string;
  color?: string;
  maxWidth?: string;
  lineClamp?: string;
  lineHeight?: string;
}

export default function Description({
  description,
  color = "neutral-2",
  maxWidth = "1000px",
  lineClamp = "inherit",
  lineHeight = "1.8",
}: DescriptionProps) {
  return (
    <Text
      fontSize={"lg"}
      fontWeight={"light"}
      color={color}
      lineHeight={lineHeight}
      lineClamp={lineClamp}
      textOverflow={"ellipsis"}
      maxWidth={maxWidth}
    >
      {description}
    </Text>
  );
}
