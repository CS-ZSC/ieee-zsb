import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import Search from "./Search";
import { Icon } from "@iconify/react";
import Filter from "./filter";
import dynamic from "next/dynamic";
import Sort from "./sort";

const Category = dynamic(() => import("./category"), {
  ssr: false,
});

interface Props {
  onSearch: (value: string) => void;
}

export default function NewsDisplayControl({ onSearch }: Props) {
  return (
    <Grid
      bgColor={"primary-5"}
      color={"neutral-1"}
      border="1px solid"
      borderColor="primary-3"
      padding="calc(var(--card-padding) / 2)"
      rounded={"2xl"}
      gap={4}
      width="full"
      alignItems="center"
      templateAreas={{
        base: `"title actions"
               "search search"`,
        lg: `"title search actions"`,
      }}
      gridTemplateColumns={{
        base: "1fr 1fr",
        lg: "1fr 3fr 1fr",
      }}
    >
      <Category />
      <Flex
        gridArea="search"
        justifyContent="center"
        alignItems="center"
        padding="calc(var(--card-padding) / 4) calc(var(--card-padding) / 3)"
        rounded="xl"
        color={"neutral-3"}
        bgColor={"primary-12"}
        border="1px solid"
        borderColor="primary-3"
        gap={2}
      >
        <Icon icon="majesticons:search-line" width="2.2rem" />
        <Search onSearch={onSearch} />
      </Flex>
      <Flex justifyContent="flex-end" gridArea="actions" gap={3}>
        <Filter />
        <Sort />
      </Flex>
    </Grid>
  );
}
