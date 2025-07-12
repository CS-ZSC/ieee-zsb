interface Section {
  title: string;
  links: SectionContentLink[];
}

// interface SectionContent {
// }

interface SectionContentLink {
  name: string;
  href: string;
}

export const sections: Section[] = [
  {
    title: "Quick Access",
    links: [
      {
        name: "Committees",
        href: "/committees",
      },
      {
        name: "Events",
        href: "/events",
      },
      {
        name: "News",
        href: "/news",
      },
      {
        name: "About",
        href: "/about",
      },
    ],
  },
  {
    title: "CS",
    links: [
      {
        name: "Front-End",
        href: "/chapters/cs/#frontend",
      },
      {
        name: "Back-End",
        href: "/chapters/cs/#backend",
      },
      {
        name: "Mobile Development",
        href: "/chapters/cs/#mobile-development",
      },
      {
        name: "Basic AI",
        href: "/chapters/cs/#basic-ai",
      },
      {
        name: "Advanced AI",
        href: "/chapters/cs/#advanced-ai",
      },
      {
        name: "Cyber Security",
        href: "/chapters/cs/#cyber-security",
      },
      {
        name: "Game Development",
        href: "/chapters/cs/#game-development",
      },
    ],
  },
  {
    title: "RAS",
    links: [
      {
        name: "Embedded Systems",
        href: "/chapters/ras/#embedded-systems",
      },
      {
        name: "ROS",
        href: "/chapters/ras/#ros",
      },
      {
        name: "PCB Design",
        href: "/chapters/ras/#pcb-design",
      },
      {
        name: "Mechanical",
        href: "/chapters/ras/#mechanical",
      },
    ],
  },
  {
    title: "PES",
    links: [
      {
        name: "Basic Automation",
        href: "/chapters/pes/#basic-automation",
      },
      {
        name: "Advanced Automation",
        href: "/chapters/pes/#advanced-automation",
      },
      {
        name: "Basic Distribution",
        href: "/chapters/pes/#basic-distribution",
      },
      {
        name: "Advanced Distribution",
        href: "/chapters/pes/#advanced-distribution",
      },
      {
        name: "Smart Home",
        href: "/chapters/pes/#smart-home",
      },
      {
        name: "E-Mobility",
        href: "/chapters/pes/#e-mobility",
      },
      {
        name: "Mechanical",
        href: "/chapters/pes/#mechanical",
      },
    ],
  },
];
