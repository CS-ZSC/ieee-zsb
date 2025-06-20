import React from "react";
import { Text } from "@chakra-ui/react";

interface DescriptionProps {
  description: string;
  color?: string;
  maxWidth?: string;
  lineClamp?: string;
}

export default function Description({
  description,
  color = "text-2",
  maxWidth = "1000px",
  lineClamp = "inherit"
}: DescriptionProps) {
  return (
    <Text
      fontSize={"lg"}
      fontWeight={"light"}
      color={color}
      lineHeight={"1.8"}
      lineClamp={lineClamp}
      textOverflow={"ellipsis"}
      maxWidth={maxWidth}
    >
      {description}
    </Text>
  );
}
