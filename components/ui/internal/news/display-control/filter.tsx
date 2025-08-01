import React, { useState } from "react";
import { chakra, Box, Text, Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { useAtom } from "jotai";
import {
  newsFilterCheckedItemsAtom,
  newsFilterLabelsAtom,
} from "@/atoms/atoms";

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

export default function Filter() {
  const [open, setOpen] = useState(false);
  const [checkedNewsItems, setCheckedNewsItems] = useAtom(
    newsFilterCheckedItemsAtom
  );
  const [filterItems] = useAtom(newsFilterLabelsAtom);

  const filterNewsItems: string[] = filterItems;

  const handleCheckboxChange = (index: number) => {
    const updatedItems = [...checkedNewsItems];
    updatedItems[index] = !updatedItems[index];
    setCheckedNewsItems(updatedItems);
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
            <Text fontSize={"1.2rem"}>Filter</Text>
            <Icon icon={"lucide:filter"}></Icon>
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
          left="50%"
          overflow="hidden"
          zIndex={2}
          backgroundColor={"primary-5"}
          border={"1px solid"}
          borderColor={"primary-3"}
        >
          {checkedNewsItems.map((isChecked, index) => (
            <chakra.li key={index} listStyleType="none">
              <label>
                <Flex
                  alignItems={"center"}
                  gap={4}
                  cursor={"pointer"}
                  className="checkboxes-container"
                  position={"relative"}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(index)}
                  />
                  <span className="checkbox-container"></span>
                  <Text>{filterNewsItems[index]}</Text>
                </Flex>
              </label>
            </chakra.li>
          ))}
        </MotionList>
      </MotionBox>
    </Box>
  );
}
