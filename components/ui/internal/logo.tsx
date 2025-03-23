'use client'
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import logoSvg from "@/assets/ieee-logo.svg"
import { useColorMode } from "@/components/ui/color-mode";
interface LogoOptions {
  logoType: LogoType
}
export enum LogoType {
  Blue = "blue",
  White = "white"
}

export default function Logo({ logoType }: LogoOptions) {
  const { colorMode } = useColorMode();
  const __logoType = logoType ?? (colorMode === "light" ? LogoType.Blue : LogoType.White);

  return (
    <Link href="/" passHref>
      <Image
        src={`/Images/IEEE/ieee-logo-${__logoType}.svg`}
        alt="IEEE ZSB Logo"
        width={85}
        height={50}
        transition="all 0.2s ease-in-out"
        _hover={{ opacity: 0.9 }}
      />
    </Link>
  );
}
