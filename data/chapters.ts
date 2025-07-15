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
        "The IEEE Computer Society (CS) is the premier source for information, inspiration, and collaboration in computer science and engineering. Our chapter provides a platform for students to dive deep into the ever-evolving world of technology, from web development to artificial intelligence. Through hands-on workshops, technical sessions, and industry connections, we empower students to become the next generation of tech innovators.",
      vision:
        "To be the leading hub for technological innovation and learning in computer science, fostering a community where students can transform their passion for technology into real-world expertise. We aim to create an environment where creativity meets technical excellence, preparing our members for the challenges of tomorrow's digital world.",
      mission:
        "To empower students with cutting-edge technical knowledge, practical skills, and professional connections in computer science. We are committed to providing high-quality technical education, fostering innovation, and creating opportunities for personal and professional growth through workshops, projects, and industry engagement.",
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
          "Master the art of crafting beautiful and interactive web interfaces. This track covers HTML, CSS, JavaScript, modern frameworks like React, and design principles. By the end, participants will be able to build responsive and accessible user experiences with real-world performance and design considerations.",
        image: "/Fake-Images/4.webp",
        goals: [
          "Learn the fundamentals of HTML, CSS, and JavaScript",
          "Build responsive web interfaces using modern frameworks like React or Vue",
          "Apply UI/UX principles for usability and accessibility",
          "Gain practical experience with version control, APIs, and deployment",
        ],
        activities: [
          {
            title: "Frontend Fundamentals",
            description:
              "Covers core HTML, CSS, JavaScript, DOM manipulation, and responsive design using Flexbox and Grid.",
          },
          {
            title: "React Workshop",
            description:
              "Hands-on project-based sessions using React.js to build dynamic web apps with routing, state management, and API integration.",
          },
          {
            title: "Frontend Challenge Day",
            description:
              "Time-limited team-based challenge to build a complete responsive web app. Judged on design, code quality, and user experience.",
          },
        ],
        board: [
          {
            name: "Yasmine Samir",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/65.jpg",
            linkedin: "https://www.linkedin.com/in/yasmine-samir/",
            email: "yasmine.samir@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Back-End",
        hashtag: "backend",
        description:
          "Build the backbone of web applications. This track focuses on server-side development, databases, APIs, and authentication. You'll gain experience in Node.js, Express, and MongoDB, with best practices in RESTful design and cloud deployment.",
        image: "/Fake-Images/4.webp",
        goals: [
          "Understand how servers, databases, and APIs work together",
          "Build RESTful APIs using Node.js and Express",
          "Integrate authentication and security into web backends",
          "Deploy and scale web applications using cloud services",
        ],
        activities: [
          {
            title: "API Development Workshop",
            description:
              "Build secure RESTful APIs using Node.js and Express. Connect to MongoDB, handle errors, and create real-world endpoints.",
          },
          {
            title: "Authentication & Authorization",
            description:
              "Learn to implement user auth with JWT, OAuth, and session-based strategies. Secure routes and manage permissions.",
          },
          {
            title: "Backend Deployment Bootcamp",
            description:
              "Deploy your applications to the cloud using platforms like Heroku, Vercel, or AWS. Learn CI/CD basics and environment config.",
          },
        ],
        board: [
          {
            name: "Mohamed Emad",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/52.jpg",
            linkedin: "https://www.linkedin.com/in/mohamed-emad/",
            email: "mohamed.emad@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Mobile Development",
        hashtag: "mobile-development",
        description:
          "Build mobile applications that run smoothly on Android and iOS devices. This track focuses on cross-platform frameworks like Flutter and React Native, covering UI development, state management, and native capabilities.",
        image: "/Fake-Images/4.webp",
        goals: [
          "Understand mobile app architecture and development lifecycle",
          "Build cross-platform apps using Flutter or React Native",
          "Manage state, navigation, and backend integration",
          "Deploy apps to the Play Store and App Store",
        ],
        activities: [
          {
            title: "Flutter Basics",
            description:
              "Introduction to Dart and Flutter widgets. Build your first mobile app with layouts, navigation, and interactivity.",
          },
          {
            title: "State Management in Apps",
            description:
              "Explore provider, bloc, and hooks in Flutter or Redux in React Native to manage complex application state.",
          },
          {
            title: "App Publishing Bootcamp",
            description:
              "Prepare and publish your app to Android/iOS stores. Learn about app signing, testing, and release channels.",
          },
        ],
        board: [
          {
            name: "Aya Tarek",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/41.jpg",
            linkedin: "https://www.linkedin.com/in/aya-tarek/",
            email: "aya.tarek@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Basic AI",
        hashtag: "basic-ai",
        description:
          "Explore the fundamentals of Artificial Intelligence through hands-on projects and beginner-friendly tools. This track introduces basic concepts in machine learning, data preprocessing, and simple model building using Python and libraries like Scikit-learn.",
        image: "/Fake-Images/4.webp",
        goals: [
          "Understand core concepts of machine learning and AI",
          "Learn to use Python and Scikit-learn for simple models",
          "Get familiar with data preparation and feature engineering",
          "Apply classification, regression, and clustering in real problems",
        ],
        activities: [
          {
            title: "AI Basics Workshop",
            description:
              "Introduction to machine learning concepts and workflow. Build your first model with Scikit-learn using real datasets.",
          },
          {
            title: "Data Preprocessing Lab",
            description:
              "Learn how to clean, normalize, and transform data using Pandas and Scikit-learn pipelines.",
          },
          {
            title: "Mini AI Projects",
            description:
              "Group projects applying AI to tasks like spam detection, digit recognition, or movie recommendation.",
          },
        ],
        board: [
          {
            name: "Habiba Osama",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/56.jpg",
            linkedin: "https://www.linkedin.com/in/habiba-osama/",
            email: "habiba.osama@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Advanced AI",
        hashtag: "advanced-ai",
        description:
          "Go beyond the basics and tackle real-world challenges in deep learning, computer vision, and natural language processing. This track explores TensorFlow/PyTorch, model optimization, and advanced topics like transformers and generative AI.",
        image: "/Fake-Images/4.webp",
        goals: [
          "Master advanced deep learning models and architectures",
          "Apply computer vision and NLP techniques using TensorFlow or PyTorch",
          "Understand training optimization, overfitting, and performance tuning",
          "Build intelligent systems like chatbots, object detectors, and generative models",
        ],
        activities: [
          {
            title: "Deep Learning Crash Course",
            description:
              "Train deep neural networks using PyTorch or TensorFlow. Cover CNNs, RNNs, and modern architectures.",
          },
          {
            title: "Computer Vision Workshop",
            description:
              "Work on object detection and image classification with OpenCV and CNNs. Apply real-world image datasets.",
          },
          {
            title: "NLP & Chatbot Project",
            description:
              "Learn natural language processing with HuggingFace Transformers. Build a chatbot using pre-trained models and fine-tuning.",
          },
        ],
        board: [
          {
            name: "Ziad Khaled",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/33.jpg",
            linkedin: "https://www.linkedin.com/in/ziad-khaled/",
            email: "ziad.khaled@ieee-zsb.org",
          },
        ],
      },

      {
        id: ++trackId,
        name: "Cyber Security",
        hashtag: "cyber-security",
        description:
          "Understand the fundamentals of digital security and how to protect systems from vulnerabilities and attacks. This track includes network security, cryptography, ethical hacking, and real-world penetration testing practices.",
        image: "/Fake-Images/4.webp",
        goals: [
          "Learn core cybersecurity principles and common attack vectors",
          "Understand encryption, hashing, and authentication protocols",
          "Get hands-on experience in ethical hacking and penetration testing",
          "Use tools like Wireshark, Metasploit, and Burp Suite",
        ],
        activities: [
          {
            title: "Cybersecurity Basics",
            description:
              "Introduction to key security concepts like CIA triad, threat modeling, and common vulnerabilities (OWASP Top 10).",
          },
          {
            title: "Ethical Hacking Lab",
            description:
              "Simulate real attacks in a controlled lab environment. Use Kali Linux, Nmap, Metasploit to identify and exploit vulnerabilities.",
          },
          {
            title: "Capture The Flag (CTF)",
            description:
              "Interactive CTF-style competition testing real-world hacking skills in web security, cryptography, and reverse engineering.",
          },
        ],
        board: [
          {
            name: "Omar Nabil",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/17.jpg",
            linkedin: "https://www.linkedin.com/in/omar-nabil/",
            email: "omar.nabil@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Game Development",
        hashtag: "game-development",
        description:
          "Dive into the exciting world of Game Development and bring your creative ideas to life. This track covers the fundamentals of game engines, interactive mechanics, 2D/3D graphics, and scripting. Participants will learn to build games using tools like Unity or Unreal Engine, exploring game physics, animation, UI, and publishing strategies.",
        image: "/Fake-Images/4.webp",
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
            name: "Ahmed Alaa",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/45.jpg",
            linkedin: "https://www.linkedin.com/in/ahmed-alaa-ros/",
            email: "ahmed.alaa@ieee-zsb.org",
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
        "The IEEE Robotics & Automation Society (RAS) chapter is your gateway to the exciting world of robotics and autonomous systems. We provide hands-on experience in building and programming robots, exploring automation technologies, and developing innovative solutions. Our community brings together students passionate about creating intelligent machines that can interact with and improve our world.",
      vision:
        "To be the cornerstone of robotics innovation and education, fostering an environment where students can transform their ideas into functioning autonomous systems. We aim to prepare the next generation of robotics engineers who will shape the future of automation and artificial intelligence.",
      mission:
        "To advance robotics education and research by providing practical experience, theoretical knowledge, and networking opportunities. We focus on developing well-rounded engineers capable of designing, building, and programming autonomous systems while promoting collaboration and innovation in robotics.",
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
          "Dive deep into the heart of hardware programming and embedded software. This track focuses on microcontrollers, sensor interfacing, real-time systems, and low-level hardware communication. You'll gain practical experience programming microcontrollers, working with embedded C/C++, and developing firmware for real-world applications.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Understand microcontroller architecture and low-level programming concepts",
          "Develop and deploy firmware using C/C++ and real-time operating systems (RTOS)",
          "Interface with sensors and peripherals using protocols like UART, SPI, and I2C",
          "Build efficient, low-power embedded applications for real-world scenarios",
        ],
        activities: [
          {
            title: "Microcontroller Bootcamp",
            description:
              "Learn the fundamentals of embedded systems development using popular microcontrollers such as STM32 and ESP32. Topics include GPIO, timers, ADC, UART, and real-world project implementation.",
          },
          {
            title: "Sensor Interfacing Lab",
            description:
              "Hands-on lab sessions where students learn to interface and program various sensors including temperature, motion, and distance sensors using embedded C/C++.",
          },
          {
            title: "RTOS Programming Workshop",
            description:
              "Learn the basics of real-time systems and implement multitasking, scheduling, and synchronization using FreeRTOS on microcontrollers.",
          },
        ],
        board: [
          {
            name: "Salma Hussein",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/11.jpg",
            linkedin: "https://www.linkedin.com/in/salma-hussein/",
            email: "salma.hussein@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "ROS",
        hashtag: "ros",
        description:
          "Delve into the powerful ecosystem of the Robot Operating System (ROS) to build intelligent and autonomous robotic systems. This track emphasizes modular software design, sensor integration, real-time data handling, and robot navigation. Participants will learn to simulate, test, and deploy robotic applications using ROS and Gazebo, bridging the gap between theory and practical robotics.",
        image: "/Fake-Images/8.webp",
        goals: [
          "Understand the ROS architecture and its core concepts: nodes, topics, services, and actions",
          "Gain hands-on experience integrating sensors and actuators into robotic systems using ROS",
          "Simulate and visualize robot behavior using tools like Gazebo and RViz",
          "Implement autonomous navigation, path planning, and SLAM algorithms",
        ],
        activities: [
          {
            title: "ROS Basics Bootcamp",
            description:
              "Learn the fundamentals of ROS including package creation, node communication, publishing/subscribing to topics, and using the ROS filesystem. Includes real-world simulations with turtlesim and Gazebo.",
          },
          {
            title: "Sensor & Actuator Integration",
            description:
              "Hands-on experience with integrating IMUs, LIDAR, cameras, and motor drivers in ROS. Work on real hardware and simulated environments for testing.",
          },
          {
            title: "Autonomous Navigation Workshop",
            description:
              "Develop robot autonomy with the ROS Navigation Stack. Implement path planning, obstacle avoidance, and SLAM (Simultaneous Localization and Mapping) in indoor environments.",
          },
        ],
        board: [
          {
            name: "Ahmed Alaa",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/45.jpg",
            linkedin: "https://www.linkedin.com/in/ahmed-alaa-ros/",
            email: "ahmed.alaa@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "PCB Design",
        hashtag: "pcb-design",
        description:
          "Learn how to design and manufacture printed circuit boards (PCBs), the backbone of every electronic system. This track covers circuit design, schematic capture, layout, simulation, and fabrication. Gain hands-on experience using industry-standard tools and create your own functional PCBs from scratch.",
        image: "/Fake-Images/6.webp",
        goals: [
          "Understand the principles of electronic circuit design and schematic drawing",
          "Master PCB layout techniques and industry standards for single/multi-layer boards",
          "Use EDA tools such as KiCad or Altium for schematic capture and PCB routing",
          "Fabricate and test real PCBs through prototyping and soldering workshops",
        ],
        activities: [
          {
            title: "Schematic & Simulation Bootcamp",
            description:
              "Introduction to circuit design and simulation using tools like Proteus or LTSpice. Learn to analyze circuits before moving to layout.",
          },
          {
            title: "PCB Layout Workshop",
            description:
              "Hands-on workshop for creating PCB layouts in KiCad/Altium. Cover footprint assignment, routing, DRC checks, and export for fabrication.",
          },
          {
            title: "PCB Prototyping Day",
            description:
              "Design, print, and assemble your own PCB. Includes etching demos or third-party fabrication ordering, soldering, and testing.",
          },
        ],
        board: [
          {
            name: "Mohamed Yasser",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/21.jpg",
            linkedin: "https://www.linkedin.com/in/mohamed-yasser/",
            email: "mohamed.yasser@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Mechanical Design",
        hashtag: "mechanical",
        description:
          "Explore the world of mechanical engineering and CAD-based design. This track focuses on mechanical components, 3D modeling, kinematics, and manufacturing techniques. Participants will learn to use modern CAD tools and build physical mechanisms through hands-on projects.",
        image: "/Fake-Images/7.webp",
        goals: [
          "Master 3D CAD software for part design, assembly, and rendering",
          "Understand kinematic systems, gear trains, and motion constraints",
          "Learn prototyping and fabrication techniques using 3D printing and machining",
          "Develop collaborative design and problem-solving skills in mechanical teams",
        ],
        activities: [
          {
            title: "CAD Masterclass",
            description:
              "Learn how to model and assemble mechanical parts using SolidWorks or Fusion 360. Covers basic to advanced modeling techniques.",
          },
          {
            title: "Kinematics in Mechanisms",
            description:
              "Explore the design of linkages, gear systems, and motion analysis for robotic and mechanical systems.",
          },
          {
            title: "Rapid Prototyping Workshop",
            description:
              "Create and test your mechanical designs through 3D printing and hands-on assembly. Includes real-world design case studies.",
          },
        ],
        board: [
          {
            name: "Nourhan Fathy",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/24.jpg",
            linkedin: "https://www.linkedin.com/in/nourhan-fathy/",
            email: "nourhan.fathy@ieee-zsb.org",
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
        "The IEEE Power & Energy Society (PES) is at the forefront of electrical power and energy innovation. Our chapter connects students with the latest developments in sustainable energy, smart grids, and power systems. Through practical experience and theoretical knowledge, we prepare future engineers to tackle global energy challenges and drive the transition to renewable energy sources.",
      vision:
        "To lead the transformation of the power and energy sector by nurturing innovative minds capable of developing sustainable solutions for global energy challenges. We envision a future where clean, efficient energy systems power our world, designed and maintained by engineers we help develop today.",
      mission:
        "To cultivate expertise in power engineering and sustainable energy technologies through practical education, research opportunities, and industry collaboration. We strive to bridge the gap between academic knowledge and industrial applications, preparing our members to shape the future of energy systems.",
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
        name: "Ziad Elharony",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/pes/vice-chairperson-1.webp",
        linkedin: "https://www.linkedin.com/in/ziad-elharony-308139249",
        email: "ziad.elharony@ieee-zsb.org",
      },
      {
        name: "Eslam Mahmoud",
        position: "Vice Chairperson",
        avatarSrc: "/Images/board/chapters/pes/vice-chairperson-2.webp",
        linkedin: "https://www.linkedin.com/in/eslam-mahmoud-magdy",
        email: "eslam.mahmoud@ieee-zsb.org",
      },
    ],
    tracks: [
      {
        id: ++trackId,
        name: "Basic Automation",
        hashtag: "basic-automation",
        description:
          "Gain foundational knowledge of automation systems in power and industrial applications. This track introduces PLCs, sensors, actuators, and control logic used in automation. Ideal for beginners seeking hands-on exposure to how machines and systems are controlled automatically.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Understand the principles of automation and control systems",
          "Learn PLC programming and ladder logic basics",
          "Interface sensors and actuators in basic industrial setups",
          "Simulate and test automation sequences using virtual labs",
        ],
        activities: [
          {
            title: "PLC Programming Workshop",
            description:
              "Hands-on introduction to ladder logic programming using Siemens or Allen-Bradley PLCs. Practice creating basic automation sequences.",
          },
          {
            title: "Sensor & Actuator Lab",
            description:
              "Explore various industrial sensors and actuators. Connect and test them with microcontrollers and PLCs in basic scenarios.",
          },
          {
            title: "Automation Simulation Day",
            description:
              "Use TIA Portal or Factory I/O to simulate real-world automation systems and develop small automated processes.",
          },
        ],
        board: [
          {
            name: "Mariam Hossam",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/36.jpg",
            linkedin: "https://www.linkedin.com/in/mariam-hossam/",
            email: "mariam.hossam@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Advanced Automation",
        hashtag: "advanced-automation",
        description:
          "Explore advanced control strategies, industrial networks, SCADA systems, and smart manufacturing. This track builds on automation foundations and focuses on real-time control, process optimization, and IoT applications in industrial settings.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Implement advanced PLC logic and state machines",
          "Design and deploy SCADA/HMI systems for remote monitoring",
          "Integrate industrial networks and communication protocols (e.g., Modbus, Profibus)",
          "Apply IoT and AI for predictive maintenance and automation intelligence",
        ],
        activities: [
          {
            title: "SCADA & HMI Workshop",
            description:
              "Learn how to build a full SCADA system using WinCC or Ignition. Create dashboards to monitor and control live automation data.",
          },
          {
            title: "Industrial Networking Lab",
            description:
              "Practice configuring industrial Ethernet, Modbus, and Profibus systems for communication between PLCs and sensors.",
          },
          {
            title: "Smart Factory Challenge",
            description:
              "Group project simulating smart manufacturing. Apply AI/ML tools for predictive maintenance or energy optimization.",
          },
        ],
        board: [
          {
            name: "Hassan Mahmoud",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/48.jpg",
            linkedin: "https://www.linkedin.com/in/hassan-mahmoud/",
            email: "hassan.mahmoud@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Basic Distribution",
        hashtag: "basic-distribution",
        description:
          "Explore the foundational principles of electrical power distribution systems, including substations, protection devices, and transformers. Learn how electricity travels from the generation plant to end users.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Understand distribution network structure and equipment",
          "Learn basics of transformers, circuit breakers, and protective devices",
          "Analyze power flow in low and medium voltage systems",
          "Use simulation software for distribution network modeling",
        ],
        activities: [
          {
            title: "Substation Tour & Analysis",
            description:
              "Virtual or physical tour of a local substation with equipment explanation and protective relay demonstrations.",
          },
          {
            title: "Transformer Basics Workshop",
            description:
              "Hands-on training and simulations about transformer operation, types, and protection strategies.",
          },
          {
            title: "Distribution Design Lab",
            description:
              "Design a simple LV/MV distribution network using ETAP or similar tools. Focus on load estimation and feeder design.",
          },
        ],
        board: [
          {
            name: "Salem Reda",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/30.jpg",
            linkedin: "https://www.linkedin.com/in/salem-reda/",
            email: "salem.reda@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Advanced Distribution",
        hashtag: "advanced-distribution",
        description:
          "Dive deeper into smart grids, fault analysis, distributed generation, and protection coordination. This track covers advanced modeling and real-world distribution system optimization.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Model advanced distribution systems with renewable integration",
          "Perform protection coordination and relay setting calculations",
          "Analyze fault conditions and apply real-time monitoring systems",
          "Understand distributed generation and power flow challenges",
        ],
        activities: [
          {
            title: "Protection Coordination Workshop",
            description:
              "Learn to coordinate fuses, relays, and breakers in a distribution network. Use ETAP or DIGSILENT for simulations.",
          },
          {
            title: "Distributed Generation Case Study",
            description:
              "Explore solar/wind integration and its impact on grid stability and power quality.",
          },
          {
            title: "Fault Analysis Bootcamp",
            description:
              "Simulate symmetrical and unsymmetrical faults. Assess their impact on equipment and protection systems.",
          },
        ],
        board: [
          {
            name: "Nour El-Din Ali",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/28.jpg",
            linkedin: "https://www.linkedin.com/in/nour-eldin-ali/",
            email: "nour.eldin@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Smart Home",
        hashtag: "smart-home",
        description:
          "Build the homes of the future with automation, IoT, and energy management. This track focuses on smart sensors, voice control, lighting systems, and energy efficiency in residential applications.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Design smart lighting, HVAC, and energy monitoring systems",
          "Work with platforms like Arduino, Raspberry Pi, and Home Assistant",
          "Integrate voice control (Alexa, Google Assistant)",
          "Understand wireless protocols (Zigbee, Z-Wave, WiFi, Bluetooth)",
        ],
        activities: [
          {
            title: "Smart Home Starter Kit Workshop",
            description:
              "Build a smart lighting and temperature control system using ESP32 and sensors. Configure remote access and app integration.",
          },
          {
            title: "Voice Assistant Integration",
            description:
              "Use APIs to control devices through Google Assistant or Alexa. Explore IFTTT and automation rules.",
          },
          {
            title: "Energy Monitoring Lab",
            description:
              "Install and program smart plugs and meters. Analyze energy data and automate energy-saving actions.",
          },
        ],
        board: [
          {
            name: "Aya Mostafa",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/32.jpg",
            linkedin: "https://www.linkedin.com/in/aya-mostafa/",
            email: "aya.mostafa@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "E-Mobility",
        hashtag: "e-mobility",
        description:
          "Explore the future of electric transportation and charging infrastructure. This track covers EV systems, batteries, charging stations, power electronics, and grid impact of e-mobility.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Understand EV architecture and key components",
          "Learn battery technology, BMS (Battery Management System), and charging protocols",
          "Analyze charging station integration and load balancing",
          "Explore smart charging, V2G (Vehicle to Grid), and infrastructure planning",
        ],
        activities: [
          {
            title: "EV System Design Workshop",
            description:
              "Overview of EV components, including drivetrain, inverter, and charger. Explore simulation tools like MATLAB/Simulink for EV modeling.",
          },
          {
            title: "Charging Infrastructure Lab",
            description:
              "Design and simulate EV charging networks. Discuss smart chargers, billing systems, and grid impact.",
          },
          {
            title: "Battery Tech Bootcamp",
            description:
              "Hands-on with battery cells, BMS design, and testing. Understand thermal management and safety challenges.",
          },
        ],
        board: [
          {
            name: "Ahmed Saber",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/men/49.jpg",
            linkedin: "https://www.linkedin.com/in/ahmed-saber/",
            email: "ahmed.saber@ieee-zsb.org",
          },
        ],
      },
      {
        id: ++trackId,
        name: "Mechanical",
        hashtag: "mechanical",
        description:
          "Understand the mechanical aspects of power generation and energy systems. This track focuses on turbines, thermal systems, fluid mechanics, and maintenance of power plant equipment.",
        image: "/Fake-Images/5.webp",
        goals: [
          "Analyze mechanical systems in power plants (boilers, turbines, pumps)",
          "Understand thermal cycles (Rankine, Brayton) and efficiency improvements",
          "Simulate fluid flow and heat transfer in power systems",
          "Apply maintenance and reliability engineering to energy systems",
        ],
        activities: [
          {
            title: "Thermal Power Systems Workshop",
            description:
              "Learn steam cycle fundamentals, component functions, and performance metrics for thermal power plants.",
          },
          {
            title: "CFD & Simulation Lab",
            description:
              "Use software like ANSYS or OpenFOAM to simulate flow and heat transfer in pipes, exchangers, and turbines.",
          },
          {
            title: "Power Plant Maintenance Tour",
            description:
              "Visit or virtually tour power generation facilities. Understand preventive maintenance schedules and mechanical reliability techniques.",
          },
        ],
        board: [
          {
            name: "Nada Ashraf",
            position: "Track Head",
            avatarSrc: "https://randomuser.me/api/portraits/women/22.jpg",
            linkedin: "https://www.linkedin.com/in/nada-ashraf/",
            email: "nada.ashraf@ieee-zsb.org",
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
