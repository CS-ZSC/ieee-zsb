import React from "react";
import type { Position } from "./positions";
import { Box, Text, Image, HStack, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

interface Props {
  position: Position;
}

export default function PositionCard({ position }: Props) {
  return (
    <HStack
      justifyContent="start"
      padding={1}
      bgColor="card-bg-3"
      color="white"
      border="1px solid"
      borderColor="card-border-3"
      rounded="2xl"
      height="150px"
    >
      <Image
        borderRadius="10px"
        boxSize="150px"
        src={position.avatarSrc}
        alt={position.name}
      />
      <Flex
        paddingX={4}
        paddingY={2}
        height="full"
        flexDirection="column"
        justify="space-between"
        flex={1}
      >
        <Text fontWeight="bold" fontSize="xl">
          {position.name}
        </Text>
        <Text fontSize="lg" color="text-4">
          {position.position}
        </Text>
        <Box bgColor="card-bg-2" rounded="full" h="1px" />

        <Link href={position.linkedin}>
          <HStack color="text-5">
            <Icon icon="mage:linkedin" width={25} height={25} />
            <Text>Linkedin</Text>
          </HStack>
        </Link>
        <Link href={`mailto:${position.email}`}>
          <HStack color="text-5">
            <Icon icon="ic:outline-alternate-email" width={25} height={25} />
            <Text>Email</Text>
          </HStack>
        </Link>
      </Flex>
    </HStack>
  );
}
