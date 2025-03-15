import React, { useRef, useState } from 'react';
import {
  Box,
  Flex,
  Link as ChakraLink,
  List,
  ListItem,
  Image,
  Text,
  HStack,
  Button,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';
import ChaptersMenu from './chapters-menu';
import { useColorModeValue } from '@/components/ui/color-mode';
import { ColorModeButton } from "@/components/ui/color-mode"
import Logo from './logo';
import { Links } from "./links"


function FullHeader() {
  const { pathname } = useRouter();
  const [chaptersOpen, setChaptersOpen] = useState(false);
  const chaptersContainerRef = useRef(null);



  // Glass effect colors
  const glassBackground = useColorModeValue('rgba(255, 255, 255, 0.3)', 'rgba(0, 0, 0, 0.3)');
  const borderColor = useColorModeValue('rgba(255, 255, 255, 0.2)', 'rgba(255, 255, 255, 0.1)');
  const textColor = useColorModeValue('gray.900', 'white');

  return (
    <Flex justify="center" align="center" margin="16">
      <Box
        p="5"
        m="5"
        mx="auto"
        as="nav"
        position="fixed"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="2xl"
        bgColor={glassBackground}
        height="20"
        maxWidth="var(--main-max-width)"
        width="full"
        marginX={16}
        boxShadow="lg"
        border="1px"
        borderColor={borderColor}
        backdropFilter="blur(16px)"
      >
        <HStack justifyContent="space-between" alignItems="center" width="full">
          <Logo />

          <HStack>
            <ChaptersMenu />
            <LinksNavigator />
          </HStack>


          <ColorModeButton />
        </HStack>
      </Box>
    </Flex>
  );
};


function LinksNavigator() {



  const router = useRouter();

  return (
    <HStack spaceX={6} w="full">
      {Links.map((item) => (
        <Button key={item.id} colorPalette={"black"} size="sm" variant={"ghost"} fontWeight={"bold"} onClick={() => router.push(item.path)}>
          {item.name}
        </Button>
      ))}
    </HStack>
  );
}

export default FullHeader;