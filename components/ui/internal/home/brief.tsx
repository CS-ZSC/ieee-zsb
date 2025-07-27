import React from "react";
import { Text, Flex, Stack, Heading, Box } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import Card from "@/components/ui/internal/card";
import ButtonLink from "../button-link";

export default function Brief() {
  const { isDesktop } = useWindowType();

  const content = [
    ["brief", `A legacy of over ${new Date().getFullYear() - 1999} years positions IEEE Zagazig University Student Branch (ZSB) as one of the first and most impactful in Egypt. We extend our reach beyond Zagazig University, serving students nationwide through workshops, events, and initiatives that explore technology's influence on all aspects of life, from its latest applications to its intersection with business in our signature "MUTEX" event, the Delta region's largest gathering focused on technology and entrepreneurship. Our commitment goes beyond technical expertise, fostering well-rounded graduates through six managerial committees and three technical chapters, alongside the Women In Engineering (WIE) Affinity Group. This comprehensive approach creates a professional environment where students can cultivate essential skills like leadership, teamwork, and management, ensuring they're prepared for the demands of the modern workforce.`],
    ["vision", "Our vision is to cultivate a generation of students who excel as critical thinkers, proficient leaders, innovators, and experts across diverse fields of science and technology."],
    ["mission", "Our mission begins with a deep understanding of the contemporary job market's demands and the skills required from graduates to meet those demands. We then strive to bridge the skills gap by establishing a sustainable program that addresses the ever-expanding divide between graduates' skillsets and the job market's requirements, particularly those skills that the university curriculum may overlook."]
  ]
  return (
    <Card>
      <Flex
        flexDirection={"column"}
        alignItems={isDesktop ? "" : "center"}
        gap={"calc(1.5 * var(--global-spacing))"}
      >
        {content.map(([title, text]) => (
          <Stack key={title}>
            <Heading>
              {title.charAt(0).toUpperCase() + title.slice(1)}
            </Heading>
            <Box
              ml={4} borderLeftColor="primary-1" borderLeftWidth={4} paddingLeft={4} py={2}
            >
              <Text fontSize={"lg"}>
                {text}
              </Text>
            </Box>
          </Stack>
        ))}
        <ButtonLink link="/about" text="More about us" icon={false} />
      </Flex>
    </Card>
  );
}
