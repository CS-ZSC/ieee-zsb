import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { EventsData } from "./events";
import Card from "../card";
import { Icon } from "@iconify/react";

interface EventCardProps {
  event: EventsData;
}

export default function HighlightedEventCard({ event }: EventCardProps) {
  return (
    <Flex maxWidth={"600px"} height={"full"}>
      <Card padding={4}>
        <Flex
          justifyContent={"space-between"}
          flexFlow={"column"}
          gap={6}
          height={"full"}
        >
          <Text
            textAlign={"center"}
            fontSize="1.6rem"
            fontWeight={"bold"}
          >
            {event.currentEvent ? "Current event" : "Upcoming event"}
          </Text>
          <Text paddingX={1} color={"text-4"}>
            {event.description}
          </Text>
          <Flex
            bgColor={"primary-2"}
            width={"full"}
            rounded={"xl"}
            paddingX={"calc(var(--card-padding))"}
            paddingY={"calc(var(--card-padding) * 0.8)"}
            justifyContent={"space-between"}
            alignItems={"center"}
            wrap={"wrap"}
          >
            <Text fontSize={"1.6rem"} fontWeight={"bold"}>
              {event.title.toString().toUpperCase()}
            </Text>
            <Flex color={"secondary"} alignItems={"center"} wrap={"wrap"}>
              <Flex alignItems={"center"} gap={1}>
                <Icon icon={"lucide:map-pin"} />
                <Text>{event.location}</Text>
              </Flex>
              <Icon
                icon="hugeicons:solid-line-01"
                style={{ transform: "rotate(90deg)" }}
              />
              <Flex alignItems={"center"} gap={1}>
                <Icon icon={"lucide:clock"} />
                <Text>{event.date}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  );
}
