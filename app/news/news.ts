export interface Section {
  id: number;
  heading: string;
  descriptions: string[];
  photo?: string;
  photoDescription?: string;
}

export interface NewsItem {
  id: number;
  highlightedItem?: boolean;
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
  news: NewsItem[];
}

let idCounter: number = 1;

export const newsData: NewsData = {
  mainTitle: "News",
  mainDescription: "Discover the latest news about us!",
  news: [
    {
      id: idCounter++,
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
      id: idCounter++,
      highlightedItem: true,
      title: "Penguins Shine in MATE ROV Egypt Competition 2025",
      description:
        "Our team, Penguins, proudly participated in the MATE ROV Egypt Regional Competition at AASTMT and achieved remarkable success, winning 3rd Place in the Pioneer Class among teams from across Egypt, along with the Best Team Spirit and Best Marketing Display awards. This accomplishment came after three months of dedicated effort, with 28 committed engineering students from various departments working together with high levels of passion, collaboration, and perseverance.",
      dateCreated: "26 April, 2025",
      author: "Ahmed Elsherbiny",
      tags: ["Competitions"],
      mainPhoto: "/News/mate-rov/1.png",
      sections: [
        {
          id: 0,
          heading: "Penguins Team Formation",
          descriptions: [
            "Our team is led by a group of dedicated members, each with a clear role. The CEO keeps everyone aligned and focused, making sure things run smoothly. The CTO leads the technical side, helping build and improve the ROV. The CAO keeps us organized, handling schedules and team coordination. The CFO takes care of our budget and works on getting sponsorships. The Accounting Manager manages our financial records and ensures everything is tracked accurately. The PR Leader handles communication with judges, sponsors, and other teams, while the Marketing & Media Leader shares our journey through social media, videos, and design. Together, we make a strong, balanced team.",
            "The technical team is divided into three specialized sub-teams, each responsible for a key area of the ROV's development. The Mechanical Team designs the frame, enclosure, and buoyancy, ensuring the ROV is both durable and functional. The Electrical Team handles the power system, circuits, sensors, and PCB containment, ensuring the ROV operates efficiently and reliably. The Software Team focuses on image processing with the ROV’s cameras, developing the GUI for user-friendly operation, and creating control systems to enhance the ROV’s maneuverability and performance. Together, these three teams form the backbone of the ROV's technical capabilities.",
          ],
          photo: "/News/mate-rov/2.png",
          photoDescription: "Penguins Team.",
        },
        {
          id: 1,
          heading: "What is Egypt ROV competition?",
          descriptions: [
            "MATE Egypt ROV competition is an annual regional competition held at the Arab Academy for Science, Technology and Maritime Transport (AASTMT) for undergraduates interested in remotely operated underwater vehicles (ROVs). These ROVs perform specific underwater missions according to the competition rules and guidelines. The competition was first launched in 2012 by Delta Square International LLC in association with AASTMT.",
            "This competition serves as a regional qualifier for the international competition organized by the Marine Advanced Technology Education (MATE) Center and MATE Inspiration for Innovation, where winning teams represent Egypt at the MATE International ROV Competition.",
          ],
          photo: "/News/mate-rov/3.png",
          photoDescription: "Penguins Awards",
        },
        {
          id: 2,
          heading: "What is ROV?",
          descriptions: [
            "A Remotely Operated underwater Vehicle (ROV) is a tethered mobile robot commonly used to perform dangerous missions in submarine industries such as offshore hydrocarbon extraction and subsea installations, as well as in military and scientific services. Due to its sophisticated design, an ROV can maneuver efficiently in deep ocean environments.",
            "ROVs use thrusters for movement and rely on sensory systems to make informed decisions during missions. These systems may include LIDAR, SONAR, or cameras to provide vision and spatial awareness.",
          ],
        },
      ],
    },
    {
      id: idCounter++,
      title: "Robotiva Finals Triumph",
      description:
        "Our IEEE RAS chapter sent five teams to the prestigious Robotiva competition, and all five teams made it to the finals! With SOUL winning 1st place and Intellibots securing 2nd, RAS once again proved that dedication, teamwork, and relentless learning lead to excellence. This victory isn't just a trophy—it's a statement of what we stand for.",
      dateCreated: "27 Feb, 2025",
      author: "Marwan Tamer",
      tags: ["RAS", "Robotiva", "Competitions"],
      mainPhoto: "/Fake-Images/5.jpg",
      sections: [
        {
          id: 0,
          heading: "A Competition That Put Us to the Test",
          descriptions: [
            "Robotiva wasn’t just any competition—it was a proving ground for creativity, engineering skill, and realworld problem solving. The challenge tasked participants with building a fully functional robot that could handle three distinct missions: line following, obstacle avoidance, and a pick-and-place task using a robotic arm. Each functionality required tight integration between hardware and software, and every team had to deal with sensor calibration issues, motor control precision, path-planning logic, and gripper mechanics.",
            "From electrical noise on sensor inputs to debugging edge cases in autonomous logic, the teams faced wave after wave of technical hurdles. But as always—this is RAS. We don’t back down from problems; we grow stronger because of them. Each team worked tirelessly, sharing designs, testing day and night, and fine-tuning their code to meet competition standards. The result? Five finalist teams from one chapter—a statistic that speaks volumes.",
          ],
        },
        {
          id: 1,
          heading: "Meet the Winners: SOUL and Intellibots",
          descriptions: [
            "Among the five RAS finalist teams, two rose above the rest. SOUL, led by a core of experienced members, demonstrated flawless execution across all three challenges. Their robot maintained steady performance with highly optimized PID control and an impressively stable robotic arm mechanism. Their design was not just technically superior, but also elegant—earning praise from both judges and spectators alike",
            "Intellibots , on the other hand, stood out for their advanced path-planning algorithms and robust error-handling capabilities. Their robot showed remarkable resilience under pressure, with quick adaptations mid-run that reflected the team’s deep understanding of both hardware constraints and real-time software logic. These two victories mark a historical achievement for our chapter and set a new benchmark for future competitions.",
          ],
          photo: "/News/robotiva/soul.jpg",
          photoDescription: "Soul Team",
        },
        {
          id: 2,
          heading: "More Than Just Winners",
          descriptions: [
            "While the podium finishes are worth celebrating, the true success lies in the journey. Every RAS participant walked away with real engineering experience—learning not just how to build robots, but how to work under pressure, debug collaboratively, and face failure with determination.",
            "From late-night brainstorming sessions to emergency soldering repairs, this experience became a high-impact learning ground. These lessons were shared throughout the chapter—transforming mistakes into mentorship and individual struggles into collective growth. The effects were clear during later events like The Rockies Final Competition, where the influence of Robotiva showed in the confidence, preparedness, and innovation of our members.",
          ],
          photo: "/News/robotiva/intellibots.jpg",
          photoDescription: "Intellibots Team",
        },
      ],
    },
    {
      id: idCounter++,
      title: "Introducing Our First-Ever PCB Track",
      description:
        "This season marks the launch of our brand-new PCB track—a major milestone for the IEEE RAS chapter. Recognizing the growing importance of PCB design in robotics and hardware development, we opened this track to empower our members with vital skills needed to build complete electronic systems.",
      dateCreated: "4 Mar, 2025",
      author: "Marwan Tamer",
      tags: ["RAS", "PCB", "New Track"],
      mainPhoto: "/Fake-Images/7.jpg",
      sections: [
        {
          id: 0,
          heading: "Why a PCB Track",
          descriptions: [
            "As our chapter took on increasingly complex robotics challenges, especially in competitions like ROV and autonomous navigation, it became clear that we needed to strengthen our internal hardware capabilities. Software and mechanical designs alone couldn’t complete the picture—real-world systems rely heavily on robust, compact, and optimized electronic boards to tie everything together. This need gave birth to our PCB track.",
            "The track was envisioned as a space for members to master circuit theory, schematic design, PCB layout, and even delve into aspects like electromagnetic compatibility and thermal management. By launching it, we unlocked new potential: members can now design and fabricate custom boards instead of relying on off-the-shelf components, giving our chapter a major competitive advantage in building efficient, mission-ready robotic systems.",
          ],
        },
        {
          id: 1,
          heading: "Looking Ahead",
          descriptions: [
            "This track isn’t just a one-time experiment. It’s an investment in our future. We aim to integrate PCB designers into every major project—from autonomous bots to underwater vehicles—ensuring close collaboration with embedded systems and mechanical teams.",
            "Over time, we plan to introduce advanced modules such as multilayer PCB design, high-speed signal handling, and power electronics. With mentorship, real-world use cases, and access to fabrication resources, this track will empower members to become fully capable electronics engineers, contributing to competitions and even entrepreneurial initiatives from within the chapter.",
          ],
        },
      ],
    },
    {
      id: idCounter++,
      title: "Hands-On PCB Workshops: From Schematic to Soldering",
      description:
        "To support our new PCB track, we conducted a series of practical workshops that walked members through the complete process of electronics development—from schematics to final soldered prototypes. These workshops were a major stepping stone in cultivating in-house hardware expertise in the IEEE RAS chapter.",
      dateCreated: "1 May, 2025",
      author: "Marwan Tamer",
      tags: ["RAS", "PCB", "Workshops"],
      mainPhoto: "/Fake-Images/8.jpg",
      sections: [
        {
          id: 0,
          heading: "Session Content",
          descriptions: [
            "The workshop series was carefully structured to simulate the full product design lifecycle. We started with an introduction to schematic design using Altium Designer, where members learned how to build circuits using verified libraries, manage net connections, and plan their power distribution logic. The workshops then progressed to PCB layout, where topics like trace routing strategies, ground plane optimization, and design rules for manufacturability (DRM) were tackled hands-on.",
            "Members explored both single-layer and double-layer board configurations, gained exposure to layout tools and DRC checks, and understood how board geometry affects signal integrity and thermal performance. Each participant worked on designing a functioning circuit—such as a sensor interface, power regulator module, or basic microcontroller breakout. After completing the design, we simulated manufacturing constraints and prepared files for fabrication. The sessions concluded with real soldering practice using those very boards, giving members tactile experience in hardware assembly and debugging.",
          ],
        },
        {
          id: 1,
          heading: "Member Experience",
          descriptions: [
            "For many participants, this was their first time moving from theory to a fully fabricated electronic board. The excitement of seeing their designs come to life—physically soldered and powered—was unmatched. They encountered and overcame real-world problems like component selection mismatches, pad misalignments, and short-circuit detection.",
            "This hands-on journey didn’t just teach design principles; it also fostered critical engineering soft skills such as documentation, revision control, teamwork, and debugging under time constraints. With these workshops, we created the first generation of homegrown PCB designers in the chapter, laying a foundation for future innovation and leadership in hardware development.",
          ],
        },
      ],
    },
    {
      id: idCounter++,
      title: "Embedded Systems Masterclass with Eng. Mamdouh",
      description:
        "To push our embedded systems learning to the next level, we invited Eng. Mamdouh, a senior embedded software engineer at Arrow Electronics, to host a deep-dive session into practical embedded systems development. This was one of the most anticipated events in our technical calendar, bridging the gap between academic knowledge and real-world embedded applications.",
      dateCreated: "19 April, 2025",
      author: "Marwan Tamer",
      tags: ["RAS", "Embedded Systems", "Guest Speaker"],
      mainPhoto: "/News/embedded-session/1.jpg",
      sections: [
        {
          id: 0,
          heading: "Industry Insight from Arrow Electronics",
          descriptions: [
            "Eng. Mamdouh brought a wealth of industry experience from his work in embedded product development and microcontroller integration at Arrow Electronics. His session didn’t just focus on textbooks—it was built on years of real-world firmware development, system debugging, and embedded software optimization.",
            "He walked our members through the life cycle of an embedded project: starting from system requirement analysis, hardware-software interfacing, RTOS basics, and moving up to testing strategies for real-time systems. He also shared stories from major commercial projects, highlighting how embedded systems form the backbone of devices across automotive, industrial, and IoT applications.",
          ],
        },
        {
          id: 1,
          heading: "What Our Members Gained",
          descriptions: [
            "Participants were deeply engaged throughout the session. They asked questions about low-level memory management, interrupt-driven design, and integrating embedded systems with high-level applications. Eng. Mamdouh responded with clear, actionable explanations—demonstrating debugging tools, IDE tricks, and peripheral handling strategies that are often overlooked in university curriculums.",
            "By the end of the session, members not only understood how embedded systems operate in professional environments, but also walked away with a clearer roadmap on how to grow into embedded engineering careers. This session served as both inspiration and a technical boost, energizing our track as we prepare for more advanced projects and national competitions",
          ],
        },
      ],
    },
  ],
};
