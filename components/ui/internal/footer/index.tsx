"use client";

import React, { useState } from "react";
import { sections } from "./sections";
import { HStack, Stack, Heading, Button, Box, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link"
import Logo from "@/components/ui/internal/logo"
import { useWindowType } from "@/hooks/use-window-type";
export default function Footer() {

    const { isDesktop } = useWindowType();

    return <Stack w="full" align={"center"} justify={"center"}>
        <Logo />
        <SimpleGrid columns={isDesktop ? 4 : 2} gap="40px">
            {sections.map((section, i) => <Stack key={section.title + i}>
                <Heading>
                    {section.title}
                </Heading>
                <Stack>

                    {section.links.map((link, i) => <Box key={link + i}>
                        <Link href={link.href}>
                            {link.name}
                        </Link>
                    </Box>)}
                </Stack>
            </Stack>)}
        </SimpleGrid>
    </Stack>;
}

