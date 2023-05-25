import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

import { SearchIcon, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  IGCSEAlumniInterface,
  IGCSEClassInterface,
  IGCSESeriesType,
  fetchIGCSEClassByYearAndSeries,
  fetchIGCSEClasses,
  getLongIGCSEGrades,
  searchIGCSEAlumniByName,
} from "@helpers/igcseAlumni";
import {
  ALevelAlumniInterface,
  ALevelClassInterface,
  ALevelSeriesType,
  fetchALevelClassByYearAndSeries,
  fetchALevelClasses,
  getLongALevelGrades,
  searchALevelAlumniByName,
} from "@helpers/aLevelAlumni";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@components/ui/accordion";
import { getRandomImage, getShortGrades } from "@helpers/alumni";

function AlumniList() {
  // Variable for auto animating
  const [parent, enableAnimation] = useAutoAnimate();

  // Variales used to query for alumni
  const [curriculum, setCurriculum] = useState("IGCSE" as "IGCSE" | "A-Levels");
  const [classes, setClasses] = useState(
    [] as IGCSEClassInterface[] | ALevelClassInterface[]
  );
  const [classYear, setClassYear] = useState(0);
  const [classSeries, setClassSeries] = useState(
    "May/Jun" as IGCSESeriesType | ALevelSeriesType
  );
  // Storing the currently rendered alumni
  const [alumni, setAlumni] = useState(
    [] as IGCSEAlumniInterface[] | ALevelAlumniInterface[]
  );
  // Temporary storage when alumni is searched
  const [prevAlumni, setPrevAlumni] = useState(
    [] as IGCSEAlumniInterface[] | ALevelAlumniInterface[]
  );
  // Used to define whether or not user is searching
  const [isSearching, setIsSearching] = useState(false);

  const [searchText, setSearchText] = useState("");
  const search = async () => {
    if (searchText.trim() == "") {
      setAlumni(prevAlumni);
      setIsSearching(false);
    } else {
      if (curriculum == "IGCSE") {
        const data = await searchIGCSEAlumniByName(searchText);

        setAlumni(data ?? []);

        // Store previous fetched data
        if (!isSearching) setPrevAlumni(alumni);
        setIsSearching(true);
      } else {
        const data = await searchALevelAlumniByName(searchText);
        setPrevAlumni(alumni);
        setAlumni(data ?? []);

        // Store previous fetched data
        if (!isSearching) setPrevAlumni(alumni);
        setIsSearching(true);
      }
    }
  };

  useEffect(() => {
    if (curriculum == "IGCSE") {
      getIGCSEClasses();
    } else {
      getALevelClasses();
    }
  }, [curriculum]);

  const getIGCSEClasses = async () => {
    const data = await fetchIGCSEClasses();
    setClasses(data ?? []);
    setClassYear(data?.at(0)?.year ?? 0);
    setClassSeries(data?.at(0)?.series ?? "May/Jun");
  };

  const getALevelClasses = async () => {
    const data = await fetchALevelClasses();
    setClasses(data ?? []);
    setClassYear(data?.at(0)?.year ?? 0);
    setClassSeries(data?.at(0)?.series ?? "May/Jun");
  };

  useEffect(() => {
    if (curriculum == "IGCSE") {
      getIGCSEAlumniByYearAndSeries();
    } else {
      getALevelAlumniByYearAndSeries();
    }
  }, [classYear, classSeries]);

  const getIGCSEAlumniByYearAndSeries = async () => {
    const data = await fetchIGCSEClassByYearAndSeries(
      classYear,
      classSeries as IGCSESeriesType
    );

    setAlumni(data?.alumni ?? []);
  };

  const getALevelAlumniByYearAndSeries = async () => {
    const data = await fetchALevelClassByYearAndSeries(
      classYear,
      classSeries as ALevelSeriesType
    );

    setAlumni(data?.alumni ?? []);
  };

  return (
    <div className="mx-4 mt-12 flex flex-col md:mx-20">
      <div className="flex w-full flex-col gap-12 md:grid md:grid-cols-4 ">
        <div className="col-span-2 flex gap-4">
          <Input
            className="h-12"
            placeholder="Search by name of the alumni"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {isSearching ? (
            <Button
              className="h-12 text-white"
              onClick={() => {
                setAlumni(prevAlumni);
                setIsSearching(false);
              }}
            >
              <X className="h-6 w-6" />
            </Button>
          ) : (
            <></>
          )}

          <Button className="h-12 text-white" onClick={() => search()}>
            <p className="hidden md:block">Search</p>
            <SearchIcon className="ml-2 h-6 w-6" />
          </Button>
        </div>
        <div className="col-span-1 flex items-center justify-center">
          <Button
            onClick={() => setCurriculum("IGCSE")}
            size="lg"
            className={`h-12 rounded-none md:text-lg ${
              curriculum == "IGCSE"
                ? "bg-secondary text-white"
                : "bg-white text-black"
            }`}
            variant={curriculum == "IGCSE" ? "secondary" : "outline"}
          >
            IGCSE
          </Button>
          <Button
            onClick={() => setCurriculum("A-Levels")}
            size="lg"
            className={`h-12 rounded-none md:text-lg ${
              curriculum == "A-Levels"
                ? "bg-secondary text-white"
                : "bg-white text-black"
            }`}
            variant={curriculum == "A-Levels" ? "secondary" : "outline"}
          >
            A-Levels
          </Button>
        </div>
        {/* <div></div> */}
      </div>

      {/*  */}

      <div className="mt-2 flex flex-row gap-4">
        {classes.map((batch) => {
          return (
            <Button key={batch.id} variant="link">
              {batch.series} {batch.year}
            </Button>
          );
        })}
      </div>

      <div className="mt-4" ref={parent}>
        {alumni.map((alumni) => {
          return (
            <div key={alumni.id}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="flex flex-col md:grid md:grid-cols-4">
                      <h4 className="col-span-1 text-left text-lg">
                        {alumni.name}
                      </h4>
                      <p className="col-span-1 hidden md:block ">
                        {curriculum} Class of {classSeries} {classYear}
                      </p>
                      <div></div>
                      <h4 className="col-span-1 text-left text-lg text-muted-foreground md:text-center md:text-black">
                        {curriculum == "IGCSE"
                          ? getShortGrades({
                              efl: "efl" in alumni ? alumni.efl : 0,
                              esl: "esl" in alumni ? alumni.esl : 0,
                              englishLiterature:
                                "englishLiterature" in alumni
                                  ? alumni.englishLiterature
                                  : 0,
                              emaths: "emaths" in alumni ? alumni.emaths : 0,
                              amaths: "amaths" in alumni ? alumni.amaths : 0,
                              chemistry: alumni.chemistry,
                              physics: alumni.physics,
                              biology: alumni.biology,
                              ict: "ict" in alumni ? alumni.ict : 0,
                              cs: alumni.cs,
                              business: alumni.business,
                              accounting: alumni.accounting,
                              economics: alumni.economics,
                              history: alumni.history,
                              geography: alumni.geography,
                              psychology: alumni.psychology,
                            })
                          : getShortGrades({
                              english: "english" in alumni ? alumni.english : 0,
                              pureMaths:
                                "pureMaths" in alumni ? alumni.pureMaths : 0,
                              furtherMaths:
                                "furtherMaths" in alumni
                                  ? alumni.furtherMaths
                                  : 0,
                              chemistry: alumni.chemistry,
                              physics: alumni.physics,
                              biology: alumni.biology,
                              it: "it" in alumni ? alumni.it : 0,
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
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col md:grid md:grid-cols-4">
                      <div>
                        {alumni.image == "" ? (
                          <img
                            src={getRandomImage(alumni.gender)}
                            alt={`Image of ${alumni.name}`}
                            width={200}
                            height={200}
                            className="h-[200px] w-[200px] object-cover object-top"
                          />
                        ) : (
                          <img
                            src={alumni.image}
                            alt={`Image of ${alumni.name}`}
                            width={200}
                            height={200}
                            className="h-[200px] w-[200px] object-cover object-top"
                          />
                        )}
                      </div>
                      <div className="col-span-3">
                        <h3 className="text-lg text-secondary">Subjects</h3>
                        <div className="mt-4  grid grid-cols-2 gap-2 md:flex md:gap-4">
                          {curriculum == "IGCSE"
                            ? getLongIGCSEGrades(
                                alumni as IGCSEAlumniInterface
                              ).map((subject, index) => {
                                return <span key={index}>{subject}</span>;
                              })
                            : getLongALevelGrades(
                                alumni as ALevelAlumniInterface
                              ).map((subject, index) => {
                                return <span key={index}>{subject}</span>;
                              })}
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default AlumniList;
