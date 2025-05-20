"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import {
  newsFilterCheckedItemsAtom,
  newsFilterLabelsAtom,
} from "@/atoms/atoms";

export default function Category() {
  const [checkedItems] = useAtom(newsFilterCheckedItemsAtom);
  const [filterItems] = useAtom(newsFilterLabelsAtom);

  const getCategoryText = () => {
    const checkedCount = checkedItems.slice(1).filter(Boolean).length;
    const isAllChecked = checkedItems[0];

    if (isAllChecked) {
      return "All News";
    } else if (checkedCount === 0) {
      return "No news selected";
    } else if (checkedCount === 1) {
      const checkedIndex = checkedItems.slice(1).findIndex(Boolean) + 1;
      return filterItems[checkedIndex];
    } else {
      return "Mixed News";
    }
  };

  return <Text fontSize={"1.2rem"}>{getCategoryText()}</Text>;
}