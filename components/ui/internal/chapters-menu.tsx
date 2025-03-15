"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Chapters } from "./chapters";
import {
  Box,
  Text,
  Menu,
  Stack,
  HStack,
  Button,
  Portal,
} from "@chakra-ui/react";
import { motion } from "framer-motion"; // Import motion

export default function ChaptersMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          colorPalette="black"
          size="sm"
          variant="ghost"
          fontWeight="bold"
          fontSize={16}
          rounded="2xl"
          outline={0}
          _hover={{
            color: "gray.700",
            backgroundColor: "transparent",
            transition: "all 0.2s ease-in-out",
          }}
          _active={{
            color: "gray.700",
            backgroundColor: "transparent",
            transform: "scale(0.95)",
          }}
        >
          Chapters
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            spaceY={4}
            padding={4}
            rounded="lg"
            boxShadow="lg"
            bg="white"
            _dark={{ bg: "gray.800" }}
            marginTop={6}
          >
            {Chapters.map((chapter) => {
              const isSelected = pathname === chapter.href; // Check if the current path matches

              return (
                <Menu.Item
                  cursor="pointer"
                  borderRadius="lg"
                  value={chapter.href}
                  key={chapter.id}
                  bg={chapter.secondaryColor}
                  padding={1}
                  height={20}
                  position="relative"
                >
                  {isSelected && (
                    <Box
                      position="absolute"
                      left={-2} // Positioned outside
                      top={0}
                      bottom={0}
                      width="3px"
                      bg={chapter.identityColor} // Use chapter's primary color
                      borderRadius="full"
                    />
                  )}

                  <Stack
                    onClick={() => router.push(chapter.href)}
                    margin={2}
                    h="auto"
                    w="full"
                  >
                    <HStack
                      justifyContent="space-between"
                      width="100%"
                      alignItems="center"
                    >
                      <HStack alignItems="center" gap="3">
                        <Box>
                          <Image
                            src={chapter.path}
                            alt={chapter.alt}
                            width={40}
                            height={40}
                          />
                        </Box>
                        <Text
                          fontSize="xl"
                          fontWeight="bold"
                          color={chapter.identityColor}
                        >
                          {chapter.name}
                        </Text>
                      </HStack>
                    </HStack>

                    <Text alignSelf="flex-start" color={chapter.identityColor} mt="1">
                      {chapter.description}
                    </Text>
                  </Stack>
                </Menu.Item>
              );
            })}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
