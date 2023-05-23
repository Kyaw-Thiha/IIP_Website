import { useEffect, useState } from "react";
// import { Image } from "astro:assets";
import AlumniBoy1 from "@assets/alumni/AlumniBoy-1.png";
import AlumniBoy2 from "@assets/alumni/AlumniBoy-2.png";
import AlumniBoy3 from "@assets/alumni/AlumniBoy-3.png";
import AlumniGirl1 from "@assets/alumni/AlumniGirl-1.png";
import AlumniGirl2 from "@assets/alumni/AlumniGirl-2.png";
import AlumniGirl3 from "@assets/alumni/AlumniGirl-3.png";

interface IGCSEAlumniInterface {
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

function HomeAlumni() {
  const [igcseAlumni, setIGCSEAlumni] = useState([] as IGCSEAlumniInterface[]);

  useEffect(() => {
    console.log("hi");
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("hello");
    try {
      const response = await fetch(
        "https://iip-admin-website.vercel.app/api/igcseClass/getLatestTopThree"
      );
      const jsonData = await response.json();
      setIGCSEAlumni(jsonData[0].alumni);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const getRandomImage = (gender: string) => {
    const boyImages = [AlumniBoy1.src, AlumniBoy2.src, AlumniBoy3.src];
    const girlImages = [AlumniGirl1.src, AlumniGirl2.src, AlumniGirl3.src];

    if (gender == "Male") {
      return boyImages[Math.floor(Math.random() * boyImages.length)];
    } else {
      return girlImages[Math.floor(Math.random() * girlImages.length)];
    }
  };

  return (
    <section className="mb-8 min-h-[40vh] md:mb-0">
      <h2 className="mb-4 text-center text-4xl font-bold leading-normal text-secondary md:mb-12 md:text-6xl">
        Alumni
      </h2>
      <div className="mx-4 flex flex-col items-center justify-center gap-4 md:mx-8 md:flex-row md:gap-12">
        {igcseAlumni.map((alumni) => {
          return (
            <div key={alumni.id}>
              <h3 className="mb-2 text-center text-lg md:mb-4 md:text-2xl">
                {alumni.name}
              </h3>
              {alumni.image == "" ? (
                <img
                  src={getRandomImage(alumni.gender)}
                  alt={`Image of ${alumni.name}`}
                  width={300}
                  height={300}
                />
              ) : (
                <img
                  src={alumni.image}
                  alt={`Image of ${alumni.name}`}
                  width={300}
                  height={300}
                />
              )}
            </div>
          );
        })}
      </div>
      <div className="mx-4 mt-8 text-lg md:flex md:justify-center">
        <a href="/alumni" className="text-blue-700 hover:underline">
          See All
        </a>
      </div>
    </section>
  );
}

export default HomeAlumni;
