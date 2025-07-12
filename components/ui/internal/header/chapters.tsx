interface Chapter {
  id: number;
  name: string;
  description: string;
  href: string;
  path: string;
  whitePath: string;
  blackPath: string;
  alt: string;
  identityColor: string;
  secondaryColor: string;
}

const Chapters: Chapter[] = [
  {
    id: 1,
    name: "CS",
    description: "Computer Society Chapter",
    href: "/chapters/cs",
    path: "/Images/CS/IEEE-CS.svg",
    whitePath: "/Images/CS/IEEE-CS-White.png",
    blackPath: "/Images/CS/IEEE-CS-Black.svg",
    alt: "CS Logo",
    identityColor: "cs-1",
    secondaryColor: "cs-2",
  },
  {
    id: 2,
    name: "RAS",
    description: "Robotics & Automation Society Chapter",
    href: "/chapters/ras",
    path: "/Images/RAS/IEEE-RAS.svg",
    whitePath: "/Images/RAS/IEEE-RAS-White.svg",
    blackPath: "/Images/RAS/IEEE-RAS-Black.svg",
    alt: "RAS Logo",
    identityColor: "ras-1",
    secondaryColor: "ras-2",
  },
  {
    id: 3,
    name: "PES",
    description: "Power & Energy Society Chapter",
    href: "/chapters/pes",
    path: "/Images/PES/IEEE-PES.svg",
    whitePath: "/Images/PES/IEEE-PES-White.svg",
    blackPath: "/Images/PES/IEEE-PES-Black.svg",
    alt: "PES Logo",
    identityColor: "pes-1",
    secondaryColor: "pes-2",
  },
  {
    id: 4,
    name: "WIE",
    description: "Women In Engineering Affinity Group",
    href: "/chapters/wie",
    path: "/Images/WIE/WIE-LOGO.svg",
    whitePath: "/Images/WIE/IEEE-WIE-White.svg",
    blackPath: "/Images/WIE/IEEE-WIE-Black.svg",
    alt: "WIE Logo",
    identityColor: "wie-1",
    secondaryColor: "wie-2",
  },
];

export default Chapters;
