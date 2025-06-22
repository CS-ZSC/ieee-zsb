import React from "react";
import type { Position } from "./positions";
import { Box, Text, Image, HStack, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useWindowType } from "@/hooks/use-window-type";
interface Props {
  position: Position;
}

export default function PositionCard({ position }: Props) {
  const { isDesktop } = useWindowType();

  return (
    <HStack
      align="stretch"
      justifyContent="start"
      padding={1}
      bgColor="primary-5"
      color="white"
      border="1px solid"
      borderColor="primary-3"
      rounded="2xl"
      gap={isDesktop ? 2 : 1}
    >
      <Image
        borderRadius="10px"
        boxSize={isDesktop ? "160px" : "120px"}
        src={position.avatarSrc}
        alt={position.name}
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
