import { useEffect, useState } from "react";
import {
  IGCSEAlumniInterface,
  fetchIGCSEAlumniLatestTopThree,
  getRandomImage,
} from "@helpers/igcseAlumni";

function HomeAlumni() {
  const [igcseAlumni, setIGCSEAlumni] = useState([] as IGCSEAlumniInterface[]);

  useEffect(() => {
    fetchIGCSE();
  }, []);

  const fetchIGCSE = async () => {
    const igcseData = await fetchIGCSEAlumniLatestTopThree();
    setIGCSEAlumni(igcseData as IGCSEAlumniInterface[]);
  };

  return (
    <section className="mb-8 min-h-[40vh] md:mb-0">
      <h2 className="mb-4 text-center text-4xl font-bold leading-normal text-secondary md:mb-12 md:text-6xl">
        Alumni
      </h2>

      <h2 className="mb-2 mt-4 text-center text-xl md:mb-8 md:text-3xl">
        IGCSE
      </h2>
      <div className="mx-4 flex flex-col items-center justify-center gap-4 md:mx-8 md:flex-row md:gap-12">
        {igcseAlumni.map((alumni) => {
          return (
            <div key={alumni.id}>
              <h3 className="mb-2 text-center text-lg text-muted-foreground md:mb-4 md:text-2xl">
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
