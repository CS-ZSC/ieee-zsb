"use client";

import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import Card from "@/components/ui/internal/card";
import ImageBox from "@/components/ui/internal/news/image-box";
import Description from "@/components/ui/internal/news/description";

interface CommitteeBriefProps {
  name: string;
  description: string;
  image: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CommitteeBrief({
  name,
  description,
  image,
  isOpen,
  setIsOpen,
}: CommitteeBriefProps) {
  const { isDesktop } = useWindowType();

  return (
    <Card padding={"var(--global-spacing)"}>
      <Flex
        flexDirection={isDesktop ? "row" : "column-reverse"}
        width={"full"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gapX={"28"}
        gapY={"2"}
      >
        <Flex
          flexDirection={"column"}
          textAlign={"left"}
          height={"full"}
          justifyContent={"space-between"}
          padding={isDesktop ? "" : "var(--global-spacing)"}
        >
          <Description description={description} lineHeight="1.4" />
          <Button
            mt={4}
            onClick={() => setIsOpen((prev) => !prev)}
            width={"fit"}
            rounded={"lg"}
            color={"white"}
            bgColor={isOpen ? "primary-11" : "primary-1"}
            transition={"all"}
            _hover={{ opacity: "0.9" }}
            alignSelf={isDesktop ? "left" : "center"}
          >
            {isOpen ? "Show Less" : "Show More"}
          </Button>
        </Flex>
        <ImageBox
          path={image}
          alt={name}
          mx={"0px"}
          maxWidth={isDesktop ? "500px" : "600px"}
        />
      </Flex>
    </Card>
  );
}
