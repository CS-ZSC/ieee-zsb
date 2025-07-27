import React, { useRef } from "react";
import Card from "../../card";
import { Text } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";

const MotionDiv = motion.div;

export default function Answer({
  answer,
  isOpen,
}: {
  answer: string;
  isOpen: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <Card padding={0} bgColor="primary-12">
          <MotionDiv
            initial={{ height: 0 }}
            animate={{ height: contentRef.current?.scrollHeight || "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{ overflow: "hidden", alignSelf: "start" }}
          >
            <Text color="neutral-2" padding="var(--card-padding)">
              {answer}
            </Text>
          </MotionDiv>
        </Card>
      )}
    </AnimatePresence>
  );
}
