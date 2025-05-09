export interface Section {
  id: number;
  heading: string;
  descriptions: string[];
  photo?: string;
  photoDescription?: string;
}

export interface NewsItem {
  id: number;
  title: string;
  description: string;
  dateCreated: string;
  author: string;
  tags: string[];
  mainPhoto: string;
  sections: Section[];
}

export interface NewsData {
  mainTitle: string;
  mainDescription: string;
  highlightedNews: NewsItem;
  news: NewsItem[];
}

export const newsData: NewsData = {
  mainTitle: "News",
  mainDescription: "Discover the latest news about us!",
  highlightedNews: {
    id: 1,
    title: "Hello from CS",
    description:
      "Computer science is a scientific and practical approach specialized in computing and its applications, the aim of which is to study the feasibility, the structure, and a lot of terms, phrases and algorithms that aim to store and process data and then make connections and presentations to access the required information. Computing, specializing in the computer world, and designing computer systems, which is an important field because it is concerned with Web Development, Mobile Development, Cloud, IOT, Machine Learning, Data Analysis, Networking, and many more.",
    dateCreated: "7 May, 2025",
    author: "Omar",
    tags: ["AI", "Backend", "Innovation"],
    mainPhoto: "/Fake-Images/4.jpg",
    sections: [
      {
        id: 1,
        heading: "Front-End Development",
        descriptions: [
          "In the Front-End Development track, we are learning the foundational skills in HTML, CSS, and JavaScript essential for front-end development. We are learning comprehensive techniques for creating responsive and user-friendly web interfaces. We are exploring popular frameworks and libraries like React, Angular, or Vue.js for efficient front-end development. We are understanding methods to enhance web performance, ensuring fast and smooth user experiences. This track provided essential skills in HTML, CSS, JavaScript, responsive design, and modern frameworks, empowering us to create dynamic and engaging user interfaces for web applications.",
          "In the Back-End Development track, we are learning the foundational skills in server-side programming languages like Node.js, Python, or Java essential for back-end development. We are learning comprehensive techniques for designing, managing, and optimizing databases. We are creating robust APIs for communication between front-end and back-end systems. We are exploring advanced methods for securing web applications and implementing authentication mechanisms. This track provided essential skills in server-side programming, database management, API development, and web security, empowering us to build and maintain scalable and secure back-end systems.",
        ],
        photo: "/Fake-Images/5.jpg",
        photoDescription: "Frontend ultimate session.",
      },
      {
        id: 2,
        heading: "Artificial Intelligence",
        descriptions: [
          "In the AI track, we are learning the foundational skills in Python programming essential for AI development. We are learning comprehensive data preparation, cleaning, visualization, and advanced processing techniques. We are creating robust data models and programming machines for autonomous decision-making. We are exploring advanced neural network algorithms enabling autonomous learning and adaptation. This track provided essential skills in Python programming, data analysis, machine learning, and deep learning, empowering us to innovate in AI applications across diverse industries.",
          "In the Mobile Application Development track, we are learning the foundational skills in mobile programming languages like Swift for iOS or Flutter for cross-platform development. We are learning comprehensive techniques for designing intuitive and user-friendly mobile interfaces. We are exploring popular mobile frameworks such as Flutter or React Native for cross-platform development. We are understanding the process of deploying mobile applications to app stores and managing updates. This track provided essential skills in mobile programming, UI design, mobile frameworks, and app deployment, empowering us to develop and launch innovative mobile applications across various platforms.",
        ],
        photo: "/Fake-Images/6.jpg",
        photoDescription: "AI is the future.",
      },
    ],
  },
  news: [
    {
      id: 1,
      title: "Hello from CS",
      description:
        "Computer science is a scientific and practical approach specialized in computing and its applications, the aim of which is to study the feasibility, the structure, and a lot of terms, phrases and algorithms that aim to store and process data and then make connections and presentations to access the required information. Computing, specializing in the computer world, and designing computer systems, which is an important field because it is concerned with Web Development, Mobile Development, Cloud, IOT, Machine Learning, Data Analysis, Networking, and many more.",
      dateCreated: "7 May, 2025",
      author: "Omar",
      tags: ["AI", "Innovation"],
      mainPhoto: "/Fake-Images/4.jpg",
      sections: [
        {
          id: 1,
          heading: "Front-End Development",
          descriptions: [
            "In the Front-End Development track, we are learning the foundational skills in HTML, CSS, and JavaScript essential for front-end development. We are learning comprehensive techniques for creating responsive and user-friendly web interfaces. We are exploring popular frameworks and libraries like React, Angular, or Vue.js for efficient front-end development. We are understanding methods to enhance web performance, ensuring fast and smooth user experiences. This track provided essential skills in HTML, CSS, JavaScript, responsive design, and modern frameworks, empowering us to create dynamic and engaging user interfaces for web applications.",
            "In the Back-End Development track, we are learning the foundational skills in server-side programming languages like Node.js, Python, or Java essential for back-end development. We are learning comprehensive techniques for designing, managing, and optimizing databases. We are creating robust APIs for communication between front-end and back-end systems. We are exploring advanced methods for securing web applications and implementing authentication mechanisms. This track provided essential skills in server-side programming, database management, API development, and web security, empowering us to build and maintain scalable and secure back-end systems.",
          ],
          photo: "/Fake-Images/5.jpg",
          photoDescription: "Frontend ultimate session.",
        },
        {
          id: 2,
          heading: "Artificial Intelligence",
          descriptions: [
            "In the AI track, we are learning the foundational skills in Python programming essential for AI development. We are learning comprehensive data preparation, cleaning, visualization, and advanced processing techniques. We are creating robust data models and programming machines for autonomous decision-making. We are exploring advanced neural network algorithms enabling autonomous learning and adaptation. This track provided essential skills in Python programming, data analysis, machine learning, and deep learning, empowering us to innovate in AI applications across diverse industries.",
            "In the Mobile Application Development track, we are learning the foundational skills in mobile programming languages like Swift for iOS or Flutter for cross-platform development. We are learning comprehensive techniques for designing intuitive and user-friendly mobile interfaces. We are exploring popular mobile frameworks such as Flutter or React Native for cross-platform development. We are understanding the process of deploying mobile applications to app stores and managing updates. This track provided essential skills in mobile programming, UI design, mobile frameworks, and app deployment, empowering us to develop and launch innovative mobile applications across various platforms.",
          ],
          photo: "/Fake-Images/6.jpg",
          photoDescription: "AI is the future.",
        },
      ],
    },
    {
      id: 2,
      title: "Hello from RAS",
      description:
        "Welcome to the oldest Chapter in the IEEE ZSB with the passionate coders, developers and engineering having tracks like frontend, backend, mobile development, basic ai, advanced ai, cybersecurity and game development",
      dateCreated: "7 May, 2025",
      author: "Sherbiny",
      tags: ["Electric Vehicles", "Green Tech"],
      mainPhoto: "/Fake-Images/8.jpg",
      sections: [
        {
          id: 1,
          heading: "Fast Charging Tech",
          descriptions: [
            "New EV models can now charge to 80% in under 10 minutes.",
            "Battery manufacturers are collaborating with automakers to deploy high-speed charging stations.",
          ],
          photo: "/Fake-Images/7.jpg",
          photoDescription:
            "A new generation EV plugged into a high-speed charger.",
        },
        {
          id: 2,
          heading: "Industry Impact",
          descriptions: [
            "Automakers are rapidly adopting this tech to improve road trip convenience.",
            "This shift could significantly reduce range anxiety among consumers.",
          ],
        },
      ],
    },
  ],
};
