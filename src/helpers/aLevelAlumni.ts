import AlumniBoy1 from "@assets/alumni/AlumniBoy-1.png";
import AlumniBoy2 from "@assets/alumni/AlumniBoy-2.png";
import AlumniBoy3 from "@assets/alumni/AlumniBoy-3.png";
import AlumniGirl1 from "@assets/alumni/AlumniGirl-1.png";
import AlumniGirl2 from "@assets/alumni/AlumniGirl-2.png";
import AlumniGirl3 from "@assets/alumni/AlumniGirl-3.png";

export const getRandomImage = (gender: string) => {
  const boyImages = [AlumniBoy1.src, AlumniBoy2.src, AlumniBoy3.src];
  const girlImages = [AlumniGirl1.src, AlumniGirl2.src, AlumniGirl3.src];

  if (gender == "Male") {
    return boyImages[Math.floor(Math.random() * boyImages.length)];
  } else {
    return girlImages[Math.floor(Math.random() * girlImages.length)];
  }
};

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
