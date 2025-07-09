import type { Position } from "./position";

export interface Activities {
  title: string;
  description: string;
}

export interface CommitteesData {
  id: number;
  name: string;
  hashtag: string;
  description: string;
  image: string;
  goals: string[];
  activities?: Activities[];
  board: Position[];
}

let idCounter: number = 1;

const committeesData: CommitteesData[] = [
  {
    id: idCounter++,
    name: "Ambassadors",
    hashtag: "ambassadors",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus veritatis esse facilis quasi? Earum alias ipsa explicabo molestias delectus adipisci aliquid esse rerum sunt inventore! Harum, vel? Asperiores, alias et.",
    image: "/Fake-Images/8.webp",
    goals: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
    ],
    activities: [
      {
        title: "session",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      },
      { title: "offline session", description: "Reliability" },
    ],
    board: [
      {
        name: "Mariam Fareed",
        position: "Leader",
        avatarSrc: "/Images/board/committees/ambassadors/leader.webp",
        linkedin: "http://linkedin.com/in/mariam-fareed",
        email: "mariam.fareed@ieee-zsb.org ",
      },
      {
        name: "Beshoy Seleman",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/ambassadors/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/beshoy-seleman",
        email: "beshoyselemanzakaria@gmail.com",
      },
      {
        name: "Menna Allah Amr",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/ambassadors/vice-leader-2.webp",
        linkedin: "https://www.linkedin.com/in/menna-allah-amr-mohamed",
        email: "Mennaamr740@gmail.com",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Business Development",
    hashtag: "business-development",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus veritatis esse facilis quasi? Earum alias ipsa explicabo molestias delectus adipisci aliquid esse rerum sunt inventore! Harum, vel? Asperiores, alias et.",
    image: "/Fake-Images/4.webp",
    goals: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
    ],
    activities: [
      {
        title: "session",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      },
      { title: "offline session", description: "Reliability" },
      { title: "offline session", description: "Reliability" },
    ],
    board: [
      {
        name: "Ahmed Raiyah",
        position: "Leader",
        avatarSrc: "/Images/board/committees/business-development/leader.webp",
        linkedin: "http://linkedin.com/in/ahmed-raiyah",
        email: "ahmed.raiyah@ieee-zsb.org",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Event Management",
    hashtag: "event-management",
    description: "Lorem",
    image: "/Fake-Images/4.webp",
    goals: ["test", "tester"],
    activities: [
      { title: "session", description: "hard work" },
      { title: "offline session", description: "Reliability" },
    ],
    board: [
      {
        name: "Mohamed Abdalaziz",
        position: "Leader",
        avatarSrc: "/Images/board/committees/event-management/leader.webp",
        linkedin: "https://www.linkedin.com/in/mohamed-abdalaziz",
        email: "mohamed.abdalaziz@ieee-zsb.org",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Marketing",
    hashtag: "marketing",
    description: "Lorem",
    image: "/Fake-Images/4.webp",
    goals: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
    ],
    activities: [
      {
        title: "session",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error cumque natus placeat nesciunt dolorem eum aliquid doloremque at omnis sint sit molestias, quisquam, magni voluptatibus porro dolore obcaecati veritatis. Vitae.",
      },
      { title: "offline session", description: "Reliability" },
      { title: "offline session", description: "Reliability" },
    ],
    board: [
      {
        name: "Bassant Elslawy",
        position: "Leader",
        avatarSrc: "/Images/board/committees/marketing/leader.webp",
        linkedin: "https://www.linkedin.com/in/bassantelslawy",
        email: "bassant.elslawy@ieee-zsb.org",
      },
      {
        name: "Nouran Yasser",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/marketing/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/nouran-yasser-elsayed",
        email: "nouran.yasser@ieee-zsb.org",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Multimedia",
    hashtag: "multimedia",
    description: "Lorem",
    image: "/Fake-Images/4.webp",
    goals: ["test", "tester"],
    activities: [
      { title: "session", description: "hard work" },
      { title: "offline session", description: "Reliability" },
    ],
    board: [
      {
        name: "Mohamed Eldeeb",
        position: "Leader",
        avatarSrc: "/Images/board/committees/multimedia/leader.webp",
        linkedin: "https://www.linkedin.com",
        email: "mohamed_eldeeb@ieee-zsb.org",
      },
      {
        name: "Ziad Elnemr",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/multimedia/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/ziad-ahmed-529304330",
        email: "ziadelnemr@ieee-zsb.org",
      },
      {
        name: "Mohammad Hijazi",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/multimedia/vice-leader-2.webp",
        linkedin: "https://www.linkedin.com/in/mohammadmhijazi",
        email: "mhijazi@ieee-zsb.org",
      },
    ],
  },
  {
    id: idCounter++,
    name: "Talent & Tech",
    hashtag: "talent&tech",
    description: "Lorem",
    image: "/Fake-Images/4.webp",
    goals: ["test", "tester"],
    activities: [
      { title: "session", description: "hard work" },
      { title: "offline session", description: "Reliability" },
    ],
    board: [
      {
        name: "Ahmed El-ghrabawy",
        position: "Leader",
        avatarSrc: "/Images/board/committees/talent&tech/leader.webp",
        linkedin: "https://www.linkedin.com/in/ahmed-elghrabawy",
        email: "ahmed-elghrabawy@ieee-zsb.org",
      },
      {
        name: "Salsabeel Ahmed",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/talent&tech/vice-leader-1.webp",
        linkedin: "https://www.linkedin.com/in/salsabeel-ahmed-2392b8257",
        email: "salsabeelahmed619@gmail.com",
      },
      {
        name: "Mahmoud Said",
        position: "Vice Leader",
        avatarSrc: "/Images/board/committees/talent&tech/vice-leader-2.webp",
        linkedin: "https://www.linkedin.com/in/0xcode7/",
        email: "mahmoudsaid1704@gmail.com",
      },
    ],
  },
];

export default committeesData;
