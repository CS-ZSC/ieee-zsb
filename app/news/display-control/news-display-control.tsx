import React from "react";
import { Flex, Grid } from "@chakra-ui/react";
import Category from "./category";
import Search from "./Search";

export default function NewsDisplayControl() {
  return (
    <Grid
      bgColor={"card-bg-3"}
      color={"white"}
      border="1px solid"
      borderColor="card-border-3"
      padding="calc(var(--global-spacing))"
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
      <Flex gridArea="search">
        <Search />
      </Flex>
      <Flex justifyContent={"flex-end"} gridArea="actions" gap={2}>
        Helllo
      </Flex>
    </Grid>
  );
}
