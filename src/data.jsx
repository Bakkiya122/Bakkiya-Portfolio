import { GoCodeReview } from "react-icons/go";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {
  project1,
  project2,
  project3,
  python,
  node,
  mangodb,
  css,
  html,
  javascript,
  tailwind,
  express,
  react,
  SQL,
  emailicon,
  whatsappicon,
} from "./assets";

export const menu = [
  { name: "About" },
  { name: "Credentials" },
  { name: "Skills" },
  { name: "Projects" },
  { name: "Contact" },
];


export const projects = [
  {
    title: "Personal Portfolio",
    image: project1,
    category: "Web",
    description: `Developed a responsive and visually appealing portfolio website using React.js to showcase my skills, projects, and achievements, ensuring a seamless user experience.`,
    demoLink: "https://google.com/",
    stacks: [
      {
        name: "ReactJs",
        logo: react,
      },
      {
        name: "JavaScript",
        logo: javascript,
      },
      {
        name: "Tailwind",
        logo: tailwind,
      }
    ],
  },
  {
    title: "Non-Repeating, Normalized Questionnaire Sets Generation",
    image: project2,
    category: "Project",
    description: `Generates unique, balanced question sets without repetition using Go lang (backend), HTML, CSS, JavaScript (frontend), Beautiful Soup & Jsoup (parsing). Ideal for assessments, exams, and surveys.`,
    demoLink: "https://google.com/",
    stacks: [
     
      {
        name: "python",
        logo: python,
      },
    ],
  },
  {
    title: "Object Detection using Python and OpenCV",
    image: project3,
    category: "Project",
    description: `Detects and tracks objects in images or videos using OpenCV and Python. Supports real-time detection. Ideal for surveillance, automation, and AI applications.`,
    demoLink: "https://google.com/",
    stacks: [
      
      {
        name: "python",
        logo: python,
      },
     
    ],
  },
  
];

export const skills = [
  {
    title: "Frontend Development",
    data: [
      {
        skill: "HTML",
        level: "Intermediate",
        logo: html,
      },
      {
        skill: "CSS",
        level: "Intermediate",
        logo: css,
      },
      {
        skill: "JavaScript",
        level: "Intermediate",
        logo: javascript,
      },
      {
        skill: "Tailwind",
        level: "Intermediate",
        logo: tailwind,
      },
      
      {
        skill: "React",
        level: "Intermediate",
        logo: react,
      },
      
    ],
  },
  {
    title: "Backend Development",
    data: [
      {
        skill: "Python",
        level: "Intermediate",
        logo: python,
      },
      {
        skill: "Nodejs",
        level: "Intermediate",
        logo: node,
      },
      {
        skill: "MangoDB",
        level: "Intermediate",
        logo: mangodb,
      },
      {
        skill: "Expressjs",
        level: "Intermediate",
        logo: express,
      },
      {
        skill: "SQL",
        level: "Intermediate",
        logo: SQL,
      },
    ],
  },
  
];
export const contactInfo = [
  {
    name: "Email",
    value: "bakkiyalakshmi428@gmail.com",
    link: "mailto:bakkiyalakshmi428@gmail.com",
    icon: emailicon,
    btnIcon: <MdOutlineEmail />,
    color: "rgb(56,115,205)",
  },
  
  {
    name: "WhatsApp",
    value: "+91 6380151650",
    link: "https://wa.link/7sgot4",
    icon: whatsappicon,
    btnIcon: <BsWhatsapp />,
    color: "rgb(38,234,112)",
  },
];
export const socialHandles = [
  
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/Bakkiya122",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/bakkiyalakshmi-v-010761211?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
  },
 
];

export const credentials = [
  {
    name: "Full Stack Development",
    at: "- Sirsub InfoTech",
    title: "Internship",
    icon: <GoCodeReview />,
    description: `Interned at Sirsub InfoTech as a Full Stack Web Developer, worked on frontend (HTML, CSS, JavaScript) and backend (SQL, Python) development. Gained experience in integration, debugging, and performance optimization, enhancing my problem-solving and teamwork skills.`,
  },
  {
    name:"B.E Computer Science",
    at:"- SRM Valliammai Engineering collage (2020-2024)",
    title: "Collage",
    icon: < IoSchoolOutline />,
    color: "blueviolet",
    colorRGB: "138, 43, 226",
    description: `Bachelor of Engineering in Computer Science
Graduated with a CGPA of 8.9 , showcasing strong technical knowledge and a proactive approach to learning through projects, workshops, and internships.`,
  },
  {
    at:"- Sri Gnanananda Mat Hr Sec Sch",
    name:"SSCL & HSC",
    title: "School",
    icon: <LiaSchoolSolid />,
    color: "var(--color-success)",
    colorRGB: "var(--color-success-rgb)",
    description: `Completed SSLC (88.8%) in 2018 and HSC (71.2%) in 2020 at Sri Gnanananda Matric Hr Sec School, building a strong academic foundation.`,
  },
];

