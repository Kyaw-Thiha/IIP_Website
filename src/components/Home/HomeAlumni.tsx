import { useEffect, useState } from "react";
import {
  IGCSEAlumniInterface,
  fetchIGCSEAlumniLatestTopThree,
} from "@helpers/igcseAlumni";
import { getRandomImage, getShortGrades } from "@helpers/alumni";
import {
  ALevelAlumniInterface,
  fetchALevelAlumniLatestTopThree,
} from "@helpers/aLevelAlumni";

function HomeAlumni() {
  const [igcseAlumni, setIGCSEAlumni] = useState([] as IGCSEAlumniInterface[]);
  const [aLevelAlumni, setALevelAlumni] = useState(
    [] as ALevelAlumniInterface[]
  );

  useEffect(() => {
    fetchIGCSE();
    fetchALevel();
  }, []);

  const fetchIGCSE = async () => {
    const igcseData = await fetchIGCSEAlumniLatestTopThree();
    setIGCSEAlumni(igcseData as IGCSEAlumniInterface[]);
  };

  const fetchALevel = async () => {
    const aLevelData = await fetchALevelAlumniLatestTopThree();
    setALevelAlumni(aLevelData as ALevelAlumniInterface[]);
  };

  return (
    <section className="mb-8 min-h-[40vh] md:mb-0">
      <h2 className="mb-4 text-center text-4xl font-bold leading-normal text-secondary md:mb-12 md:text-6xl">
        Alumni
      </h2>

      <h2 className="mb-2 mt-4 text-center text-xl font-medium md:mb-8 md:text-3xl md:font-medium">
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
              <h4 className="mt-2 text-center text-lg font-medium">
                {getShortGrades({
                  efl: alumni.efl,
                  esl: alumni.esl,
                  englishLiterature: alumni.englishLiterature,
                  emaths: alumni.emaths,
                  amaths: alumni.amaths,
                  chemistry: alumni.chemistry,
                  physics: alumni.physics,
                  biology: alumni.biology,
                  ict: alumni.ict,
                  cs: alumni.cs,
                  business: alumni.business,
                  accounting: alumni.accounting,
                  economics: alumni.economics,
                  history: alumni.history,
                  geography: alumni.geography,
                  psychology: alumni.psychology,
                })}
              </h4>
            </div>
          );
        })}
      </div>

      <h2 className="mb-2 mt-32 text-center text-xl font-medium md:mb-8 md:text-3xl md:font-medium">
        A Level
      </h2>
      <div className="mx-4 flex flex-col items-center justify-center gap-4 md:mx-8 md:flex-row md:gap-12">
        {aLevelAlumni.map((alumni) => {
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
              <h4 className="mt-2 text-center text-lg font-medium">
                {getShortGrades({
                  english: alumni.english,
                  emaths: alumni.pureMaths,
                  amaths: alumni.furtherMaths,
                  chemistry: alumni.chemistry,
                  physics: alumni.physics,
                  biology: alumni.biology,
                  ict: alumni.it,
                  cs: alumni.cs,
                  business: alumni.business,
                  accounting: alumni.accounting,
                  economics: alumni.economics,
                  history: alumni.history,
                  geography: alumni.geography,
                  psychology: alumni.psychology,
                })}
              </h4>
            </div>
          );
        })}
      </div>

      <div className="mx-4 mt-4 text-lg md:mt-12 md:flex md:justify-center">
        <a href="/alumni" className="text-blue-700 hover:underline">
          See All
        </a>
      </div>
    </section>
  );
}

export default HomeAlumni;
