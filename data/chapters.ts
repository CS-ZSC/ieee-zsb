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
	color_scheme: string;
	description: {
		about: string;
		vision: string;
		mission: string;
	};
	board: Position[];
	tracks: TrackData[];
	seasons: SeasonData[];
}

let id = 0;
export const chaptersData: ChapterData[] = [
	{
		id: ++id,
		short_name: "CS",
		long_name: "Computer Society",
		logo: "/Images/CS/IEEE-CS-White.png",
		color_scheme: "#354A5F",
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
				name: "John Doe",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/men/1.jpg",
				linkedin: "https://www.linkedin.com/in/john-doe/",
				email: "john.doe@ieee-zsb.org",
			},
			{
				name: "Jane Smith",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/1.jpg",
				linkedin: "https://www.linkedin.com/in/jane-smith/",
				email: "jane.smith@ieee-zsb.org",
			},
		],
		tracks: [
			{
				name: "Web Development",
				description:
					"Embark on a comprehensive journey through modern web development, from fundamental concepts to advanced frameworks. Our web development track combines theoretical knowledge with hands-on practice, teaching you to build responsive, accessible, and scalable web applications. You'll learn industry best practices, modern tooling, and collaborative development workflows used by professional developers.",
				image: "/Fake-Images/4.webp",
				goals: [
					"Master modern web technologies including HTML5, CSS3, and JavaScript ES6+ while following industry best practices and coding standards",
					"Gain hands-on experience with popular frameworks like React.js, Next.js, and develop full-stack applications using modern architectures",
					"Learn responsive design principles, web accessibility standards, and performance optimization techniques for building professional web applications",
					"Understand version control with Git, CI/CD pipelines, and deploy applications using cloud platforms",
				],
				activities: [
					{
						title: "Frontend Fundamentals Workshop",
						description:
							"An intensive hands-on workshop series covering modern HTML5 semantics, advanced CSS3 features including Grid and Flexbox, and JavaScript ES6+ concepts. Participants will build responsive layouts, implement modern UI components, and learn browser DevTools for debugging.",
					},
					{
						title: "React.js Bootcamp",
						description:
							"A comprehensive 4-week program diving deep into React ecosystem. Learn component architecture, hooks, state management with Redux/Context, routing, and performance optimization. Build real-world applications while following industry best practices and design patterns.",
					},
					{
						title: "Web Performance Workshop",
						description:
							"Master the art of web optimization through practical sessions covering lazy loading, code splitting, caching strategies, and modern performance APIs. Learn to use Lighthouse, Chrome DevTools, and other performance monitoring tools to analyze and improve web application speed.",
					},
				],
				board: [
					{
						name: "Mike Johnson",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/men/3.jpg",
						linkedin: "https://www.linkedin.com/in/mike-johnson/",
						email: "mike.johnson@ieee-zsb.org",
					},
				],
			},
			{
				name: "Machine Learning",
				description:
					"Dive into the fascinating world of artificial intelligence and machine learning. This track takes you from basic statistical concepts to advanced neural networks and deep learning applications. You'll work with real-world datasets, implement cutting-edge algorithms, and develop the skills needed to solve complex problems using AI. Perfect for those interested in data science, pattern recognition, and intelligent systems.",
				image: "/Fake-Images/4.webp",
				goals: [
					"Build a strong foundation in machine learning concepts, statistical analysis, and data preprocessing techniques using Python and its scientific libraries",
					"Implement and optimize various ML algorithms including supervised learning, unsupervised learning, and deep neural networks",
					"Work on real-world projects using industry-standard tools like TensorFlow, PyTorch, and scikit-learn",
					"Develop skills in data visualization, model evaluation, and deployment of ML models in production environments",
				],
				activities: [
					{
						title: "Python for ML Workshop",
						description:
							"A foundational course covering Python's data science stack including NumPy, Pandas, and Matplotlib. Learn data manipulation, statistical analysis, and visualization techniques essential for machine learning projects. Includes hands-on exercises with real-world datasets.",
					},
					{
						title: "ML Models Deep Dive",
						description:
							"Advanced sessions exploring machine learning algorithms from theory to implementation. Cover supervised learning (regression, classification), unsupervised learning (clustering, dimensionality reduction), and neural networks. Implement models using scikit-learn and TensorFlow.",
					},
					{
						title: "AI Project Showcase",
						description:
							"A culminating event where participants present their machine learning projects to industry professionals. Features end-to-end ML solutions, from data preprocessing to model deployment, with emphasis on real-world applications and business impact.",
					},
				],
				board: [
					{
						name: "Sarah Wilson",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/women/8.jpg",
						linkedin: "https://www.linkedin.com/in/sarah-wilson/",
						email: "sarah.wilson@ieee-zsb.org",
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
		short_name: "PES",
		long_name: "Power & Energy Society",
		logo: "/Images/PES/IEEE-PES-White.png",
		color_scheme: "#6EB43F",
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
				name: "Ahmed Hassan",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/men/4.jpg",
				linkedin: "https://www.linkedin.com/in/ahmed-hassan/",
				email: "ahmed.hassan@ieee-zsb.org",
			},
			{
				name: "Mariam Ehab",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/2.jpg",
				linkedin: "https://www.linkedin.com/in/mariam-ehab/",
				email: "mariam.ehab@ieee-zsb.org",
			},
		],
		tracks: [
			{
				name: "Power Systems",
				description:
					"Delve into the heart of electrical power systems, from generation to distribution. This comprehensive track covers conventional and renewable power sources, smart grid technologies, and power system analysis. You'll gain hands-on experience with industry-standard tools and practices, preparing you for a career in modern power engineering. The curriculum includes power quality analysis, protection systems, and renewable energy integration.",
				image: "/Fake-Images/4.webp",
				goals: [
					"Develop comprehensive understanding of power system analysis, protection, and control using modern simulation tools",
					"Master the integration of renewable energy sources, energy storage systems, and smart grid technologies",
					"Learn power quality analysis, grid stability assessment, and fault detection techniques using industry-standard software",
					"Gain practical experience in power system planning, optimization, and renewable energy project development",
				],
				activities: [
					{
						title: "Smart Grid Seminar",
						description:
							"An in-depth exploration of modern power grid technologies featuring industry experts. Topics include grid modernization, SCADA systems, distributed energy resources, and cybersecurity in power systems. Includes virtual tours of smart grid facilities and hands-on demonstrations.",
					},
					{
						title: "Renewable Energy Workshop",
						description:
							"Comprehensive practical sessions on renewable energy systems, focusing on solar and wind power integration. Learn system design, installation considerations, power conversion, and grid connection requirements. Includes site visits to local renewable energy installations.",
					},
					{
						title: "Power Lab Sessions",
						description:
							"Intensive laboratory workshops using industry-standard power system simulation software. Practice power flow analysis, fault calculations, stability studies, and protection system design. Gain hands-on experience with real power system equipment and measurement tools.",
					},
				],
				board: [
					{
						name: "Omar Saad",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/men/6.jpg",
						linkedin: "https://www.linkedin.com/in/omar-saad/",
						email: "omar.saad@ieee-zsb.org",
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
		short_name: "RAS",
		long_name: "Robotics & Automation Society",
		logo: "/Images/RAS/IEEE-RAS-White.png",
		color_scheme: "#F08114",
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
				name: "Youssef Hamdy",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/men/7.jpg",
				linkedin: "https://www.linkedin.com/in/youssef-hamdy/",
				email: "youssef.hamdy@ieee-zsb.org",
			},
			{
				name: "Nada Ahmed",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/3.jpg",
				linkedin: "https://www.linkedin.com/in/nada-ahmed/",
				email: "nada.ahmed@ieee-zsb.org",
			},
		],
		tracks: [
			{
				name: "Robotics",
				description:
					"Experience the full spectrum of robotics engineering, from mechanical design to autonomous control. This track covers robot kinematics, dynamics, sensor integration, and artificial intelligence applications in robotics. Through hands-on projects and team challenges, you'll learn to design, build, and program robots while developing problem-solving skills essential for the robotics industry. Special focus is given to ROS (Robot Operating System) and modern robotics frameworks.",
				image: "/Fake-Images/4.webp",
				goals: [
					"Master fundamental robotics concepts including kinematics, dynamics, and control systems through hands-on experimentation",
					"Develop expertise in programming autonomous systems using ROS (Robot Operating System) and other industry-standard tools",
					"Design and build robotic systems incorporating sensors, actuators, and real-time control algorithms",
					"Gain practical experience in computer vision, path planning, and artificial intelligence applications in robotics",
				],
				activities: [
					{
						title: "Robot Building Workshop",
						description:
							"A comprehensive hands-on series where participants design and build autonomous robots from scratch. Cover mechanical design, electronics integration, sensor programming, and control algorithms. Work with Arduino, Raspberry Pi, and various sensors to create functional robotic systems.",
					},
					{
						title: "ROS Training",
						description:
							"Intensive training program on Robot Operating System (ROS) framework. Learn node communication, message passing, service calls, and navigation stack implementation. Practice with simulated robots in Gazebo and deploy code on real robotic platforms.",
					},
					{
						title: "Robotics Competition",
						description:
							"Annual team-based robotics challenge combining hardware and software skills. Teams design, build, and program robots to complete specific tasks. Includes mentoring sessions, progress reviews, and final competition judged by robotics industry professionals.",
					},
				],
				board: [
					{
						name: "Karim Mostafa",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/men/9.jpg",
						linkedin: "https://www.linkedin.com/in/karim-mostafa/",
						email: "karim.mostafa@ieee-zsb.org",
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
		short_name: "WIE",
		long_name: "Women in Engineering",
		logo: "/Images/WIE/IEEE-WIE-White.png",
		color_scheme: "#802C92",
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
				name: "Salma Mahmoud",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/4.jpg",
				linkedin: "https://www.linkedin.com/in/salma-mahmoud/",
				email: "salma.mahmoud@ieee-zsb.org",
			},
			{
				name: "Hana Khalil",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/5.jpg",
				linkedin: "https://www.linkedin.com/in/hana-khalil/",
				email: "hana.khalil@ieee-zsb.org",
			},
		],
		tracks: [
			{
				name: "Leadership & Professional Development",
				description:
					"This comprehensive track focuses on developing both technical expertise and essential soft skills needed for successful engineering careers. Through workshops, mentorship programs, and networking events, participants develop leadership capabilities, communication skills, and professional acumen. The curriculum includes public speaking, project management, negotiation skills, and personal branding, all tailored to address the unique challenges and opportunities for women in engineering.",
				image: "https://randomuser.me/api/portraits/women/6.jpg",
				goals: [
					"Develop essential leadership skills including strategic thinking, team management, and effective decision-making in technical environments",
					"Master professional communication, public speaking, and technical presentation skills for engineering contexts",
					"Build a strong professional network through mentorship programs and industry connections",
					"Gain project management expertise and learn to lead technical teams effectively",
				],
				activities: [
					{
						title: "Women in Tech Panel",
						description:
							"Inspiring panel discussion featuring accomplished women leaders in technology sectors. Senior engineers and executives share their career journeys, challenges overcome, and strategies for success. Includes networking session and mentorship opportunities with speakers.",
					},
					{
						title: "Leadership Workshop",
						description:
							"Comprehensive leadership development program focusing on essential skills for engineering managers. Topics include team dynamics, conflict resolution, strategic planning, and inclusive leadership practices. Features case studies and role-playing exercises.",
					},
					{
						title: "Career Development Day",
						description:
							"Full-day intensive workshop on professional development in engineering. Sessions cover resume optimization, technical interview preparation, salary negotiation, and personal brand building. Includes mock interviews with industry recruiters and portfolio reviews.",
					},
				],
				board: [
					{
						name: "Rana Khalil",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/women/7.jpg",
						linkedin: "https://www.linkedin.com/in/rana-khalil/",
						email: "rana.khalil@ieee-zsb.org",
					},
				],
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
