import { IntGradesType, intToGrade } from "src/helpers/alumni";

export interface ALevelClassInterface {
  id: string;
  year: number;
  series: ALevelSeriesType;
  alumni?: ALevelAlumniInterface[];
}
export type ALevelSeriesType = "Jan" | "May/Jun" | "Oct";

export interface ALevelAlumniInterface {
  id: string;
  name: string;
  image: string;
  gender: "Male" | "Female";
  english: number;
  pureMaths: number;
  furtherMaths: number;
  chemistry: number;
  physics: number;
  biology: number;
  it: number;
  cs: number;
  business: number;
  accounting: number;
  economics: number;
  history: number;
  geography: number;
  psychology: number;
  extraSubjects: number[] | undefined;
  extraSubjectsGrades: number[] | undefined;
}

const apiURL = "https://iip-admin-website.vercel.app";

export const fetchALevelAlumniLatestTopThree = async () => {
  try {
    const response = await fetch(`${apiURL}/api/aLevelClass/getLatestTopThree`);
    const jsonData = await response.json();

    return jsonData[0].alumni as ALevelAlumniInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchALevelClasses = async () => {
  try {
    const response = await fetch(`${apiURL}/api/aLevelClass/getAll`);
    const jsonData = await response.json();

    return jsonData as ALevelClassInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchALevelClassByYearAndSeries = async (
  year: number,
  series: ALevelSeriesType
) => {
  try {
    const response = await fetch(
      `${apiURL}/api/aLevelClass/getByYearAndSeries?year=${year}&series=${series}`
    );
    const jsonData = await response.json();

    return jsonData as ALevelClassInterface;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const searchALevelAlumniByName = async (name: string) => {
  try {
    const formattedName = encodeURIComponent(name);
    const response = await fetch(
      `${apiURL}/api/aLevelAlumni/search?name=${formattedName}`
    );
    const jsonData = await response.json();

    return jsonData as ALevelAlumniInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const getLongALevelGrades = (alumni: ALevelAlumniInterface) => {
  let text = [] as String[];

  if (alumni.english != 0) {
    text.push(`English: ${intToGrade[alumni.english as IntGradesType]}`);
  }
  if (alumni.pureMaths != 0) {
    text.push(`Pure Maths: ${intToGrade[alumni.pureMaths as IntGradesType]}`);
  }
  if (alumni.furtherMaths != 0) {
    text.push(
      `Further Maths: ${intToGrade[alumni.furtherMaths as IntGradesType]}`
    );
  }
  if (alumni.chemistry != 0) {
    text.push(`Chemistry: ${intToGrade[alumni.chemistry as IntGradesType]}`);
  }
  if (alumni.physics != 0) {
    text.push(`Physics: ${intToGrade[alumni.physics as IntGradesType]}`);
  }
  if (alumni.biology != 0) {
    text.push(`Biology: ${intToGrade[alumni.biology as IntGradesType]}`);
  }
  if (alumni.it != 0) {
    text.push(`IT: ${intToGrade[alumni.it as IntGradesType]}`);
  }
  if (alumni.cs != 0) {
    text.push(`Computer Science: ${intToGrade[alumni.cs as IntGradesType]}`);
  }
  if (alumni.business != 0) {
    text.push(`Business: ${intToGrade[alumni.business as IntGradesType]}`);
  }
  if (alumni.accounting != 0) {
    text.push(`Accounting: ${intToGrade[alumni.accounting as IntGradesType]}`);
  }
  if (alumni.economics != 0) {
    text.push(`Economics: ${intToGrade[alumni.economics as IntGradesType]}`);
  }
  if (alumni.history != 0) {
    text.push(`History: ${intToGrade[alumni.history as IntGradesType]}`);
  }
  if (alumni.geography != 0) {
    text.push(`Geography: ${intToGrade[alumni.geography as IntGradesType]}`);
  }
  if (alumni.psychology != 0) {
    text.push(`Psychology: ${intToGrade[alumni.psychology as IntGradesType]}`);
  }

  return text;
};
