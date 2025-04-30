import React from "react";
import { Flex, Stack } from "@chakra-ui/react";

export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <Flex p={"var(--global-spacing)"} w="full" h="full">
            <Stack
                w="full"
                align={"center"}
                justify={"center"}
                bgColor={"card-bg-3"}
                color={"white"}
                border="1px solid"
                borderColor="card-border-3"
                padding="var(--card-padding)"
                borderRadius={20}
                gapY={10}
                mx={"var(--global-spacing)"}
            >
                {children}
            </Stack>
        </Flex>
    );
}