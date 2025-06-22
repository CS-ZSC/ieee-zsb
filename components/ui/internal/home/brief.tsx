import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import Card from "@/components/ui/internal/card";
import ButtonLink from "../button-link";

export default function Brief() {
  const { isDesktop } = useWindowType();
  return (
    <Card>
      <Flex
        flexDirection={"column"}
        alignItems={isDesktop ? "" : "center"}
        gap={"calc(1.5 * var(--global-spacing))"}
      >
        <Text color={"neutral-2"}>
          A legacy of over {new Date().getFullYear() - 1999} years positions
          IEEE Zagazig University Student Branch (ZSB) as one of the first and
          most impactful in Egypt. We extend our reach beyond Zagazig
          University, serving students nationwide through workshops, events, and
          initiatives that explore technology&apos;s influence on all aspects of
          life, from its latest applications to its intersection with business
          in our signature &quot;MUTEX&quot; event, the Delta region&apos;s
          largest gathering focused on technology and entrepreneurship. Our
          commitment goes beyond technical expertise, fostering well-rounded
          graduates through six managerial committees and three technical
          chapters, alongside the Women In Engineering (WIE) Affinity Group.
          This comprehensive approach creates a professional environment where
          students can cultivate essential skills like leadership, teamwork, and
          management, ensuring they&apos;re prepared for the demands of the
          modern workforce.
        </Text>
        <ButtonLink link="/about" text="More about us" icon={false} />
      </Flex>
    </Card>
  );
}
