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
    href: "/cs",
    path: "/Images/CS/IEEE CS.png",
    whitePath: "/Images/CS/IEEE CS White.png",
    blackPath: "/Images/CS/IEEE CS Black.png",
    alt: "CS Logo",
    identityColor: "#354a5f",
    secondaryColor: "#354a5f33",
  },
  {
    id: 2,
    name: "RAS",
    description: "Robotics & Automation Society Chapter",
    href: "/ras",
    path: "/Images/RAS/IEEE RAS.png",
    whitePath: "/Images/RAS/IEEE RAS White.png",
    blackPath: "/Images/RAS/IEEE RAS Black.png",
    alt: "RAS Logo",
    identityColor: "#f08114",
    secondaryColor: "#f0811433",
  },
  {
    id: 3,
    name: "PES",
    description: "Power & Energy Society Chapter",
    href: "/pes",
    path: "/Images/PES/PES Logo Color.png",
    whitePath: "/Images/PES/PES Logo White.png",
    blackPath: "/Images/PES/PES Logo Black.png",
    alt: "PES Logo",
    identityColor: "#6eb43f",
    secondaryColor: "#6eb43f33",
  },
  {
    id: 4,
    name: "WIE",
    description: "Women In Engineering Affinity Group",
    href: "/wie",
    path: "/Images/WIE/WIE LOGO.png",
    whitePath: "/Images/WIE/WIE Logo White.png",
    blackPath: "/Images/WIE/WIE Logo Black.png",
    alt: "WIE Logo",
    identityColor: "#802c92",
    secondaryColor: "#802c9233",
  },
];

export default Chapters;
