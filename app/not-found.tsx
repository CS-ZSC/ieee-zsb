"use client"

import ButtonLink from '@/components/ui/internal/button-link'
import Card from '@/components/ui/internal/card';
import Logo from '@/components/ui/internal/logo'
import { useWindowType } from '@/hooks/use-window-type';
import { Box, Heading, Link, Stack, Text } from '@chakra-ui/react'

export default function NotFound() {
    const { isDesktop } = useWindowType();
    return (
        <Stack w="full" h="full" justifyContent="center" alignItems="center" spaceY={8}>
            <Box width={isDesktop ? "400px" : "220px"}>
                <Logo />
            </Box>
            <Box maxW={"720px"} paddingX={isDesktop ? 0 : "var(--global-spacing)"}>

                <Stack justify={"center"} align="center" spaceY={8}>
                    <Heading size="4xl">
                        404: Signal Not Found
                    </Heading>
                    <Box
                        ml={4} borderLeftColor="primary-1" borderLeftWidth={4} paddingLeft={4} py={2}
                    >
                        <Text fontSize={"lg"}>
                            Oops! Looks like you&apos;ve wandered off the IEEE circuit.
                            Even our best engineers can&apos;t find this page. Maybe it&apos;s hiding in a <Link textDecoration={"underline"} href='https://en.wikipedia.org/wiki/Faraday_cage'>Faraday cage</Link>?
                        </Text>
                    </Box>

                    <ButtonLink link='/' text="Back to the Mainframe" />
                </Stack>
            </Box>
        </Stack>
    )
}