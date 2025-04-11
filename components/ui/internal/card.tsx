import React from "react";
import { Stack } from "@chakra-ui/react";

export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <Stack
            w="full"
            align={"center"}
            justify={"center"}
            bg={"card.bg.primary"}
            color={"white"}
            paddingY={7}
            paddingX={10}
            borderRadius={20}
            borderColor={"card.border.primary"}
            borderWidth={1}
            borderStyle={"solid"}
            gapY={10}
        >
            {children}
        </Stack>
    );
}