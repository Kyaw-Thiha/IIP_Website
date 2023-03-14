export interface Major {
  icon: string;
  name: majorNames;
  coreSubjects: subjects[];
  optionalSubjects: subjects[];
}

export type majorNames =
  | "Medical"
  | "Engineering"
  | "Computer Science"
  | "Business"
  | "Economics"
  | "Accounting"
  | "Law"
  | "Psychology"
  | "Architecture"
  | "Art & Design";

export type subjects =
  | "English Language"
  | "Pure Maths"
  | "Physics"
  | "Chemistry"
  | "Biology"
  | "IT"
  | "Business"
  | "Accounting"
  | "Economics";

export const majors: Major[] = [
  {
    icon: "/images/majors/medical.png",
    name: "Medical",
    coreSubjects: ["Biology", "Chemistry", "Pure Maths"],
    optionalSubjects: ["Physics", "IT"],
  },
  {
    icon: "/images/majors/engineering.png",
    name: "Engineering",
    coreSubjects: ["Physics", "Pure Maths", "Chemistry"],
    optionalSubjects: ["IT", "Biology", "Business"],
  },
  {
    icon: "/images/majors/computer-science.png",
    name: "Computer Science",
    coreSubjects: ["Physics", "Pure Maths", "IT"],
    optionalSubjects: [
      "Chemistry",
      "Biology",
      "Business",
      "Accounting",
      "Economics",
    ],
  },
  {
    icon: "/images/majors/business.png",
    name: "Business",
    coreSubjects: ["Business", "Pure Maths", "Economics"],
    optionalSubjects: ["Accounting", "IT", "English Language"],
  },
  {
    icon: "/images/majors/accounting.png",
    name: "Accounting",
    coreSubjects: ["Accounting", "Pure Maths", "Business"],
    optionalSubjects: ["Economics", "IT", "English Language"],
  },
  {
    icon: "/images/majors/economics.png",
    name: "Economics",
    coreSubjects: ["Economics", "Pure Maths", "Business"],
    optionalSubjects: ["Accounting", "IT", "English Language"],
  },
  {
    icon: "/images/majors/law.png",
    name: "Law",
    coreSubjects: ["Pure Maths", "Business", "English Language"],
    optionalSubjects: ["Accounting", "Business", "Economics", "IT"],
  },
  {
    icon: "/images/majors/psychology.png",
    name: "Psychology",
    coreSubjects: ["Biology", "Chemistry", "Pure Maths"],
    optionalSubjects: ["Accounting", "Business", "Economics", "Physics"],
  },
  {
    icon: "/images/majors/architecture.png",
    name: "Architecture",
    coreSubjects: ["Physics", "Pure Maths", "Chemistry"],
    optionalSubjects: ["Accounting", "Business", "Economics", "IT"],
  },
  {
    icon: "/images/majors/art-and-design.png",
    name: "Art & Design",
    coreSubjects: ["Physics", "Chemistry", "Biology"],
    optionalSubjects: ["Accounting", "Business", "Economics"],
  },
];
