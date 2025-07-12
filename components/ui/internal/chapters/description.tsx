import React from "react";
import { Text, Stack, Heading, Box } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import Card from "@/components/ui/internal/card";

export function Description({ vision, mission, about, color }: {
    vision: string;
    mission: string;
    about: string;
    color: string
}) {
    const { isDesktop } = useWindowType();
    const description = [
        ["about", about],
        ["mission", mission],
        ["vision", vision]
    ]
    return (
        <Card>
            <Stack
                width={"full"}
                padding={isDesktop ? "2rem" : "var(--global-spacing)"}
            >
                {description.map(([title, text]) => (
                    <Stack key={title}>
                        <Heading>
                            {title.charAt(0).toUpperCase() + title.slice(1)}
                        </Heading>
                        <Box
                            ml={4} borderLeftColor={color} borderLeftWidth={4} paddingLeft={4} py={2}
                        >

                            <Text>
                                {text}
                            </Text>
                        </Box>
                    </Stack>
                ))}
            </Stack>
        </Card>
    );
}