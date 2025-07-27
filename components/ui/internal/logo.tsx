"use client";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "@/components/ui/color-mode";
interface LogoOptions {
  type: LogoType;
  width: number;
  height: number;
}
export type LogoType = "black" | "white" | "blue";

export default function Logo({ width, height, type }: LogoOptions) {
  const color = useColorModeValue("black", "white");
  const logoType: LogoType = type ?? color;

  return (
    <Link href="/" passHref>
      <Image
        src={`/Images/IEEE/ieee-logo-${logoType}.svg`}
        alt="IEEE-ZSB Logo"
        width={width}
        height={height}
        transition="all 0.2s ease-in-out"
        _hover={{ opacity: 0.9 }}
      />
    </Link>
  );
}
