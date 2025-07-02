"use client";

import React, { useEffect, useState } from "react";
import { sections } from "./sections";
import {
  Stack,
  Heading,
  Box,
  SimpleGrid,
  Flex,
  Text,
  Grid,
} from "@chakra-ui/react";
import Link from "next/link";
import Logo from "@/components/ui/internal/logo";
import Card from "@/components/ui/internal/card";
import { LogoType } from "@/components/ui/internal/logo";
import { useWindowType } from "@/hooks/use-window-type";
import SocialMediaLinks from "@/data/social-media-links";
import Chapters from "@/components/ui/internal/header/chapters";
import { useAtom } from "jotai";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { FooterChaptersAccordionAtom } from "@/atoms/atoms";

export default function Footer() {
  const { isDesktop } = useWindowType();
  const [isOpen, setIsOpen] = useAtom(FooterChaptersAccordionAtom);

  function toggleChaptersAccordion() {
    setIsOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem("FooterChaptersAccordionAtom", newValue.toString());
      return newValue;
    });
  }
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <Flex paddingTop="var(--global-spacing)">
      <Card>
        <Logo
          logoType={LogoType.White}
          width={isDesktop ? 180 : 110}
          height={isDesktop ? 110 : 65}
        />
        <SimpleGrid
          columns={isDesktop ? 4 : 2}
          justifyContent={"space-between"}
          w="full"
          gapX={3}
          gapY={10}
          paddingX={isDesktop ? 10 : 0}
        >
          {sections.map((section, i) => (
            <Stack key={section.title + i}>
              <Heading color={"neutral-1"} marginBottom={1}>
                {section.title}
              </Heading>
              <Stack>
                {i == 0 && (
                  <>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      color={"neutral-2"}
                      gap={2}
                      cursor="pointer"
                      width={"fit-content"}
                      onClick={toggleChaptersAccordion}
                    >
                      <span>Chapters</span>
                      <Box marginTop={1}>
                        <motion.div
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Icon
                            icon="lucide:chevron-down"
                            width={20}
                            height={20}
                          />
                        </motion.div>
                      </Box>
                    </Flex>

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <Flex
                        flexDirection="column"
                        gap={2}
                        paddingLeft={4}
                        fontWeight="normal"
                        zIndex={-50}
                        visibility={isOpen ? "visible" : "hidden"}
                      >
                        {Chapters.map((chapter) => (
                          <Box
                            key={chapter.id}
                            transition="opacity 0.2s ease-in-out"
                            color={"neutral-2"}
                            _hover={{ color: "neutral-1" }}
                          >
                            <Link href={chapter.href}>
                              <motion.div
                                style={{
                                  position: "relative",
                                  transition: "all 0.3s ease-in-out",
                                }}
                              >
                                {chapter.name}
                              </motion.div>
                            </Link>
                          </Box>
                        ))}
                      </Flex>
                    </motion.div>
                  </>
                )}
                {section.links.map((link, i) => (
                  <Box
                    key={i}
                    color={"neutral-2"}
                    _hover={{ color: "neutral-1" }}
                    transition="opacity 0.2s ease-in-out"
                    width={"fit-content"}
                    marginTop={
                      !isOpen && link.href === "/committees" ? "-2" : "0"
                    }
                  >
                    <Link href={link.href}>{link.name}</Link>
                  </Box>
                ))}
              </Stack>
            </Stack>
          ))}
        </SimpleGrid>
        <Stack>
          <Grid
            templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
            gapX={6}
            gapY={3}
            alignItems="center"
            marginBottom={2}
          >
            <Heading textAlign="center" color={"neutral-1"}>
              Follow Us
            </Heading>
            <Heading textAlign="center" color={"neutral-1"}>
              Contact Us
            </Heading>
            <Flex
              justifyContent="center"
              gap={3}
              gridRow={{ base: 2, md: "auto" }}
            >
              {SocialMediaLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                >
                  <MediaLinks icon={link.icon} />
                </Link>
              ))}
            </Flex>
            <Flex
              justifyContent="center"
              alignItems="center"
              gridRow={{ base: 4, md: "auto" }}
              transition="opacity 0.2s ease-in-out"
              color={"neutral-2"}
              _hover={{ color: "neutral-1" }}
            >
              <Link href="mailto:info@ieee-zsb.org">info@ieee-zsb.org</Link>
            </Flex>
          </Grid>

          <Text textAlign={"center"} color={"neutral-2"}>
            Designed and developed by IEEE-ZSB CS chapter &copy;{" "}
            {new Date().getFullYear()}
          </Text>
          <Text textAlign={"center"} color={"neutral-2"}>
            All rights reserved to IEEE-ZSB
          </Text>
        </Stack>
      </Card>
    </Flex>
  );
}

function MediaLinks({ icon }: { icon: string }) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      padding={1}
      borderRadius={10}
      transition="all"
      color="neutral-2"
      _hover={{ color: "neutral-1" }}
    >
      <Icon icon={icon} width={35} height={35} />
    </Flex>
  );
}
