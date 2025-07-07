"use client";
import { useWindowType } from "@/hooks/use-window-type";
import { Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
export function HeroCard({ logo, colorScheme }: { logo: string, colorScheme: string }) {
    const { isDesktop } = useWindowType();
    return (
        <Flex
            width={"full"}
            justifyContent={"center"}
            alignItems={"center"}
            paddingY={"var(--global-spacing)"}
            backgroundColor={colorScheme}
            borderRadius={"lg"}
            boxShadow={"0 4px 6px rgba(0, 0, 0, 0.1)"}
            height={isDesktop ? "800px" : "225px"}
        >
            <Image src={logo} alt="Chapter Logo" width={isDesktop ? "400px": "100px"} />
        </Flex>
    );
}