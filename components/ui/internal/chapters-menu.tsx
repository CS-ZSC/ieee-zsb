"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Chapters } from "./chapters";
import {
  Box,
  Flex,
  Text,
  Menu,
  Link,
  Stack,
  HStack,
  Button,
  Portal,
} from "@chakra-ui/react";

export default function ChaptersMenu() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button
          colorPalette={"black"}
          variant="ghost"
          size="sm"
          fontWeight={"bold"}
        >
          Chapters
        </Button>
      </Menu.Trigger>

      <Portal>
        <Menu.Positioner>
          <Menu.Content spaceY={2}>
            {Chapters.map((chapter) => (
              <Menu.Item
                cursor={"button"}
                borderRadius={"lg"}
                value={chapter.href}
                key={chapter.id}
              >
                <Stack
                  onClick={() => router.push(chapter.href)}
                  bg={chapter.secondaryColor}
                  margin={2}
                  h="auto"
                  w="full"
                >
                  <HStack
                    justifyContent="space-between"
                    width="100%"
                    alignItems="center"
                  >
                    <HStack alignItems="center" gap="4">
                      <Box>
                        <Image
                          src={chapter.path}
                          alt={chapter.alt}
                          width={40}
                          height={40}
                        />
                      </Box>
                      <Text fontSize="xl" color={chapter.identityColor}>
                        {chapter.name}
                      </Text>
                    </HStack>
                  </HStack>

                  <Text
                    alignSelf="flex-start"
                    color={chapter.identityColor}
                    mt="1"
                  >
                    {chapter.description}
                  </Text>
                </Stack>
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
