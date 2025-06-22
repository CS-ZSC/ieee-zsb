import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Card from "../../card";

interface QuestionProps {
  question: string;
  isOpen: boolean;
  onClick: () => void;
}

const MotionBox = motion.create(Box);

export default function Question({ question, isOpen, onClick }: QuestionProps) {
  return (
    <Card padding={0}>
      <Flex
        width="full"
        justifyContent="space-between"
        align="center"
        onClick={onClick}
        cursor="pointer"
        color="neutral-1"
        gapY={10}
        padding={"calc(var(--card-padding) * 0.8)"}
      >
        <Text fontWeight="bold" fontSize={"1.2rem"} letterSpacing={1.2}>
          {question}
        </Text>
        <MotionBox
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
        >
          <Icon icon="lucide:chevron-down" width="2rem" height="2rem" />
        </MotionBox>
      </Flex>
    </Card>
  );
}
