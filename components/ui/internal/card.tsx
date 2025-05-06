import React from "react";
import { Flex, Stack } from "@chakra-ui/react";

export default function Card({ children }: { children: React.ReactNode }) {
    return (
        <Flex w="full" h="full">
            <Stack
                w="full"
                align={"center"}
                justify={"center"}
                bgColor={"card-bg-3"}
                color={"white"}
                border="1px solid"
                borderColor="card-border-3"
                padding="var(--card-padding)"
                rounded={"2xl"}
                gapY={10}
            >
                {children}
            </Stack>
        </Flex>
    );
}