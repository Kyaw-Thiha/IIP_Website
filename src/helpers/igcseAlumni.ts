import { IntGradesType, intToGrade } from "src/helpers/alumni";

export interface IGCSEClassInterface {
  id: string;
  year: number;
  series: IGCSESeriesType;
  alumni?: IGCSEAlumniInterface[];
}
export type IGCSESeriesType = "Feb/Mar" | "May/Jun" | "Oct/Nov";

export interface IGCSEAlumniInterface {
  id: string;
  name: string;
  image: string;
  gender: "Male" | "Female";
  esl: number;
  efl: number;
  englishLiterature: number;
  emaths: number;
  amaths: number;
  chemistry: number;
  physics: number;
  biology: number;
  ict: number;
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

export const fetchIGCSEAlumniLatestTopThree = async () => {
  try {
    const response = await fetch(`${apiURL}/api/igcseClass/getLatestTopThree`);
    const jsonData = await response.json();

    return jsonData[0].alumni as IGCSEAlumniInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchIGCSEClasses = async () => {
  try {
    const response = await fetch(`${apiURL}/api/igcseClass/getAll`);
    const jsonData = await response.json();

    return jsonData as IGCSEClassInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchIGCSEClassByYearAndSeries = async (
  year: number,
  series: IGCSESeriesType
) => {
  try {
    const response = await fetch(
      `${apiURL}/api/igcseClass/getByYearAndSeries?year=${year}&series=${encodeURIComponent(
        series
      )}`
    );
    const jsonData = await response.json();

    return jsonData as IGCSEClassInterface;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const searchIGCSEAlumniByName = async (name: string) => {
  try {
    const formattedName = encodeURIComponent(name);
    const response = await fetch(
      `${apiURL}/api/igcseAlumni/search?name=${formattedName}`
    );
    const jsonData = await response.json();

    return jsonData as IGCSEAlumniInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const getLongIGCSEGrades = (alumni: IGCSEAlumniInterface) => {
  let text = [] as String[];

  if (alumni.esl != 0) {
    text.push(`ESL: ${intToGrade[alumni.esl as IntGradesType]}`);
  }
  if (alumni.efl != 0) {
    text.push(`EFL: ${intToGrade[alumni.efl as IntGradesType]}`);
  }
  if (alumni.emaths != 0) {
    text.push(`E.Maths: ${intToGrade[alumni.emaths as IntGradesType]}`);
  }
  if (alumni.amaths != 0) {
    text.push(`A.Maths: ${intToGrade[alumni.amaths as IntGradesType]}`);
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
  if (alumni.ict != 0) {
    text.push(`ICT: ${intToGrade[alumni.ict as IntGradesType]}`);
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
