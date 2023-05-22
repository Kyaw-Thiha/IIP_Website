import { useEffect, useState } from "react";
import { Image } from "astro:assets";
// import AlumniBoy1 from "@assets/alumni/AlumniBoy-1.png";
// import AlumniBoy2 from "@assets/alumni/AlumniBoy-2.png";
// import AlumniBoy3 from "@assets/alumni/AlumniBoy-3.png";
// import AlumniGirl1 from "@assets/alumni/AlumniGirl-1.png";
// import AlumniGirl2 from "@assets/alumni/AlumniGirl-2.png";
// import AlumniGirl3 from "@assets/alumni/AlumniGirl-3.png";

interface AlumniInterface {
  id: string;
  name: string;
  image: string;
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

const HomeAlumni: React.FC = () => {
  const [data, setData] = useState([] as AlumniInterface[]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://iip-admin-website.vercel.app/api/igcseClass/getLatestTopThree"
      );
      const jsonData = await response.json();
      setData(jsonData[0].alumni);

      console.log(jsonData);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  // const getRandomImage = () => {
  //   const images = [
  //     AlumniBoy1,
  //     AlumniBoy2,
  //     AlumniBoy3,
  //     AlumniGirl1,
  //     AlumniGirl2,
  //     AlumniGirl3,
  //   ];

  //   return images[Math.floor(Math.random() * images.length)];
  // };

  return (
    <section className="mb-8 min-h-[40vh] md:mb-0">
      <h2 className="mb-4 text-center text-4xl font-bold leading-normal text-secondary md:mb-12 md:text-6xl">
        Alumni
      </h2>
      <div className="mx-4 flex flex-col items-center justify-center gap-4 md:mx-8 md:flex-row md:gap-8">
        {/* <div className="alumni-image">
          <img src="/images/logo.png" />
        </div>
        <div className="alumni-image text-center">
          <img src="/images/logo.png" />
        </div>
        <div className="alumni-image text-center">
          <img src="/images/logo.png" />
        </div> */}
        {data.map((alumni) => {
          return (
            <div>
              {alumni.name}
              {alumni.image == "" ? (
                <Image
                  src={alumni.image}
                  alt={`Image of ${alumni.name}`}
                  width={300}
                  height={300}
                />
              ) : (
                <Image
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
};

export default HomeAlumni;
