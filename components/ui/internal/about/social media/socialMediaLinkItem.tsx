import React from "react";
import { Flex, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import type { SocialMediaLink } from "../../social-media-links";

interface SocialMediaLinkProps {
  link: SocialMediaLink;
}

export default function SocialMediaLinkItem({ link }: SocialMediaLinkProps) {
  return (
    <LinkBox
      bgColor="primary-2"
      border="1px solid"
      borderColor="card-border-3"
      paddingY={10}
      rounded="xl"
      width={"200px"}
      justifyContent={"center"}
      textAlign="center"
      transition="all"
      color="text-4"
      _hover={{ color: "text-1" }}
    >
      <LinkOverlay href={link.href} target="_blanke">
        <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
          <Icon icon={link.icon} width={30} height={30} />
          <Text fontSize={"xl"}>{link.name}</Text>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  );
}
