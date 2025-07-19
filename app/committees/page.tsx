"use client";

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import PageWrapper from "@/components/ui/internal/page-wrapper";
import PageTitle from "@/components/ui/internal/pageTitle";
import Container from "@/components/ui/internal/container";
import AnimatedCard from "@/components/ui/internal/animatedCard";
import CommitteesSelection from "@/components/ui/internal/committees/committees-selection";
import committeesData from "@/data/committees";
import Committee from "@/components/ui/internal/committees/committee";

export default function Page() {
  return (
    <PageWrapper>
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"neutral-1"}
        gap={20}
      >
        <Flex justifyContent={"center"} flexFlow={"column"} maxWidth={"600px"}>
          <PageTitle title="Committees" />
          <AnimatedCard>
            <Text textAlign="center" fontSize="1.3rem">
              Discover our managerial committees in the branch
            </Text>
          </AnimatedCard>
        </Flex>
        <AnimatedCard>
          <CommitteesSelection />
        </AnimatedCard>
        <Container gap={10}>
          {committeesData.map((committee, index) => (
            <Committee
              key={index}
              committee={committee}
              borderColor={"accent-1"}
              positionBgColor={"primary-12"}
            />
          ))}
        </Container>
      </Flex>
    </PageWrapper>
  );
}
