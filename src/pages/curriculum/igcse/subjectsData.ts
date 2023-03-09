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
  | "EFL/ESL"
  | "E Maths"
  | "A Maths"
  | "Physics"
  | "Chemistry"
  | "Biology"
  | "One Science"
  | "Computer Science"
  | "ICT"
  | "Business"
  | "Accounting"
  | "Economics"
  | "History";

export const majors: Major[] = [
  {
    icon: "/images/majors/medical.png",
    name: "Medical",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Biology",
      "Chemistry",
      "Physics",
    ],
    optionalSubjects: [
      "Business",
      "Accounting",
      "Economics",
      "History",
      "ICT",
      "Computer Science",
    ],
  },
  {
    icon: "/images/majors/engineering.png",
    name: "Engineering",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "Physics", "Chemistry"],
    optionalSubjects: ["ICT", "Computer Science", "Biology"],
  },
  {
    icon: "/images/majors/computer-science.png",
    name: "Computer Science",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "Physics", "Chemistry"],
    optionalSubjects: ["Biology", "Business", "Accounting", "Economics"],
  },
  {
    icon: "/images/majors/business.png",
    name: "Business",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "One Science", "Business"],
    optionalSubjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "ICT",
      "Computer Science",
    ],
  },
  {
    icon: "/images/majors/accounting.png",
    name: "Accounting",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "One Science",
      "Accounting",
    ],
    optionalSubjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "ICT",
      "Computer Science",
    ],
  },
  {
    icon: "/images/majors/economics.png",
    name: "Economics",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "One Science", "Economics"],
    optionalSubjects: [
      "Physics",
      "Chemistry",
      "Biology",
      "ICT",
      "Computer Science",
    ],
  },
  {
    icon: "/images/majors/law.png",
    name: "Law",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [
      "ICT",
      "Computer Science",
      "Accounting",
      "Business",
      "Economics",
    ],
  },
  {
    icon: "/images/majors/psychology.png",
    name: "Psychology",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [
      "ICT",
      "Computer Science",
      "Accounting",
      "Business",
      "Economics",
    ],
  },
  {
    icon: "/images/majors/architecture.png",
    name: "Architecture",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [
      "ICT",
      "Computer Science",
      "Accounting",
      "Business",
      "Economics",
    ],
  },
  {
    icon: "/images/majors/art-and-design.png",
    name: "Art & Design",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [
      "ICT",
      "Computer Science",
      "Accounting",
      "Business",
      "Economics",
    ],
  },
];
