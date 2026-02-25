import { Project } from "@/components/ProjectCard";

export const projects: Project[] = [
  {
    id: "v-app",
    title: "V App – All-in-One Personal Growth Platform",
    description:
      "Conceptualized and led the end-to-end development of a modular AI-powered student productivity platform integrating learning, finance, fitness, and career tools. Integrated AI APIs for resume analysis, study planning, and intelligent recommendations.",
    tech: ["React", "Tailwind", "Node.js", "Django", "MongoDB", "AI APIs"],
    period: "May 2025 – Present",
    github: "https://github.com/Nishanth-Ai14",
  },
  {
    id: "epidemic-prediction",
    title: "AI-Based Epidemic Prediction & Simulation",
    description:
      "Developed and trained machine learning models using TensorFlow and Pandas to predict epidemic trends using real-world datasets. Designed an interactive visualization dashboard to communicate insights for data-driven decision-making.",
    tech: ["Python", "TensorFlow", "Pandas", "Data Viz"],
    period: "2025 – Present",
    github: "https://github.com/Nishanth-Ai14",
  },
  {
    id: "car-rental",
    title: "Car Rental System – DBMS Web Application",
    description:
      "Designed and developed a web-based car rental system with user authentication, booking management, and an admin dashboard. Implemented booking workflows and dynamic UI components for real-time booking status tracking.",
    tech: ["HTML", "CSS", "JavaScript", "DBMS"],
    period: "Dec 2023",
    github: "https://github.com/Nishanth-Ai14",
  },
];

export const skills = [
  { title: "Languages", skills: ["C", "Java", "Python", "HTML", "CSS", "JavaScript", "TypeScript"] },
  { title: "Frameworks", skills: ["React", "Node.js", "Flask", "FastAPI", "Tailwind CSS"] },
  { title: "Developer Tools", skills: ["Git", "Docker", "GCP", "VS Code", "IntelliJ"] },
  { title: "Libraries", skills: ["Pandas", "NumPy", "Matplotlib", "TensorFlow"] },
  { title: "Testing", skills: ["Manual Testing", "Debugging", "Functional Testing"] },
  { title: "Other", skills: ["Ethical Hacking", "Blockchain", "Linux", "REST APIs"] },
];

export const experience = [
  {
    title: "Testing Engineer – Internship",
    subtitle: "Schneider Electric Pvt. Ltd",
    period: "Jan 2023 – May 2023",
    location: "Bengaluru, IN",
    points: [
      "Gained hands-on experience in production management, automation, and quality control.",
      "Focused on testing and ensuring quality of electrical systems, enhancing skills in mechatronics and embedded systems.",
      "Assisted in quality validation processes and troubleshooting workflows to improve operational reliability.",
    ],
  },
  {
    title: "Industrial Automation System",
    subtitle: "SJP – Mechatronics Department",
    period: "2022",
    location: "Bengaluru, IN",
    points: [
      "Developed an automated conveyor belt system using PLC and sensors.",
      "Programmed PLC for motor operations and sensor-based sorting.",
      "Tested and troubleshot the automation system to improve efficiency.",
    ],
  },
  {
    title: "Hackathon Participant – Full-Stack Development",
    subtitle: "DSATM – 1-Day Workshop",
    period: "Mar 2024",
    location: "Bengaluru, IN",
    points: [
      "Designed and developed a web application from scratch in a 1-day hackathon.",
      "Worked with HTML, CSS, JavaScript, React, and backend integration.",
      "Collaborated with a team to complete project design, development, and deployment.",
    ],
  },
];

export const education = [
  {
    title: "Bachelor of Engineering – CS & Design",
    subtitle: "DSATM",
    period: "June 2023 – July 2026",
    location: "Bengaluru",
    points: ["CGPA: 7.7", "Blockchain Technology Workshop (NPTEL)", "Full-Stack Development Hackathon participant"],
  },
  {
    title: "Diploma in Mechatronics Engineering",
    subtitle: "Sri Jayachamarajendra Govt Polytechnic",
    period: "June 2021 – May 2023",
    location: "Bengaluru",
    points: ["CGPA: 7.8", "Industrial Automation System project", "Internship at Schneider Electric"],
  },
];

export const certifications = [
  "Data Structures & Algorithms with Java – Infosys Springboard",
  "Web Development Basics – Udemy",
  "Operating System – Infosys Springboard",
];
