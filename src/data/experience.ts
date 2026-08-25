import type { Experience } from "../types/experience";

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Development Learner",
    company: "TechBridle Foundation",
    period: "Feb 2026 – Aug 2026",
    certificate: "/certificates/techbridle-certificate.pdf",
    description: [
      "Developed web APIs and applications using C# and ASP.NET Core.",
      "Applied object-oriented programming principles to build maintainable software.",
      "Worked with SQL databases and backend development concepts.",
      "Built and tested RESTful APIs while following software development best practices.",
    ],
  },
  {
    id: 2,
    role: "Software Development Trainee",
    company: "CodeTribe Academy",
    period: "Jul 2025 – Mar 2026",
    certificate: "https://codetribe.mlab.co.za/verify-student/51f0d140-e957-4a2c-94e0-7b7207a741c4",
    description: [
      "Built responsive web and mobile applications using React and React Native.",
      "Developed REST APIs and integrated frontend applications with backend services.",
      "Collaborated with team members using Git and GitHub in an Agile environment.",
      "Worked with JavaScript, TypeScript, SQL, and modern software development tools.",
    ],
  },
];