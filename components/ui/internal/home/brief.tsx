import React from "react";
import { Text, Flex, Button } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/internal/card";

export default function Brief() {
  const { isDesktop } = useWindowType();
  const router = useRouter();
  return (
    <Card>
      <Flex
        flexDirection={"column"}
        alignItems={isDesktop ? "" : "center"}
        gap={"calc(1.5 * var(--global-spacing))"}
      >
        <Text color={"text-2"}>
          A legacy of over 26 years positions IEEE Zagazig University Student
          Branch (ZSB) as one of the first and most impactful in Egypt. We
          extend our reach beyond Zagazig University, serving students
          nationwide through workshops, events, and initiatives that explore
          technology&apos;s influence on all aspects of life, from its latest
          applications to its intersection with business in our signature
          &quot;MUTEX&quot; event, the Delta region&apos;s largest gathering
          focused on technology and entrepreneurship. Our commitment goes beyond
          technical expertise, fostering well-rounded graduates through six
          managerial committees and three technical chapters, alongside the
          Women In Engineering (WIE) Affinity Group. This comprehensive approach
          creates a professional environment where students can cultivate
          essential skills like leadership, teamwork, and management, ensuring
          they&apos;re prepared for the demands of the modern workforce.
        </Text>
        <Button
          backgroundColor="btn-bg-1"
          color="btn-text-1"
          borderRadius="5px"
          width="fit-content"
          paddingX={"5"}
          paddingY={isDesktop ? "5" : "3"}
          _hover={{ opacity: "0.8" }}
          onClick={() => router.push("/about")}
        >
          More about us
        </Button>
      </Flex>
    </Card>
  );
}
