import React from "react";
import type { Position } from "@/data/position";
import { Box, Text, Image, HStack, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useWindowType } from "@/hooks/use-window-type";
interface Props {
  position: Position;
  bgColor?: string;
}

export default function PositionCard({
  position,
  bgColor = "primary-5",
}: Props) {
  const { isDesktop } = useWindowType();

  return (
    <HStack
      align="stretch"
      justifyContent="start"
      padding={"4px"}
      bgColor={bgColor}
      color="white"
      border="1px solid"
      borderColor="primary-3"
      rounded="2xl"
      gap={isDesktop ? 3 : 2}
    >
      <Image
        rounded={"2xl"}
        boxSize={isDesktop ? "160px" : "120px"}
        src={position.avatarSrc}
        alt={position.name}
        _hover={{ scale: "1.06", borderRadius: "12px 0 0 12px" }}
        transition={"all"}
      />
      <Flex
        paddingX={isDesktop ? 4 : 2}
        paddingY={1}
        flexDirection="column"
        justify="space-between"
        flex={1}
      >
        <Text fontWeight="bold" fontSize="1.3rem" color={"neutral-1"}>
          {position.name}
        </Text>
        <Text fontSize="1.1rem" color="neutral-2">
          {position.position}
        </Text>
        <Box bgColor="primary-3" rounded="full" h="1px" />

        <Link href={position.linkedin}>
          <HStack
            color="neutral-3"
            _hover={{ color: "neutral-1" }}
            transition={"all"}
          >
            <Icon icon="mage:linkedin" width={"1.5rem"} height={"1.5rem"} />
            <Text>Linkedin</Text>
          </HStack>
        </Link>
        <Link href={`mailto:${position.email}`}>
          <HStack
            color="neutral-3"
            _hover={{ color: "neutral-1" }}
            transition={"all"}
          >
            <Icon
              icon="ic:outline-alternate-email"
              width={"1.5rem"}
              height={"1.5rem"}
            />
            <Text>Email</Text>
          </HStack>
        </Link>
      </Flex>
    </HStack>
  );
}
