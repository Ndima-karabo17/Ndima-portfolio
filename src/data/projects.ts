import type { Project } from "../types/project";
import pic from '../assets/images/projects/library-image.png'
import pic2 from '../assets/images/projects/To-do.png'
export const projects: Project[] = [
  {
    id: 1,
   
    title: "PriceCompareSA",
    description:
      "A mobile application that helps users compare grocery prices across retailers.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/YOUR_USERNAME/price-compare-sa"
  },

  {
    id: 2,
    title: "To-Do App",
  description:
    "A CRUD to-do list app with inline task editing, filtering, and persistent storage using localStorage.",
  technologies: [
    "HTML",
    "CSS",
    "JavaScript",
  ],
    github: "https://github.com/ndimamhangwani/week-2-to-do-app.git",
    live: "https://week-2-to-do-app.vercel.app/",
    image: pic2,
  },

  {
    id: 3,
    title: "Library Management System",
    description:
      "Desktop application for managing books, members, and borrowing records.",
    technologies: ["Java", "PostgreSQL"],
    github: "https://github.com/Ndima-karabo17/LibraryManagementSystem-PostgreSQL.git",
     image: pic,
  },
];