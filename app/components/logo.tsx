
import {
    Box,
    Flex,
    Link as ChakraLink,
    List,
    ListItem,
    Image,
    Text
} from '@chakra-ui/react';

import Link from 'next/link';

export default function Logo() {

    // TODO: Handling dark mode and light mode;
    // TODO: Use `svg` instead of `png`
    return (
        <Link href="/" passHref>
            <ChakraLink>
                <Image
                    src="/Images/IEEE/IEEE Black.png"
                    alt="IEEE Logo"
                    width={85}
                    height={50}
                    transition="all 0.2s ease-in-out"
                    _hover={{ opacity: 0.9 }}
                />
            </ChakraLink>
        </Link>
    )
}