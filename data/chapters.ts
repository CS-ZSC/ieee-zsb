import { Position } from "./position";

export interface TrackData {
	name: string;
	description: string;
	img: string;
	goals: string[];
	activities: {
		title: string;
		description: string;
	}[];
	heads: Position[];
}

export interface ChapterData {
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
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			vision:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
			mission:
				"Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry..",
		},
		board: [
			{
				name: "John Doe",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/men/1.jpg",
				linkedin: "https://www.linkedin.com/in/john-doe/",
				email: "john.doe@ieee-zsb.org"
			},
			{
				name: "Jane Smith",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/1.jpg",
				linkedin: "https://www.linkedin.com/in/jane-smith/",
				email: "jane.smith@ieee-zsb.org"
			}
		],
		tracks: [
			{
				name: "Web Development",
				description: "Learn modern web development technologies and frameworks",
				img: "/Fake-Images/4.webp",
				goals: [
					"Master HTML, CSS, and JavaScript",
					"Learn popular frameworks like React",
					"Build responsive web applications",
				],
				activities: [
					{
						title: "Frontend Fundamentals Workshop",
						description: "Hands-on workshop covering HTML5, CSS3, and modern JavaScript features"
					},
					{
						title: "React.js Bootcamp",
						description: "Intensive 4-week bootcamp on building modern web applications with React"
					},
					{
						title: "Web Performance Workshop",
						description: "Learn techniques to optimize and improve web application performance"
					}
				],
				heads: [
					{
						name: "Mike Johnson",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/men/3.jpg",
						linkedin: "https://www.linkedin.com/in/mike-johnson/",
						email: "mike.johnson@ieee-zsb.org"
					},
				],
			},
			{
				name: "Machine Learning",
				description: "Explore AI and machine learning concepts",
				img: "/Fake-Images/4.webp",
				goals: [
					"Understand ML fundamentals",
					"Implement common ML algorithms",
					"Work on real-world ML projects",
				],
				activities: [
					{
						title: "Python for ML Workshop",
						description: "Introduction to Python libraries essential for machine learning"
					},
					{
						title: "ML Models Deep Dive",
						description: "Practical sessions on implementing common ML algorithms"
					},
					{
						title: "AI Project Showcase",
						description: "Students present their machine learning projects to industry experts"
					}
				],
				heads: [
					{
						name: "Sarah Wilson",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/women/8.jpg",
						linkedin: "https://www.linkedin.com/in/sarah-wilson/",
						email: "sarah.wilson@ieee-zsb.org"
					},
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
			about: "IEEE Power & Energy Society (PES) is dedicated to advancing technology and innovation in power and energy.",
			vision: "To be the leading provider of scientific information on electric power and energy for the betterment of society.",
			mission: "To be the leading technical and scientific knowledge source for the global power and energy community.",
		},
		board: [
			{
				name: "Ahmed Hassan",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/men/4.jpg",
				linkedin: "https://www.linkedin.com/in/ahmed-hassan/",
				email: "ahmed.hassan@ieee-zsb.org"
			},
			{
				name: "Mariam Ehab",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/2.jpg",
				linkedin: "https://www.linkedin.com/in/mariam-ehab/",
				email: "mariam.ehab@ieee-zsb.org"
			}
		],
		tracks: [
			{
				name: "Power Systems",
				description: "Learn about electrical power generation, transmission, and distribution",
				img: "/Fake-Images/4.webp",
				goals: [
					"Understand power system fundamentals",
					"Learn about renewable energy integration",
					"Study smart grid technologies"
				],
				activities: [
					{
						title: "Smart Grid Seminar",
						description: "Expert talks on modern smart grid technologies and implementation"
					},
					{
						title: "Renewable Energy Workshop",
						description: "Hands-on experience with solar and wind energy systems"
					},
					{
						title: "Power Lab Sessions",
						description: "Practical laboratory sessions on power system analysis"
					}
				],
				heads: [
					{
						name: "Omar Saad",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/men/6.jpg",
						linkedin: "https://www.linkedin.com/in/omar-saad/",
						email: "omar.saad@ieee-zsb.org"
					}
				]
			}
		]
	},
	{
		id: ++id,
		short_name: "RAS",
		long_name: "Robotics & Automation Society",
		logo: "/Images/RAS/IEEE-RAS-White.png",
		color_scheme: "#F08114",
		description: {
			about: "IEEE Robotics & Automation Society is dedicated to advancing the theory and practice of robotics and automation engineering.",
			vision: "To foster technological innovation and excellence for the benefit of humanity.",
			mission: "To advance the development and implementation of robotics and automation technologies.",
		},
		board: [
			{
				name: "Youssef Hamdy",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/men/7.jpg",
				linkedin: "https://www.linkedin.com/in/youssef-hamdy/",
				email: "youssef.hamdy@ieee-zsb.org"
			},
			{
				name: "Nada Ahmed",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/3.jpg",
				linkedin: "https://www.linkedin.com/in/nada-ahmed/",
				email: "nada.ahmed@ieee-zsb.org"
			}
		],
		tracks: [
			{
				name: "Robotics",
				description: "Explore robotics fundamentals and advanced applications",
				img: "/Fake-Images/4.webp",
				goals: [
					"Learn robot kinematics and dynamics",
					"Develop autonomous systems",
					"Build practical robotics projects"
				],
				activities: [
					{
						title: "Robot Building Workshop",
						description: "Build and program a basic autonomous robot"
					},
					{
						title: "ROS Training",
						description: "Introduction to Robot Operating System (ROS)"
					},
					{
						title: "Robotics Competition",
						description: "Annual robotics challenge for team projects"
					}
				],
				heads: [
					{
						name: "Karim Mostafa",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/men/9.jpg",
						linkedin: "https://www.linkedin.com/in/karim-mostafa/",
						email: "karim.mostafa@ieee-zsb.org"
					}
				]
			}
		]
	},
	{
		id: ++id,
		short_name: "WIE",
		long_name: "Women in Engineering",
		logo: "/Images/WIE/IEEE-WIE-White.png",
		color_scheme: "#802C92",
		description: {
			about: "IEEE Women in Engineering is dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in engineering and science.",
			vision: "To facilitate the recruitment and retention of women in technical disciplines globally.",
			mission: "To inspire, engage, encourage, and empower IEEE women worldwide.",
		},
		board: [
			{
				name: "Salma Mahmoud",
				position: "Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/4.jpg",
				linkedin: "https://www.linkedin.com/in/salma-mahmoud/",
				email: "salma.mahmoud@ieee-zsb.org"
			},
			{
				name: "Hana Khalil",
				position: "Vice Chairman",
				avatarSrc: "https://randomuser.me/api/portraits/women/5.jpg",
				linkedin: "https://www.linkedin.com/in/hana-khalil/",
				email: "hana.khalil@ieee-zsb.org"
			}
		],
		tracks: [
			{
				name: "Leadership & Professional Development",
				description: "Develop leadership skills and professional growth",
				img: "https://randomuser.me/api/portraits/women/6.jpg",
				goals: [
					"Enhance leadership capabilities",
					"Build professional networks",
					"Develop technical and soft skills"
				],
				activities: [
					{
						title: "Women in Tech Panel",
						description: "Discussion panel featuring successful women in technology"
					},
					{
						title: "Leadership Workshop",
						description: "Developing essential leadership and management skills"
					},
					{
						title: "Career Development Day",
						description: "Resume building and interview preparation workshop"
					}
				],
				heads: [
					{
						name: "Rana Khalil",
						position: "Track Head",
						avatarSrc: "https://randomuser.me/api/portraits/women/7.jpg",
						linkedin: "https://www.linkedin.com/in/rana-khalil/",
						email: "rana.khalil@ieee-zsb.org"
					}
				]
			}
		]
	}
];
