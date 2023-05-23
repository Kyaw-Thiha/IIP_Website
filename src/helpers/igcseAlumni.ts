export interface IGCSEClassInterface {
  id: string;
  year: number;
  series: "Feb/Mar" | "May/Jun" | "Oct/Nov";
  alumni?: IGCSEAlumniInterface[];
}

export interface IGCSEAlumniInterface {
  id: string;
  name: string;
  image: string;
  gender: "Male" | "Female";
  esl: number;
  efl: number;
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

export const fetchIGCSEAlumniLatestTopThree = async () => {
  try {
    const response = await fetch(
      "https://iip-admin-website.vercel.app/api/igcseClass/getLatestTopThree"
    );
    const jsonData = await response.json();

    return jsonData[0].alumni as IGCSEAlumniInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchIGCSEClasses = async () => {
  try {
    const response = await fetch(
      "https://iip-admin-website.vercel.app/api/igcseClass/getAll"
    );
    const jsonData = await response.json();

    return jsonData as IGCSEClassInterface;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchIGCSEClassByYearAndSeries = async (
  year: number,
  series: "Feb/Mar" | "May/Jun" | "Oct/Nov"
) => {
  try {
    const response = await fetch(
      `https://iip-admin-website.vercel.app/api/igcseClass/getByYearAndSeries?year=${year}&series=${series}`
    );
    const jsonData = await response.json();

    return jsonData as IGCSEClassInterface;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
