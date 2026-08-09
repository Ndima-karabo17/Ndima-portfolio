import type { Project } from "../types/project";
import pic from '../assets/images/projects/library-image.png'
import pic2 from '../assets/images/projects/To-do.png'
import pic3 from '../assets/images/projects/UI-challenge.png'

export const projects: Project[] = [
  {
    id: 1,

    title: "UI-Challenge",
    description:
      "A responsive marketing landing page featuring click-to-toggle dropdown menus and a functional mobile hamburger navigation panel.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Ndima-karabo17/UI-challange.git",
    live: "https://ui-challange-liard.vercel.app/",
    image: pic3,
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