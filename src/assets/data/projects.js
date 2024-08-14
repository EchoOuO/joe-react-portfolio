import { v4 as uuidv4 } from "uuid";
import TamMusic from "../images/TamMusic.png";
import yoga from "../images/yoga.png";
import sunglasses from "../images/sunglasses.png";
import portfolio from "../images/portfolio.png";
import guessnumber from "../images/guessnumber.png";
import TechTutor from "../images/TechTutor.jpg";

const projects = [
  {
    id: uuidv4(),
    name: "Tech Tutor",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Python / Flask",
      "REST API",
      "OpenAI API",
      "LLM",
      "AWS S3",
    ],
    desc: "A full-stack web application designed for tech job seekers to prepare for interview through behavioral, conceptual and coding challenges. Integrated ChatGPT API to dynamically generate personalized interview questions based on user-provided resumes and job descriptions, along with real-time feedback for answers.",
    img: TechTutor,
    github: "https://github.com/AI-TECH-LLM-TEAM/ai-tech-tutor",
    demo: "",
  },
  {
    id: uuidv4(),
    name: "TamMusic",
    tech: ["React", "Bootstrap", "PHP", "MySQL"],
    desc: "A music platform for audience and artists, featuring user login and authentication, creating personal playlist, musicplayer, data management for admin.",
    img: TamMusic,
    github: "https://github.com/EchoOuO/react-music-platform",
    demo: "",
  },
  {
    id: uuidv4(),
    name: "Sunglasses Shop (E-commerce)",
    tech: ["HTML", "CSS", "jQuery"],
    desc: "A static e-commerce website featuring product comparison to help customers making decision smoothly.",
    img: sunglasses,
    github: "https://github.com/EchoOuO/E-commerce-Sunglass",
    demo: "",
  },
  {
    id: uuidv4(),
    name: "My Portfolio",
    tech: ["HTML", "CSS", "JavaScript", "Responsive"],
    desc: "A portfolio website showcasing what I've learnt in 2 months as a learner. It features scroll animations, interactive hover effects and clean UI.",
    img: portfolio,
    github: "https://github.com/EchoOuO/Personal-Portfolio-Website",
    demo: "https://echoouo.github.io/Personal-Portfolio-Website/",
  },
  // {
  //   id: uuidv4(),
  //   name: "Yoga website",
  //   tech: ["HTML", "CSS", "JavaScript", "Responsive"],
  //   desc: "A static website for whom is interested in yoga and willing to find a personal trainer.",
  //   img: yoga,
  //   github: "https://github.com/EchoOuO/yoga-studio-project",
  //   demo: "https://echoouo.github.io/yoga-studio-project/",
  // },
  {
    id: uuidv4(),
    name: "Guess Number Game",
    tech: ["HTML", "CSS", "JavaScript"],
    desc: "A small project - guessing number game with old-fasioned styling.",
    img: guessnumber,
    github: "https://github.com/EchoOuO/20240208-Guess-Number-Game",
    demo: "https://echoouo.github.io/20240208-Guess-Number-Game/",
  },
];

export default projects;
