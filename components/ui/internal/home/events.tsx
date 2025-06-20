import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import Card from "@/components/ui/internal/card";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useWindowType } from "@/hooks/use-window-type";
import Link from "next/link";
import eventsData from "../events/events";
import EventCard from "../events/event-card";
import AnimatedCard from "../animatedCard";

export default function Events() {
  const { isDesktop } = useWindowType();
  return (
    <Card padding={"var(--global-spacing)"} gap={"16px"}>
      <Text
        fontSize={isDesktop ? "2.5rem" : "2rem"}
        fontWeight="bold"
        color={"text-1"}
        textAlign="center"
      >
        Recent Events
      </Text>
      <Flex justifyContent={"center"} wrap="wrap" gap={4}>
        {eventsData
          .filter((event) => event.homeItem)
          .map((event, index) => {
            return (
              <AnimatedCard key={index}>
                <EventCard event={event} />
              </AnimatedCard>
            );
          })}
      </Flex>

      <Link href={"/events"}>
        <Button
          borderRadius={"lg"}
          size={isDesktop ? "lg" : "md"}
          bg={"btn-bg-1"}
          color={"btn-text-1"}
          fontWeight={"bold"}
        >
          See all events
          <HiOutlineExternalLink />
        </Button>
      </Link>
    </Card>
  );
}
