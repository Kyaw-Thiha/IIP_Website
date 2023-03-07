export interface Career {
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
  | "Biologist"
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

export const majors: Career[] = [
  {
    icon: "",
    name: "Medical",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "Biology", "Chemistry"],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Engineering",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "Physics", "Chemistry"],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Computer Science",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "Physics", "Chemistry"],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Business",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "One Science", "Business"],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Accounting",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "One Science",
      "Accounting",
    ],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Economics",
    coreSubjects: ["EFL/ESL", "E Maths", "A Maths", "One Science", "Economics"],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Law",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Psychology",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Biologist",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [],
  },
  {
    icon: "",
    name: "Art & Design",
    coreSubjects: [
      "EFL/ESL",
      "E Maths",
      "A Maths",
      "Physics",
      "Chemistry",
      "Biology",
    ],
    optionalSubjects: [],
  },
];
