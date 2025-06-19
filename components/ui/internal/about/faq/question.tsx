import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface QuestionProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

const MotionBox = motion.create(Box);

export default function Question({ question, isOpen, onClick }: QuestionProps) {
  return (
    <Flex
      width="full"
      justifyContent="space-between"
      align="center"
      gap={5}
      onClick={onClick}
      cursor="pointer"
      bgColor="card-bg-3"
      color="white"
      border="1px solid"
      borderColor="card-border-3"
      padding={"var(--card-padding)"}
      rounded="2xl"
      gapY={10}
    >
      <Text fontWeight="bold" letterSpacing={1.5}>
        {question}
      </Text>
      <MotionBox
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
      >
        <Icon icon="lucide:chevron-down" width="1.5rem" height="1.5rem" />
      </MotionBox>
    </Flex>
  );
}
