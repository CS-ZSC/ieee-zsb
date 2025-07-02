"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Flex, Text, Image } from "@chakra-ui/react";
import { EventsData } from "@/data/events";
import { Icon } from "@iconify/react";
import { useWindowType } from "@/hooks/use-window-type";

interface EventCardProps {
  event: EventsData;
}

export default function EventCard({ event }: EventCardProps) {
  const router = useRouter();
  const { isDesktop } = useWindowType();

  const handleClick = () => {
    if (event.link) {
      router.push(event.link);
    }
  };

  return (
    <Flex
      boxSizing="content-box"
      width="100%"
      maxWidth={"700px"}
      aspectRatio={"4 / 3"}
      border="1px solid"
      borderColor="primary-3"
      rounded="2xl"
      overflow="hidden"
      position="relative"
      cursor={event.link ? "pointer" : "default"}
      onClick={handleClick}
      _hover={{ transform: event.link ? "scale(0.98)" : "" }}
      transition="all 0.2s ease-in-out"
    >
      <Image
        src={event.photo}
        alt={event.title}
        objectFit="cover"
        width="100%"
        height="100%"
        display="block"
      />
      <Flex
        flexFlow="column"
        gap={"calc(var(--global-spacing) / 2)"}
        position="absolute"
        width="calc(100% - 20px)"
        margin="10px"
        alignSelf="flex-end"
        bgColor="rgba(0, 0, 0, 0.2)"
        padding={"var(--global-spacing)"}
        rounded="xl"
        boxShadow="lg"
        backdropFilter="blur(16px)"
        backdropBlur="xl"
        border={"1px solid"}
        borderColor={"neutral-4"}
      >
        <Flex color="accent-1" alignItems="center" wrap="wrap">
          <Flex alignItems="center" gap={1}>
            <Icon icon="lucide:map-pin" />
            <Text>{event.location}</Text>
          </Flex>
          <Icon
            icon="hugeicons:solid-line-01"
            style={{ transform: "rotate(90deg)" }}
          />
          <Flex alignItems="center" gap={1}>
            <Icon icon="lucide:clock" />
            <Text>{event.date}</Text>
          </Flex>
        </Flex>
        <Text fontSize="1.6rem" fontWeight="bold" color="white">
          {event.title.toString().toUpperCase()}
        </Text>
        <Text color="white-80" lineClamp={isDesktop ? 6 : 3}>
          {event.description}
        </Text>
      </Flex>
    </Flex>
  );
}
