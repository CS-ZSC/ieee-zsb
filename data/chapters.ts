import { CommitteesData } from "./committees";
import { Position } from "./position";

export type TrackData = CommitteesData;

export interface SeasonData {
  year: number;
  summary: string[];
}

export interface ChapterData {
  id: number;
  short_name: string;
  long_name: string;
  logo: string;
  color_scheme_1: string;
  color_scheme_2: string;
  description: {
    about: string;
    vision: string;
    mission: string;
  };
  board: Position[];
  tracks?: TrackData[];
  seasons: SeasonData[];
}

let id = 0;
let trackId = 0;

export const chaptersData: ChapterData[] = [
  {
    id: ++id,
    short_name: "CS",
    long_name: "Computer Society",
    logo: "/Images/CS/IEEE-CS-White.svg",
    color_scheme_1: "cs-1",
    color_scheme_2: "cs-2",
    description: {
      about:
        "The IEEE Computer Society Chapter is a student-led technical chapter operating under the IEEE Zagazig Student Branch. As part of the world's leading organization for computer science and engineering, we provide a hands-on platform for students passionate about technology. From web development and mobile apps to artificial intelligence, machine learning, and cybersecurity, our chapter empowers members to explore and apply emerging technologies. Through workshops, hackathons, open-source projects, and coding competitions, we bridge the gap between classroom learning and practical experience.",
      vision:
        "To be a leading student driven hub for technological exploration, creativity, and collaboration where innovation thrives and technical skills are transformed into real world impact.",
      mission:
        "We aim to create an active and friendly space where students can learn modern tech skills, work on real projects, and connect with others who share the same passion. We organize practical workshops and team activities to help students grow, be creative, and get ready for future jobs in the tech world.",
    },
    board: [
      {
        name: "Aya Mahmoud",
        position: "Chairperson",
        avatarSrc: "/Images/board/chapters/cs/chairperson.webp",
        linkedin: "https://www.linkedin.com/in/aya-mahmoud-850a0a223",
        email: "aya_mahmoud@ieee-zsb.org",
      },
      {
        name: "Mohamed Emad",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/cs/vice-chairperson-1.webp",
        linkedin: "https://www.linkedin.com/in/hulxv",
        email: "mohamed.elsawy@ieee-zsb.org",
      },
      {
        name: "Essam Shenhab",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/cs/vice-chairperson-2.webp",
        linkedin: "https://www.linkedin.com/in/essam-shenhab/",
        email: "essam.shenhab@ieee-zsb.org",
      },
    ],
    tracks: [
      {
        id: ++trackId,
        name: "Front-End",
        hashtag: "frontend",
        description:
          "Frontend development focuses on building the user-facing part of websites and applications, ensuring they are visually appealing, responsive, and intuitive. This track provides a solid foundation in web development and advances to building fully functional applications. It includes comprehensive training in the Tailwind CSS library for efficient and modern UI design and focuses on Next.js, built on React.js, to develop scalable single-page applications (SPAs) with an emphasis on performance, accessibility, and best practices.",
        image: "/Tracks/CS/frontend.webp",
        goals: [
          "Master the use of JavaScript to build dynamic, interactive, and efficient web features",
          "Learn and apply the Tailwind CSS library to design modern, responsive, and accessible user interfaces",
          "Build high-quality single-page applications (SPAs) using Next.js and React.js, while understanding the differences between rendering strategies and when to use such as Client-Side Rendering (CSR), Server-Side Rendering (SSR), Static Site Generation (SSG), and Incremental Static Regeneration (ISR) in Next.js",
          "Practice integrating third-party APIs to extend application functionality and improve user experiences",
        ],
        activities: [
          {
            title: "Mini Projects",
            description:
              "Create mini games and applications using JavaScript to strengthen problem solving skills and deepen understanding of the language.",
          },
          {
            title: "Project-Based Learning",
            description:
              "Work on real world projects to gain hands-on experience and apply learned concepts.",
          },
          {
            title: "Collaboration Sessions",
            description:
              "Participate in both offline and online sessions to discuss project progress, solve challenges, and collaborate effectively.",
          },
        ],
        board: [
          {
            name: "Ahmed Elsherbiny",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/frontend/head.webp",
            linkedin: "https://www.linkedin.com/in/ahmedelsherbiny74/",
            email: "ahmedelsherbiny7474@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Back-End",
        hashtag: "backend",
        description:
          "Welcome to the Plumbers Alley — a place where you can learn something new or take your existing skills to the next level. Here, you'll work on exciting projects that bridge real-world needs in imaginative scenarios, helping you perform at your best. See you in the next adventure, passionate plumber! ",
        image: "/Tracks/CS/backend.webp",
        goals: [
          "Become a Backend Engineer with strong foundations — not only skilled at the job but also has fallen in love with his work",
          "Learn & Practice on Database language and how it works",
          "Get your hands dirty with two different frameworks: one opinionated and one unopinionated",
        ],
        activities: [
          {
            title: "Doing Research",
            description:
              "Stay aware of the theoretical aspects of each technology at every milestone ",
          },
          {
            title: "Offline Session",
            description:
              "Discuss the completed projects in a professional and structured manner",
          },
        ],
        board: [
          {
            name: "Khaled Mahmoud",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/backend/head.webp",
            linkedin: "https://www.linkedin.com/in/khaled-mahmoud-",
            email: "khaild22k12m71f@gmail.com",
          },
          {
            name: "Asmaa Saleh",
            position: "Vice Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/backend/vice-head-1.webp",
            linkedin: "https://www.linkedin.com/in/asmaa-saleh185",
            email: "asmaasaleh185@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Mobile Development",
        hashtag: "mobile-development",
        description:
          "Welcome to the world of Mobile Development — where creativity meets performance. This journey is designed to equip you with the essential skills needed to build polished, user-friendly mobile applications that perform seamlessly across devices. Whether you're crafting smooth interfaces or integrating complex APIs, this track will take your development career to the next level.",
        image: "/Tracks/CS/mobile-development.webp",
        goals: [
          "Build a strong foundation in both Android and iOS development using modern tools and languages",
          "Gain hands-on experience with Flutter and understand how cross-platform frameworks operate",
          "Learn to structure scalable mobile applications and follow clean architecture principles",
        ],
        activities: [
          {
            title: "Session",
            description:
              "Learn about mobile development concepts, tools, and ecosystems through interactive technical sessions",
          },
          {
            title: "Offline Session",
            description:
              "Discuss the completed projects in a professional and structured manner",
          },
        ],
        board: [
          {
            name: "Ibrahim Eid",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/mobile-dev/head.webp",
            linkedin: "https://www.linkedin.com/in/ibrahimeideng",
            email: "ebrahimeid1134@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Basic AI",
        hashtag: "basic-ai",
        description:
          "This committee helps members explore the field of data analysis and understand how data can be turned into useful information. You'll learn how to collect, clean, and study data to find patterns and make smart decisions. Through hands-on projects, you'll use tools like Excel or Python to work with real data. The team also shares knowledge through research, discussions, and regular practice sessions. It's a great way to build strong data analysis skills and solve real-world problems using data.",
        image: "/Tracks/CS/basic-ai.webp",
        goals: [
          "Get your hands on different types of tools: one focused on spreadsheets, the other on code-based analysis.",
          "Become a Data Analyst with strong foundations — not just good at the work, but truly passionate about turning data into insights.",
        ],
        activities: [
          {
            title: "Dive into sheets",
            description:
              "try and use new datasets to get them clean and enhance the software skills",
          },
          {
            title: "Offline Session",
            description:
              "Discuss the completed projects in a structured manner and how to improve it",
          },
        ],
        board: [
          {
            name: "Ali Dosoky",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/basic-ai/head.webp",
            linkedin: "https://www.linkedin.com/in/ali-dosoqi/",
            email: "amjdos0190edu@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Advanced AI",
        hashtag: "advanced-ai",
        description:
          "The Advanced AI Track offers a comprehensive journey designed to equip participants with the essential knowledge and practical skills required to excel in Artificial Intelligence. Starting with foundational data preprocessing techniques and essential mathematical concepts, learners progressively delve into supervised and unsupervised machine learning methods, mastering algorithms and models widely utilized in the industry. Participants will then explore advanced topics in deep learning, including Artificial Neural Networks (ANN), Convolutional Neural Networks (CNN), and Recurrent Neural Networks (RNN). The track further provides specialized training in cutting-edge Computer Vision applications, from image classification to facial recognition, and Natural Language Processing (NLP), covering tasks such as text classification, sentiment analysis, and chatbot creation. Each stage includes dedicated hands-on projects, enabling learners to consolidate their knowledge and build practical, real-world expertise.",
        image: "/Tracks/CS/advanced-ai.webp",
        goals: [
          "Equip learners with essential AI skills",
          "Bridge theory and practical applications",
          "Prepare industry-ready professionals",
          "Foster analytical and problem-solving skills",
        ],
        activities: [
          {
            title: "Hands-on Workshops",
            description:
              "Interactive coding labs focused on real-world AI projects",
          },
          {
            title: "Project-Based Learning",
            description:
              "Applying theory through structured end-to-end projects",
          },
          {
            title: "Collaborative Tasks",
            description:
              "Team-oriented assignments enhancing problem-solving and teamwork",
          },
        ],
        board: [
          {
            name: "Ahmed Almohamdy",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/advanced-ai/head.webp",
            linkedin: "https://www.linkedin.com/in/ahmedalmohamdy/",
            email: "ahmedalmohamdy.work@gmail.com",
          },
          {
            name: "Ahmed Sharaf",
            position: "Vice Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/advanced-ai/vice-head-1.webp",
            linkedin: "https://www.linkedin.com/in/ahmedsharaf9/",
            email: "ahmed.sharaf.connect@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Cyber Security",
        hashtag: "cyber-security",
        description:
          "The Cyber Security Committee focuses on building awareness, skills, and hands-on knowledge in the field of cyber security. We aim to educate students through practical training and real-world applications that go beyond traditional classroom learning.",
        image: "/Tracks/CS/cyber-security.webp",
        goals: [
          "Deliver hands-on Cyber Security training sessions throughout the semester to empower students with real skills.",
          "Promote awareness about the importance of digital security across the university and local tech community.",
          "Build a strong foundation in Cyber Security for students interested in ethical hacking, defense systems, and secure programming.",
        ],
        activities: [
          {
            title: "Intro to Cyber Security",
            description:
              "Educational sessions that cover the basics of cyber security with an emphasis on practical application.",
          },
          {
            title: "Capture the Flag (CTF) Practice",
            description:
              "Hands-on challenges to help members apply their skills in real-world hacking simulations and problem-solving.",
          },
          {
            title: "Security Audits Workshops",
            description:
              "Interactive workshops teaching students how to analyze and improve security in systems and applications.",
          },
        ],
        board: [
          {
            name: "Ahmed Ali",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/cyber-security/head.webp",
            linkedin: "https://www.linkedin.com/in/ahmed-ali-abd-elrahman",
            email: "aali571110@gmail.com",
          },
          {
            name: "Sayed Ahmed",
            position: "Vice Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/cyber-security/vice-head-1.webp",
            linkedin: "https://www.linkedin.com/in/elsayed-ahmed-elsayed",
            email: "sayedahmed.ieee.25@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Game Development",
        hashtag: "game-development",
        description:
          "Dive into the exciting world of Game Development and bring your creative ideas to life. This track covers the fundamentals of game engines, interactive mechanics, 2D/3D graphics, and scripting. Participants will learn to build games using tools like Unity or Unreal Engine, exploring game physics, animation, UI, and publishing strategies.",
        image: "/Tracks/CS/game-development.webp",
        goals: [
          "Understand the core components of game engines including scenes, physics, and scripting",
          "Design and build interactive 2D and 3D games using Unity or Unreal Engine",
          "Implement game mechanics such as player movement, scoring systems, and collision detection",
          "Explore visual effects, animation, audio integration, and game deployment strategies",
        ],
        activities: [
          {
            title: "Game Engine Basics Bootcamp",
            description:
              "Learn the fundamentals of Unity or Unreal Engine, including scene creation, asset importing, and scripting with C# or Blueprints.",
          },
          {
            title: "Mechanics & Physics Integration",
            description:
              "Hands-on practice building core gameplay elements like character control, camera systems, and object interactions with realistic physics.",
          },
          {
            title: "Game Jam Challenge",
            description:
              "Participate in a 48-hour game jam where teams create complete playable games based on a surprise theme. Includes judging, prizes, and feedback from game industry mentors.",
          },
        ],
        board: [
          {
            name: "Salma Swailem",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/cs/tracks-heads/game-dev/head.webp",
            linkedin: "https://www.linkedin.com/in/salma-swailem/",
            email: "salma.4sa.u@gmail.com",
          },
        ],
      },
    ],
    seasons: [
      {
        year: 2024,
        summary: [
          "The 2024 season for Computer Society focused heavily on AI integration and practical application.",
          "We successfully hosted a large-scale 'AI for Good' hackathon, attracting over 150 participants and generating innovative solutions for local community challenges.",
          "Our workshops on advanced machine learning techniques and ethical AI saw record attendance, and we collaborated with two major tech companies for exclusive industry talks and recruitment events.",
        ],
      },
      {
        year: 2023,
        summary: [
          "Focused on web technologies and AI",
          "Industry-leading workshops",
          "Hands-on projects in full-stack and ML",
        ],
      },
      {
        year: 2022,
        summary: [
          "Launched cloud and mobile tracks",
          "Record participation in workshops",
          "Successful hackathons",
        ],
      },
    ],
  },
  {
    id: ++id,
    short_name: "RAS",
    long_name: "Robotics & Automation Society",
    logo: "/Images/RAS/IEEE-RAS-White.svg",
    color_scheme_1: "ras-1",
    color_scheme_2: "ras-2",
    description: {
      about:
        "IEEE ZSB RAS is the Robotics & Automation student chapter at Zagazig University, led by a dedicated board of track heads in Embedded Systems, ROS, Mechanical Design and PCB Design. We deliver hands-on workshops—from microcontroller programming and Gazebo simulations to advanced control algorithms—and organize season-long competitions like FFR and MATE ROV to sharpen skills and secure top regional rankings. Through collaborative projects, technical seminars and industry mentorship, we turn curiosity into capability, preparing members to innovate, compete and lead in the rapidly evolving field of robotics and automation.",
      vision:
        "Our vision is to become the premier hub for robotics and automation—where passionate members evolve into technically-adept professionals and fierce competitors. We inspire curiosity and drive innovation, cultivating a collaborative spirit that not only advances cutting-edge research but also secures top honors in local and regional competitions. By fostering technical excellence, strategic teamwork, and a winning mindset, we prepare our members to lead—and triumph—in the global robotics community.",
      mission:
        "Our Mission is to empower and guide our members along the path of robotics and automation by providing hands-on experience, fostering a deep understanding of core concepts, and preparing them to excel in competitions. We are dedicated to building their knowledge in related fields such as PCB design, embedded systems,ROS, and mechanical design. Through continuous learning, practical projects, and supportive mentorship, we aim to cultivate skilled, innovative, and confident robotics enthusiasts.",
    },
    board: [
      {
        name: "Marwan Tamer",
        position: "Chairperson",
        avatarSrc: "/Images/board/chapters/ras/chairperson.webp",
        linkedin: "http://www.linkedin.com/in/marwan-tamer-abdelmoneim",
        email: "marwan-tamer@ieee-zsb.org",
      },
      {
        name: "Merna Atef",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/ras/vice-chairperson-1.webp",
        linkedin: "https://www.linkedin.com/in/merna-atef-4252aa287",
        email: "merna.atef@ieee-zsb.org",
      },
    ],
    tracks: [
      {
        id: ++trackId,
        name: "Embedded Systems",
        hashtag: "embedded-systems",
        description:
          "The embedded systems is a special system that interacts with the physical world. We are designing intelligent systems to do certain function to ensure reliability and efficiency in performing tasks. the main objective is to build a real-time system to ensure accuracy and speed. Our mission is to achieve a low cost system and optimize the software to fit the available resources. Participants engage in interactive sessions led by a professional instructor and attend workshops that offer hands-on experience with microcontrollers. To further enhance their practical skills, they are encouraged to take part in real-world projects and competitions. These activities not only strengthen technical proficiency but also cultivate teamwork and collaboration toward achieving shared goals.",
        image: "/Tracks/RAS/embedded-systems.webp",
        goals: [
          "Make the members be aware of the market and the field that is open for opportunities and the popular projects in the industry.",
          "Building strong base in programming using C language and data structures .",
          "The ability to interface with the Microcontroller and communication protocols between MCUs and working with layered architecture, also writing low level drivers.",
        ],
        activities: [
          {
            title: "Offline Sessions",
            description:
              "Topics are discussed in detail during offline sessions, and tasks are assigned to enhance participants' problem-solving skills.",
          },
          {
            title: "Workshop",
            description:
              "Making workshop for microcontrollers interfacing with all peripherals",
          },
          {
            title: "Projects",
            description:
              "Splitting the members into teams at the end of any stage to build a ( software or hardware or both) project and having presentations for discussion.",
          },
        ],
        board: [
          {
            name: "Tasnem Sabry",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/ras/tracks-heads/embedded-systems/head.webp",
            linkedin: "https://www.linkedin.com/in/tasnem-sabry-124142254/",
            email: "tasnemmobasher9@gmail.com",
          },
          {
            name: "Ahmed Yasser",
            position: "Vice Head",
            avatarSrc:
              "/Images/board/chapters/ras/tracks-heads/embedded-systems/vice-head-1.webp",
            linkedin:
              "https://www.linkedin.com/in/ahmed-yasser-elgayar-942466253/",
            email: "ahmedyasserprince@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "ROS",
        hashtag: "ros",
        description:
          "Robot Operating System is an open-source framework for developing robot software. It provides tools, libraries, and conventions to help developers build complex and intelligent robot systems. ROS supports sensor integration, motor control, computer vision, navigation, and motion planning.",
        image: "/Tracks/RAS/ros.webp",
        goals: [
          "Build real or simulated robot systems means learning how to design, program, and test robots either in the real world (using hardware) or virtually (using simulation tools like Gazebo)",
          "Communicate Between Robots means Learn multi-robot communication — making robots share data and work together (especially useful in swarm robotics or factories)",
          "Use SLAM & Navigation means Understand how to make a robot build a map of its environment and navigate autonomously (using SLAM and path planning)",
        ],
        activities: [
          {
            title: "Offline Session",
            description:
              "Introduction to Object-Oriented Programming (OOP) in Python and how it's applied within the ROS ecosystem.",
          },
          {
            title: "Project",
            description:
              "Building a University System Project to apply Object-Oriented Programming (OOP) concepts in Python and strengthen software development skills.",
          },
          {
            title: "Offline Session",
            description:
              "Hands-on session on Linux fundamentals and command-line tools essential for working with ROS.",
          },
        ],
        board: [
          {
            name: "Ahmed Medhat",
            position: "Head",
            avatarSrc: "/Images/board/chapters/ras/tracks-heads/ros/head.webp",
            linkedin: "https://www.linkedin.com/in/ahmed-medhat-212847271/",
            email: "ahmedmedhat749d1@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "PCB Design",
        hashtag: "pcb-design",
        description: `The IEEE Student Branch's PCB Committee teaches you how to design, test, and build professional circuit boards (PCBs). We help members learn to create strong and dependable PCBs for things like embedded systems, robots, and other electronics. You'll get hands-on experience with every step of hardware development. This includes learning how to draw schematics, choose the right parts based on their electrical features and what's available, and carefully arrange the board parts for best performance and easy manufacturing. We also focus on "Design for Manufacturability" (DFM) to make sure designs are not only functional but also cheap and easy to produce. Members will become good at using industry tools like Altium Designer, which is important for professional PCB work, and learn key prototyping methods to check their designs. Our training prepares members for jobs in hardware engineering and electronics design by teaching them real-world industry practices.`,
        image: "/Tracks/RAS/pcb-design.webp",
        goals: [
          "Develop a deep understanding of electronic hardware design",
          "Enable Members to design, assemble, and test real-world PCBs",
          "Prepare Members for careers in electronics and embedded hardware",
        ],
        activities: [
          {
            title: "signals and pcb routing",
            description:
              "We conducted a session on PCB routing and traces, where we discussed several important topics such as crosstalk, signal types, and common issues you might face during routing. The session also included some general concepts in electronics to help participants better understand how to design reliable and efficient PCBs.",
          },
          {
            title: "soldering",
            description:
              "The next session was about soldering. At the beginning, participants gave presentations about their previous work, which was related to the last session on crosstalk and PCB routing. After the presentations, we spent the rest of the time practicing soldering.",
          },
          {
            title: "First project",
            description:
              "The following session was about a voltage regulator project, where the output voltage could be adjusted using a variable resistor. In this session, participants applied everything they had learned so far — from soldering to practical circuit implementation.",
          },
          {
            title: "Microcontroller",
            description:
              "The next session was a deep dive into microcontrollers, where we discussed the different types of microcontrollers and the differences between the various types of pins, such as input/output, analog, PWM, and communication pins.",
          },
        ],
        board: [
          {
            name: "Abdelrahman Ahmed",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/ras/tracks-heads/pcb-design/head.webp",
            linkedin: "https://www.linkedin.com/in/el-ghandour/",
            email: "elghaandourrr@gmail.com",
          },
          {
            name: "Mohamed Gamal",
            position: "Vice Head",
            avatarSrc:
              "/Images/board/chapters/ras/tracks-heads/pcb-design/vice-head-1.webp",
            linkedin: "http://www.linkedin.com/in/mohamed-gamal-xv",
            email: "mg355059@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Mechanical",
        hashtag: "mechanical",
        description:
          "The Mechanical track is responsible for the design and analysis of mechanical systems in robotics projects. Members learn essential tools and techniques used in the industry such as 3D modeling, simulation, and technical drawing",
        image: "/Tracks/RAS/mechanical.webp",
        goals: [
          "Learn SolidWorks from basic to advanced levels, including 3D modeling, assemblies, and sheet metal design",
          "Understand mechanical analysis using ANSYS",
          "Explore aerodynamic design concepts such as airfoils",
          "Apply mechanical concepts to real robotic systems",
        ],
        activities: [
          { title: "Offline Session", description: "AutoCAD" },
          { title: "Offline Session", description: "ANSYS + Airfoil Session" },
        ],
        board: [
          {
            name: "Abdallah Galal",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/ras/tracks-heads/mechanical/head.webp",
            linkedin: "https://www.linkedin.com/in/abdallah-galal-a39115297?",
            email: "abdallahgalal.eng@gmail.com",
          },
        ],
      },
    ],
    seasons: [
      {
        year: 2024,
        summary: [
          "The 2024 season for RAS was marked by significant advancements in autonomous systems.",
          "We successfully launched our first 'AI Robotics Challenge', where teams developed intelligent robots for complex tasks.",
          "Workshops focused on advanced topics like SLAM (Simultaneous Localization and Mapping) and reinforcement learning for robotics.",
          "Our members also participated in international robotics competitions, bringing home several awards.",
        ],
      },
      {
        year: 2023,
        summary: [
          "Expanded robotics program",
          "Autonomous systems and ROS workshops",
          "International competition participation",
        ],
      },
      {
        year: 2022,
        summary: [
          "Advanced robotics curriculum",
          "AI and computer vision integration",
          "Drone and industrial automation projects",
        ],
      },
    ],
  },
  {
    id: ++id,
    short_name: "PES",
    long_name: "Power & Energy Society",
    logo: "/Images/PES/IEEE-PES-White.svg",
    color_scheme_1: "pes-1",
    color_scheme_2: "pes-2",
    description: {
      about:
        "The IEEE Power & Energy Society (PES) is the leading source for knowledge, collaboration, and innovation in the fields of power and energy. Our chapter provides students with opportunities to explore the dynamic world of electrical power systems, renewable energy, and smart grid technologies. Through technical workshops, hands-on projects, and industry engagement, we equip students with the skills and insight to drive the future of sustainable energy.",
      vision:
        "To be a premier hub for learning and innovation in the power and energy sector, inspiring students to develop solutions that shape a cleaner, more reliable, and sustainable energy future. We aim to cultivate a community where knowledge and creativity come together to address global energy challenges.",
      mission:
        "To empower students with practical skills, technical expertise, and industry connections in power and energy engineering. We are dedicated to providing impactful learning experiences through workshops, research projects, and professional networking opportunities that prepare our members to excel in the evolving energy landscape.",
    },
    board: [
      {
        name: "Ali Abdelaziz",
        position: "Chairperson",
        avatarSrc: "/Images/board/chapters/pes/chairperson.webp",
        linkedin: "https://www.linkedin.com/in/ali-abdelazez-zaghlol",
        email: "ali.abdelaziz@ieee-zsb.org",
      },
      {
        name: "Eslam Mahmoud",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/pes/vice-chairperson-1.webp",
        linkedin: "https://www.linkedin.com/in/eslam-mahmoud-magdy",
        email: "eslam.mahmoud@ieee-zsb.org",
      },
      {
        name: "Ziad Elharony",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/pes/vice-chairperson-2.webp",
        linkedin: "https://www.linkedin.com/in/ziad-elharony-308139249",
        email: "ziad.elharony@ieee-zsb.org",
      },
    ],
    tracks: [
      {
        id: ++trackId,
        name: "Basic Automation",
        hashtag: "basic-automation",
        description:
          "An introductory track that teaches the fundamentals of automation systems, focusing on Classic Control principles and PLC Basics. Suitable for students starting their journey in industrial automation.",
        image: "/Tracks/PES/basic-automation.webp",
        goals: [
          "Understand classic control circuits",
          "Learn how to program basic PLC functions",
        ],
        activities: [
          {
            title: "Session",
            description:
              "Introduction to Classic Control components and logic design",
          },
          {
            title: "Offline Session",
            description:
              "Hands-on workshop for PLC wiring and basic programming",
          },
        ],
        board: [
          {
            name: "Ziad Ahmed",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/pes/tracks-heads/basic-automation/head.webp",
            linkedin: "http://linkedin.com/in/ziadahmed90",
            email: "Ziad20155555@gmail.com ",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Advanced Automation",
        hashtag: "advanced-automation",
        description:
          "A professional-level track designed to enhance knowledge in advanced PLC programming, HMI systems, and SCADA integration. This track prepares participants for real-world industrial automation projects.",
        image: "/Tracks/PES/advanced-automation.webp",
        goals: [
          "Build advanced PLC programs",
          "Understand the Concepts of Data Blocks and Function Blocks",
          "Build HMI and SCADA Systems",
        ],
        activities: [
          {
            title: "Session",
            description: "Advanced ladder logic and function blocks",
          },
          {
            title: "Session",
            description: "SCADA project implementation and visualization",
          },
        ],
        board: [
          {
            name: "Ahmed Saeed",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/pes/tracks-heads/advanced-automation/head.webp",
            linkedin: "https://www.linkedin.com/in/ahmed-saeed12/",
            email: "ahmedsaeeed907@gmail.com",
          },
          {
            name: "Amr Rady",
            position: "Vice Head",
            avatarSrc:
              "/Images/board/chapters/pes/tracks-heads/advanced-automation/vice-head-1.webp",
            linkedin: "https://www.linkedin.com/in/amr-rady/",
            email: "amr.raadyy@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Basic Distribution",
        hashtag: "basic-distribution",
        description:
          "This track covers the core concepts of electrical power distribution, including lighting systems, power planning, and safety standards. It's ideal for students aiming to understand infrastructure projects.",
        image: "/Tracks/PES/basic-distribution.webp",
        goals: [
          "Understand lighting and power design",
          "Apply standards in electrical distribution",
        ],
        activities: [
          {
            title: "session",
            description:
              "Lighting design principles and tools like DIALux and AutoCAD",
          },
          {
            title: "session",
            description: "distribution system planning and Project Lifecycle",
          },
        ],
        board: [
          {
            name: "Mahmoud Elkhwaga",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/pes/tracks-heads/basic-distribution/head.webp",
            linkedin: "https://www.linkedin.com/in/mahmoud-shehta/",
            email: "Mahmoudshehta103@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Advanced Distribution",
        hashtag: "advanced-distribution",
        description:
          "Advanced Distribution track delves into low current systems, fire alarm systems, and Revit MEP design. It's tailored for students interested in building services and smart infrastructure.",
        image: "/Tracks/PES/advanced-distribution.webp",
        goals: [
          "Design fire alarm systems",
          "Implement low current solutions",
          "using REVIT in Distribution Design",
        ],
        activities: [
          {
            title: "Session",
            description: "Overview of low current and ELV systems",
          },
          {
            title: "Session",
            description: "Fire alarm design and Revit workshop",
          },
        ],
        board: [
          {
            name: "Eslam Heikal",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/pes/tracks-heads/advanced-distribution/head.webp",
            linkedin: "https://www.linkedin.com/in/eslamheikal/",
            email: "eslam.heikal@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Smart Home",
        hashtag: "smart-home",
        description:
          "This track introduces students to the future of home automation using KNX technology, IoT applications, and smart system design. It bridges electrical and digital systems for intelligent environments.",
        image: "/Tracks/PES/smart-home.webp",
        goals: [
          "Gain a solid understanding of KNX protocols and their applications in smart home systems",
          "Learn to design and implement efficient topologies for home automation",
          "Explore IoT concepts and how they integrate with smart home technologies",
        ],
        activities: [
          { title: "Session", description: "Understand KNX protocols" },
          { title: "Session", description: "Topology and ETS 6 Programming" },
          {
            title: "Session",
            description: "IoT Concepts in Smart Home Applications",
          },
        ],
        board: [
          {
            name: "Abdelrahman Ali",
            position: "Head",
            avatarSrc: "/Images/board/chapters/pes/tracks-heads/smart-home/head.webp",
            linkedin: "https://www.linkedin.com/in/abdelrahmanali11/",
            email: "workworkey@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "E-Mobility",
        hashtag: "e-mobility",
        description:
          "A future-driven track focused on the electrical side of automotive engineering. Learn power electronics, model-based design, and electric drivetrain systems tailored for electric vehicle innovation.",
        image: "/Tracks/PES/e-mobility.webp",
        goals: ["Design electric drive systems", "Apply MBD in EV development"],
        activities: [
          {
            title: "Session",
            description: "Basics of electric powertrains and inverters",
          },
          {
            title: "Session",
            description: "Model-based simulations using MATLAB Simulink",
          },
        ],
        board: [
          {
            name: "Ahmed Elsayed",
            position: "Head",
            avatarSrc:
              "/Images/board/chapters/pes/tracks-heads/e-mobility/head.webp",
            linkedin: "https://www.linkedin.com/in/ahmedelsayed1133/",
            email: "ahmedazd267@gmail.com",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Mechanical",
        hashtag: "mechanical",
        description:
          "Mechanical Track explores the design of renewable energy systems and internal combustion engines, using powerful tools like SolidWorks and ANSYS for simulation and design verification.",
        image: "/Tracks/PES/mechanical.webp",
        goals: [
          "Design mechanical renewable systems",
          "Simulate components using SolidWorks and ANSYS",
        ],
        activities: [
          {
            title: "session",
            description: "Introduction to SolidWorks and energy system design",
          },
          {
            title: "session",
            description: "ANSYS mechanical simulation for engine components",
          },
        ],
        board: [
          {
            name: "Mahmoud Mostafa",
            position: "Vice Head",
            avatarSrc:
              "/Images/board/chapters/pes/tracks-heads/mechanical/vice-head-1.webp",
            linkedin: "http://www.linkedin.com/in/ma7moud-mostafa-el-kial",
            email: "elkial1582@gmail.com",
          },
        ],
      },
    ],
    seasons: [
      {
        year: 2024,
        summary: [
          "The 2024 season for PES focused on advanced smart grid solutions and energy efficiency.",
          "We organized a successful 'Future of Energy' summit with prominent speakers from utility companies and energy research institutions.",
          "Our members engaged in practical projects involving microgrid design and energy auditing, and we hosted a series of workshops on power electronics and grid modernization, attracting students and young professionals.",
        ],
      },
      {
        year: 2023,
        summary: [
          "Initiatives in renewable energy",
          "Workshops on power system automation",
          "Green energy solutions",
        ],
      },
      {
        year: 2022,
        summary: [
          "Sustainable energy practices",
          "Modern power systems focus",
          "Industry collaboration and field training",
        ],
      },
    ],
  },
  {
    id: ++id,
    short_name: "WIE",
    long_name: "Women in Engineering",
    logo: "/Images/WIE/IEEE-WIE-White.svg",
    color_scheme_1: "wie-1",
    color_scheme_2: "wie-2",
    description: {
      about:
        "IEEE Women in Engineering (WIE) is dedicated to promoting women engineers and scientists while inspiring the next generation of female technologists. Our chapter creates a supportive community that celebrates diversity in engineering, provides mentorship opportunities, and empowers women to pursue leadership roles in technical fields. Through our activities, we address the unique challenges faced by women in engineering while fostering professional growth.",
      vision:
        "To create an inclusive engineering community where women are equally represented, celebrated, and empowered to achieve their full potential. We envision a future where gender diversity in technical fields is the norm, and where women engineers are leading technological innovations across all sectors.",
      mission:
        "To inspire and empower women in engineering through mentorship, skill development, and leadership opportunities. We are committed to building a strong support network, providing professional development resources, and creating platforms for women to showcase their technical achievements.",
    },
    board: [
      {
        name: "Walaa Elshahat",
        position: "Chairperson",
        avatarSrc: "/Images/board/chapters/wie/chairperson.webp",
        linkedin: "https://www.linkedin.com/in/walaa-elshahat-0b0317259",
        email: "walaa_elshahat@ieee-zsb.org",
      },
      {
        name: "Nouran Yasser",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/wie/vice-chairperson-1.webp",
        linkedin: "https://www.linkedin.com/in/nouran-yasser-elsayed",
        email: "nouran.yasser@ieee-zsb.org",
      },
    ],
    seasons: [
      {
        year: 2024,
        summary: [
          "The 2024 season for WIE focused on amplifying women's voices in STEM leadership.",
          "We hosted a powerful 'Inspiring Women Leaders' conference, featuring keynote speakers who are pioneers in their fields.",
          "Our mentorship program expanded significantly, pairing more students with industry professionals, and we organized workshops on negotiation skills and strategic career planning.",
        ],
      },
      {
        year: 2023,
        summary: [
          "Mentorship program with industry leaders",
          "Women in tech conference",
          "Expanded professional development",
        ],
      },
      {
        year: 2022,
        summary: [
          "New internship partnerships",
          "Leadership training series",
          "Increased community outreach",
        ],
      },
    ],
  },
];
