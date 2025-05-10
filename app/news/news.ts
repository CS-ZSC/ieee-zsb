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
    id: 3,
    title: "Penguins Shine in MATE ROV Egypt Competition 2025",
    description:
      "Our team, Penguins, proudly participated in the MATE ROV Egypt Regional Competition at AASTMT and achieved remarkable success, winning 3rd Place in the Pioneer Class among teams from across Egypt, along with the Best Team Spirit and Best Marketing Display awards. This accomplishment came after three months of dedicated effort, with 28 committed engineering students from various departments working together with high levels of passion, collaboration, and perseverance.",
    dateCreated: "26 April, 2025",
    author: "Ahmed Elsherbiny",
    tags: ["General", "Competitions", "Innovation"],
    mainPhoto: "/News/mate-rov/1.png",
    sections: [
      {
        id: 1,
        heading: "Penguins Team Formation",
        descriptions: [
          "Our team is led by a group of dedicated members, each with a clear role. The CEO keeps everyone aligned and focused, making sure things run smoothly. The CTO leads the technical side, helping build and improve the ROV. The CAO keeps us organized, handling schedules and team coordination. The CFO takes care of our budget and works on getting sponsorships. The Accounting Manager manages our financial records and ensures everything is tracked accurately. The PR Leader handles communication with judges, sponsors, and other teams, while the Marketing & Media Leader shares our journey through social media, videos, and design. Together, we make a strong, balanced team.",
          "The technical team is divided into three specialized sub-teams, each responsible for a key area of the ROV's development. The Mechanical Team designs the frame, enclosure, and buoyancy, ensuring the ROV is both durable and functional. The Electrical Team handles the power system, circuits, sensors, and PCB containment, ensuring the ROV operates efficiently and reliably. The Software Team focuses on image processing with the ROV’s cameras, developing the GUI for user-friendly operation, and creating control systems to enhance the ROV’s maneuverability and performance. Together, these three teams form the backbone of the ROV's technical capabilities.",
        ],
        photo: "/News/mate-rov/2.png",
        photoDescription: "Penguins Team.",
      },
      {
        id: 2,
        heading: "Artificial Intelligence",
        descriptions: [
          "In the AI track, we are learning the foundational skills in Python programming essential for AI development. We are learning comprehensive data preparation, cleaning, visualization, and advanced processing techniques. We are creating robust data models and programming machines for autonomous decision-making. We are exploring advanced neural network algorithms enabling autonomous learning and adaptation. This track provided essential skills in Python programming, data analysis, machine learning, and deep learning, empowering us to innovate in AI applications across diverse industries.",
          "In the Mobile Application Development track, we are learning the foundational skills in mobile programming languages like Swift for iOS or Flutter for cross-platform development. We are learning comprehensive techniques for designing intuitive and user-friendly mobile interfaces. We are exploring popular mobile frameworks such as Flutter or React Native for cross-platform development. We are understanding the process of deploying mobile applications to app stores and managing updates. This track provided essential skills in mobile programming, UI design, mobile frameworks, and app deployment, empowering us to develop and launch innovative mobile applications across various platforms.",
        ],
        photo: "/News/mate-rov/3.png",
        photoDescription: "Penguins Awards",
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
      author: "Omar Salama",
      tags: ["CS", "Innovation"],
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
      author: "Ahmed Elsherbiny",
      tags: ["RAS"],
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
    {
      id: 3,
      title: "Penguins Shine in MATE ROV Egypt Competition 2025",
      description:
        "Our team, Penguins, proudly participated in the MATE ROV Egypt Regional Competition at AASTMT and achieved remarkable success, winning 3rd Place in the Pioneer Class among teams from across Egypt, along with the Best Team Spirit and Best Marketing Display awards. This accomplishment came after three months of dedicated effort, with 28 committed engineering students from various departments working together with high levels of passion, collaboration, and perseverance.",
      dateCreated: "26 April, 2025",
      author: "Ahmed Elsherbiny",
      tags: ["General", "Competitions", "Innovation"],
      mainPhoto: "/News/mate-rov/1.png",
      sections: [
        {
          id: 1,
          heading: "Penguins Team Formation",
          descriptions: [
            "Our team is led by a group of dedicated members, each with a clear role. The CEO keeps everyone aligned and focused, making sure things run smoothly. The CTO leads the technical side, helping build and improve the ROV. The CAO keeps us organized, handling schedules and team coordination. The CFO takes care of our budget and works on getting sponsorships. The Accounting Manager manages our financial records and ensures everything is tracked accurately. The PR Leader handles communication with judges, sponsors, and other teams, while the Marketing & Media Leader shares our journey through social media, videos, and design. Together, we make a strong, balanced team.",
            "The technical team is divided into three specialized sub-teams, each responsible for a key area of the ROV's development. The Mechanical Team designs the frame, enclosure, and buoyancy, ensuring the ROV is both durable and functional. The Electrical Team handles the power system, circuits, sensors, and PCB containment, ensuring the ROV operates efficiently and reliably. The Software Team focuses on image processing with the ROV’s cameras, developing the GUI for user-friendly operation, and creating control systems to enhance the ROV’s maneuverability and performance. Together, these three teams form the backbone of the ROV's technical capabilities.",
          ],
          photo: "/News/mate-rov/2.png",
          photoDescription: "Penguins Team.",
        },
        {
          id: 2,
          heading: "Artificial Intelligence",
          descriptions: [
            "In the AI track, we are learning the foundational skills in Python programming essential for AI development. We are learning comprehensive data preparation, cleaning, visualization, and advanced processing techniques. We are creating robust data models and programming machines for autonomous decision-making. We are exploring advanced neural network algorithms enabling autonomous learning and adaptation. This track provided essential skills in Python programming, data analysis, machine learning, and deep learning, empowering us to innovate in AI applications across diverse industries.",
            "In the Mobile Application Development track, we are learning the foundational skills in mobile programming languages like Swift for iOS or Flutter for cross-platform development. We are learning comprehensive techniques for designing intuitive and user-friendly mobile interfaces. We are exploring popular mobile frameworks such as Flutter or React Native for cross-platform development. We are understanding the process of deploying mobile applications to app stores and managing updates. This track provided essential skills in mobile programming, UI design, mobile frameworks, and app deployment, empowering us to develop and launch innovative mobile applications across various platforms.",
          ],
          photo: "/News/mate-rov/3.png",
          photoDescription: "Penguins Awards",
        },
      ],
    },
    {
      id: 4,
      title: "RAS Workshop: Robotics for Beginners",
      description:
        "Our RAS chapter successfully conducted the 'Robotics for Beginners' workshop, introducing participants to the fundamentals of robotics through engaging sessions and hands-on practice. Over two days, attendees explored sensors, actuators, and microcontrollers, building simple robots and gaining valuable insights into embedded systems. The event fostered teamwork, curiosity, and innovation, inspiring many students to pursue further learning in robotics.",
      dateCreated: "2 May, 2025",
      author: "Ahmed Elsherbiny",
      tags: ["RAS"],
      mainPhoto: "/News/mate-rov/1.png",
      sections: [
        {
          id: 1,
          heading: "Workshop Overview",
          descriptions: [
            "The workshop began with an introduction to the basics of robotics, covering essential components such as sensors, motors, microcontrollers, and the logic behind robotic movement. Through engaging presentations and interactive demonstrations, participants were able to grasp the core concepts in a short time.",
            "Participants were divided into teams, allowing for collaborative learning and practical application. Using Arduino-based kits, they built simple line-following and obstacle-avoiding robots. Mentors from the RAS team guided each group, answering questions and helping troubleshoot technical issues.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Hands-on robot building session.",
        },
        {
          id: 2,
          heading: "Impact and Future Plans",
          descriptions: [
            "The success of this workshop highlighted the growing interest in robotics among students. Many participants expressed a desire to continue learning and join the RAS chapter’s upcoming projects and competitions.",
            "Moving forward, the RAS team plans to launch an intermediate robotics track, focusing on autonomous systems, computer vision, and participation in national robotics competitions. The team is committed to building a strong robotics community within the university.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Group photo with participants and mentors.",
        },
      ],
    },
    {
      id: 5,
      title: "CS Bootcamp: Full-Stack Web Development",
      description:
        "The CS committee recently held a two-week bootcamp focused on full-stack web development. Participants were guided through modern technologies including React, Node.js, MongoDB, and REST APIs. By the end, each team had deployed a fully functional web application, gaining practical experience in team-based software development.",
      dateCreated: "29 April, 2025",
      author: "Ahmed Elsherbiny",
      tags: ["CS"],
      mainPhoto: "/News/mate-rov/1.png",
      sections: [
        {
          id: 1,
          heading: "Comprehensive Curriculum",
          descriptions: [
            "The bootcamp covered HTML, CSS, and JavaScript fundamentals, followed by React for frontend development. Participants learned how to structure modern frontend applications and manage component state effectively.",
            "Backend sessions introduced Express.js and MongoDB, teaching students how to build RESTful APIs, manage databases, and implement user authentication.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Team coding session.",
        },
        {
          id: 2,
          heading: "Demo Day and Outcomes",
          descriptions: [
            "Teams showcased their projects on the final day, receiving feedback from a panel of experienced developers. Projects included task managers, event planning tools, and educational platforms.",
            "The bootcamp concluded with certificates and internship opportunities for outstanding performers.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Project presentations.",
        },
      ],
    },
    {
      id: 6,
      title: "PES Energy Hackathon 2025",
      description:
        "The PES chapter hosted a 48-hour Energy Hackathon, inviting students to develop innovative solutions for sustainable energy challenges. With themes like smart grids, renewable integration, and energy-efficient systems, the event encouraged collaboration and real-world problem-solving.",
      dateCreated: "21 April, 2025",
      author: "Ahmed Elsherbiny",
      tags: ["PES"],
      mainPhoto: "/News/mate-rov/1.png",
      sections: [
        {
          id: 1,
          heading: "Hackathon Themes and Mentorship",
          descriptions: [
            "Participants could choose from several energy-focused challenges. Mentors from industry and academia guided teams through ideation, feasibility analysis, and prototyping.",
            "Workshops on IoT, renewable energy data analysis, and simulation tools like MATLAB and Simulink supported the development process.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Mentorship in action.",
        },
        {
          id: 2,
          heading: "Awards and Recognition",
          descriptions: [
            "Winning teams were recognized for their innovation and technical execution. The top solution proposed an AI-powered load management system for small-scale solar farms.",
            "Participants left the event with new skills, contacts, and ideas for future energy projects.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Winners with judges.",
        },
      ],
    },
    {
      id: 7,
      title: "IEEE Committees Induction Day 2025",
      description:
        "To welcome new members and introduce them to IEEE's vibrant community, the Committees organized an Induction Day featuring presentations, networking sessions, and interactive booths for each committee. New students explored opportunities in technical development, event planning, and leadership roles.",
      dateCreated: "15 April, 2025",
      author: "Ahmed Elsherbiny",
      tags: ["Committees"],
      mainPhoto: "/News/mate-rov/1.png",
      sections: [
        {
          id: 1,
          heading: "Interactive Booths and Presentations",
          descriptions: [
            "Each committee prepared booths showcasing their recent activities and future plans. Attendees interacted with seniors, learned about past events, and signed up for interviews.",
            "Live presentations introduced the structure of IEEE, benefits of joining, and the impact of student-led initiatives.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Committee booths.",
        },
        {
          id: 2,
          heading: "Team Building and Future Planning",
          descriptions: [
            "New members participated in icebreaker games and group activities designed to foster team spirit. Organizers emphasized collaboration, creativity, and communication as key values for success in IEEE.",
            "Future training sessions and project kickoffs were announced to keep the momentum going.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "New members networking.",
        },
      ],
    },
    {
      id: 8,
      title: "WIE Panel: Women Leading Innovation",
      description:
        "WIE organized a thought-provoking panel titled 'Women Leading Innovation,' bringing together engineers, researchers, and tech leaders to share their experiences and discuss the importance of diversity in engineering. The session highlighted the roles of women in advancing technology and breaking stereotypes.",
      dateCreated: "1 May, 2025",
      author: "Ahmed Elsherbiny",
      tags: ["WIE"],
      mainPhoto: "/News/mate-rov/1.png",
      sections: [
        {
          id: 1,
          heading: "Panel Highlights",
          descriptions: [
            "Speakers discussed their career journeys, challenges faced, and strategies to overcome them. Topics included leadership in STEM, fostering inclusivity, and promoting female role models in tech.",
            "The session emphasized the importance of mentorship and building supportive communities for aspiring women engineers.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "WIE panel in session.",
        },
        {
          id: 2,
          heading: "Student Reflections",
          descriptions: [
            "Attendees shared their takeaways, noting increased motivation and confidence to pursue leadership roles and tech initiatives.",
            "The event concluded with networking opportunities, encouraging collaboration across gender and disciplines.",
          ],
          photo: "/News/mate-rov/1.png",
          photoDescription: "Networking after the panel.",
        },
      ],
    },
  ],
};
