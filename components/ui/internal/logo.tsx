import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "../color-mode";

export default function Logo() {
  // TODO: Handling dark mode and light mode;
  // TODO: Use `svg` instead of `png`
  const indicatorColor = useColorModeValue("black", "white");

  return (
    <Link href="/" passHref>
      <Image
        src={`/Images/IEEE/IEEE ${
          indicatorColor == "black" ? "Black" : "White"
        }.png`}
        alt="IEEE Logo"
        width={85}
        height={50}
        transition="all 0.2s ease-in-out"
        _hover={{ opacity: 0.9 }}
      />
    </Link>
  );
}
