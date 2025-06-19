import { Text } from "@chakra-ui/react";
import React from "react";

export default function About() {
  return (
    <Text color={"text-6"} paddingX="var(--card-padding)">
      With over {new Date().getFullYear() - 1999} years of impactful experience,
      the IEEE Zagazig University Student Branch (ZSB) stands as one of the
      first and most influential branches in Egypt. While based at Zagazig
      University, our influence extends nationwide through a variety of
      workshops, events, and initiatives that explore the evolving role of
      technology in all aspects of life. Our flagship event, MUTEX, is the Delta
      region’s largest gathering focused on technology and
      entrepreneurship—showcasing the powerful connection between innovation and
      business. We are committed to more than just technical excellence. Through
      six managerial committees, three technical chapters, and the Women In
      Engineering (WIE) Affinity Group, we provide students with a dynamic
      environment to develop key skills in leadership, teamwork, and project
      management—ensuring they’re ready to meet the challenges of the modern
      workforce.
    </Text>
  );
}
