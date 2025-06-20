"use client";
import React, { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Container from "../container";
import faqs from "./faqs";
import Question from "./question";
import Answer from "./answer";
import AnimatedCard from "../../animatedCard";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container>
      <Flex direction="column" gap={4} w="full">
        {faqs.map((faq, index) => (
          <Flex key={index} direction="column" gap={2} w="full">
            <AnimatedCard>
              <Question
                question={faq.question}
                isOpen={openIndex === index}
                onClick={() => toggleIndex(index)}
              />
            </AnimatedCard>
            <Answer answer={faq.answer} isOpen={openIndex === index} />
          </Flex>
        ))}
      </Flex>
    </Container>
  );
}
