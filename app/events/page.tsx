"use client";

import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import PageTitle from "@/components/ui/internal/pageTitle";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import Container from "@/components/ui/internal/container";
import eventsData from "@/data/events";
import HighlightedEventCard from "@/components/ui/internal/events/highlighted-event-card";
import EventCard from "@/components/ui/internal/events/event-card";

export default function page() {
  const highlightedEvents = eventsData.filter(
    (item) => item.currentEvent || item.upcomingEvent
  );

  return (
    <PageWrapper>
      <Flex flexDirection={"column"} gap={12} marginBottom={16}>
        <Container maxWidth="1300px">
          <Flex justifyContent={"center"} flexFlow={"column"}>
            <PageTitle title="Events" />
            <AnimatedCard>
              <Text textAlign="center" fontSize="1.3rem">
                Discover recent events in the branch
              </Text>
            </AnimatedCard>
          </Flex>
          <Flex justifyContent={"center"} wrap="wrap" gap={4}>
            {highlightedEvents.map((item) => (
              <AnimatedCard key={item.id}>
                <HighlightedEventCard event={item} />
              </AnimatedCard>
            ))}
          </Flex>
        </Container>
        <Container maxWidth="3000px">
          <AnimatedCard>
            <PageTitle title="All events" />
          </AnimatedCard>
          <Flex justifyContent={"center"} wrap="wrap" gap={4}>
            {eventsData.map((item) => (
              <AnimatedCard key={item.id}>
                <EventCard event={item} />
              </AnimatedCard>
            ))}
          </Flex>
        </Container>
      </Flex>
    </PageWrapper>
  );
}
