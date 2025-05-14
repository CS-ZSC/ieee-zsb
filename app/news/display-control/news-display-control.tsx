import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import Category from "./category";
import Search from "./Search";
import { Icon } from "@iconify/react";
import VerticalDivider from "../vertical-divider";
import Filter from "./filter";

export default function NewsDisplayControl() {
  return (
    <Grid
      bgColor={"card-bg-3"}
      color={"white"}
      border="1px solid"
      borderColor="card-border-3"
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
      <Category text={"All News"} />
      <Flex
        gridArea="search"
        justifyContent={"center"}
        alignItems={"center"}
        padding="calc(var(--card-padding) / 3)"
        rounded={"xl"}
        color={"text-4"}
        border="1px solid"
        borderColor="card-border-3"
        gap={3}
      >
        <Icon icon={"majesticons:search-line"} width={"2.2rem"}></Icon>
        <VerticalDivider backgroundColor="text-4" width="2px" height="1.8rem" />
        <Search />
      </Flex>
      <Flex justifyContent={"flex-end"} gridArea="actions" gap={2}>
        <Filter />
      </Flex>
    </Grid>
  );
}
