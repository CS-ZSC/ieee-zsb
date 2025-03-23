


interface Section {
  title: string;
  links: SectionContentLink[]
}

interface SectionContent {
}

interface SectionContentLink {
  name: string,
  href: string
}

export const sections: Section[] = [
  {
    title: "Quick Access",
    links: [
      {
        name: "Chapters",
        href: ""
      },
      {
        name: "Committees",
        href: ""
      },
      {
        name: "Competitions",
        href: ""
      },
      {
        name: "News",
        href: ""
      },
      {
        name: "About",
        href: ""
      },
    ],
  }, {
    title: "CS",
    links: [
      {
        name: "Front-End",
        href: ""
      },
      {
        name: "Back-End",
        href: ""
      },
      {
        name: "Basic AI",
        href: ""
      },
      {
        name: "Advanced AI",
        href: ""
      },
      {
        name: "Mobile",
        href: ""
      },
      {
        name: "Cyber Security",
        href: ""
      },
    ],
  }, {
    title: "RAS",
    links: [
      {
        name: "Embedded Systems",
        href: ""
      },
      {
        name: "ROS",
        href: ""
      },
      {
        name: "PCB Design",
        href: ""
      },
      {
        name: "Mechanical",
        href: ""
      },

    ],
  }, {
    title: "PES",
    links: [
      {
        name: "Basic Automation ",
        href: ""
      },
      {
        name: "Advanced Automation",
        href: ""
      },
      {
        name: "Basic Distribution",
        href: ""
      },
      {
        name: "Advanced Distribution",
        href: ""
      },
      {
        name: "Smart Home",
        href: ""
      },
      {
        name: "E - Mobility",
        href: ""
      },
      {
        name: "Mechanical",
        href: ""
      },
    ],
  },
]
