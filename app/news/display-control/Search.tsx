import React from "react";
import { Input } from "@chakra-ui/react";

interface SearchProps {
  onSearch: (value: string) => void;
}

export default function Search({ onSearch }: SearchProps) {
  return (
    <Input
      placeholder="Search"
      _placeholder={{ color: "text-5" }}
      name="news-search"
      width="full"
      outline="none"
      border="none"
      fontSize="1.2rem"
      padding={0}
      onChange={(e) => onSearch(e.target.value.toLowerCase())}
    />
  );
}
