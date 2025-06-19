import PageWrapper from "@/components/ui/internal/page-wrapper";
import { Flex } from "@chakra-ui/react";
import React from "react";
import PageTitle from "@/components/ui/internal/pageTitle";

export default function page() {
  return (
    <PageWrapper>
      <Flex flexDirection={"column"} padding={"var(--global-spacing)"}>
        <PageTitle title="Committees" />
      </Flex>
    </PageWrapper>
  );
}
