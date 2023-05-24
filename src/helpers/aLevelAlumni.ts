export interface ALevelClassInterface {
  id: string;
  year: number;
  series: "Jan" | "May/Jun" | "Oct";
  alumni?: ALevelAlumniInterface[];
}

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

export const fetchALevelAlumniLatestTopThree = async () => {
  try {
    const response = await fetch(
      "https://iip-admin-website.vercel.app/api/aLevelClass/getLatestTopThree"
    );
    const jsonData = await response.json();

    return jsonData[0].alumni as ALevelAlumniInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchALevelClasses = async () => {
  try {
    const response = await fetch(
      "https://iip-admin-website.vercel.app/api/aLevelClass/getAll"
    );
    const jsonData = await response.json();

    return jsonData as ALevelClassInterface;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchALevelClassByYearAndSeries = async (
  year: number,
  series: "Feb/Mar" | "May/Jun" | "Oct/Nov"
) => {
  try {
    const response = await fetch(
      `https://iip-admin-website.vercel.app/api/aLevelClass/getByYearAndSeries?year=${year}&series=${series}`
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
      `https://iip-admin-website.vercel.app/api/aLevelAlumni/search?name=${formattedName}`
    );
    const jsonData = await response.json();

    return jsonData as ALevelAlumniInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};
