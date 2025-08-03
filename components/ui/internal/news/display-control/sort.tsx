import React, { useState } from "react";
import { chakra, Box, Text, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import { sortTypeAtom } from "@/atoms/atoms";

const MotionBox = chakra(motion.div);
const MotionList = chakra(motion.ul);

const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.1 },
  },
  closed: {
    scaleY: 0,
    transition: { when: "afterChildren", staggerChildren: 0.1 },
  },
};

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "A → Z", value: "alpha" },
  { label: "Z → A", value: "reverseAlpha" },
] as const;

export default function Sort() {
  const [open, setOpen] = useState(false);
  const [sortType, setSortType] = useAtom(sortTypeAtom);

  const handleSortChange = (value: typeof sortType) => {
    setSortType(value);
  };

  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <MotionBox animate={open ? "open" : "closed"} position="relative">
        <Button
          onClick={() => setOpen((prev) => !prev)}
          transition="all"
          backgroundColor={open ? "primary-11" : "transparent"}
          padding={"12px 14px"}
          outlineColor={"primary-3"}
          rounded={"10px"}
          _hover={{
            backgroundColor: open ? "primary-10" : "primary-12",
          }}
        >
          <Flex
            gap={2}
            backgroundColor={"transparent"}
            color={"neutral-1"}
            transition={"all"}
          >
            <Text fontSize={"1.2rem"}>Sort</Text>
            <Icon icon={"lucide:arrow-up-down"} />
          </Flex>
        </Button>

        <MotionList
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-65%" }}
          display="flex"
          flexDirection="column"
          gap={2}
          p={3}
          rounded="2xl"
          position="absolute"
          top="140%"
          left="70%"
          overflow="hidden"
          zIndex={2}
          backgroundColor={"primary-5"}
          border={"1px solid"}
          borderColor={"primary-3"}
        >
          {sortOptions.map((option) => (
            <chakra.li key={option.value} listStyleType="none">
              <label>
                <Flex
                  alignItems={"center"}
                  gap={4}
                  cursor={"pointer"}
                  className="radioes-container"
                  position={"relative"}
                >
                  <input
                    type="radio"
                    name="sort"
                    value={option.value}
                    checked={sortType === option.value}
                    onChange={() => handleSortChange(option.value)}
                  />
                  <span className="radio-container"></span>
                  <Text>{option.label}</Text>
                </Flex>
              </label>
            </chakra.li>
          ))}
        </MotionList>
      </MotionBox>
    </Box>
  );
}
