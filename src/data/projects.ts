import type { Project } from "../types/project";
import pic from '../assets/images/projects/library-image.png'
export const projects: Project[] = [
  {
    id: 1,
   
    title: "PriceCompareSA",
    description:
      "A mobile application that helps users compare grocery prices across retailers.",
    technologies: ["React Native", "TypeScript", "Firebase"],
    github: "https://github.com/YOUR_USERNAME/price-compare-sa",
    live: "#",
  },

  {
    id: 2,
    title: "Hotel Booking API",
    description:
      "RESTful backend API for hotel reservations with authentication and booking management.",
    technologies: [
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    github: "https://github.com/YOUR_USERNAME/hotel-api",
    live: "#",
  },

  {
    id: 3,
    title: "Library Management System",
    description:
      "Desktop application for managing books, members, and borrowing records.",
    technologies: ["Java", "PostgreSQL"],
    github: "https://github.com/Ndima-karabo17/LibraryManagementSystem-PostgreSQL.git",
    live: "#",
     image: pic,
  },
];