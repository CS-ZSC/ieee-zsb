import { Box } from "@chakra-ui/react";
import React from "react";

interface VerticalDividerProps {
  backgroundColor?: string;
  width?: string;
  height?: string;
}

export default function VerticalDivider({
  backgroundColor = "text-5",
  width = "1px",
  height = "2.2rem",
}: VerticalDividerProps) {
  return (
    <Box height={height} width={width} backgroundColor={backgroundColor} />
  );
}
