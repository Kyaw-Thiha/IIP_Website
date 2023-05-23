import { useState } from "react";
import { Major, majors } from "./subjectsData";

const subjectsList = () => {
  const defaultMajor = {
    icon: "",
    name: "",
    coreSubjects: [],
    optionalSubjects: [],
  };
  const [currentMajor, setCurrentMajor] = useState(defaultMajor as Major);

  const onMajorClick = (majorName: string) => {
    const selectedMajor = majors.filter((major) => {
      return major.name == majorName;
    });
    setCurrentMajor(selectedMajor[0]);
  };

  return (
    <>
      <div className="mt-8 bg-gray-300 px-4 py-4 md:mx-8 md:rounded-xl md:px-8">
        <h2 className="text-center text-4xl">Choose Your Major</h2>
        <div className="mt-12">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
            {majors.map((major) => {
              return (
                <button
                  key={major.name}
                  onClick={() => onMajorClick(major?.name ?? "")}
                  className="flex flex-col items-center justify-center gap-5 rounded-lg bg-primary px-4 py-4 text-white"
                >
                  <img
                    src={major.icon}
                    alt={`${major.name} Icon`}
                    width="100"
                    height="100"
                  />
                  <div>{major.name}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-8 mt-12">
        <h2 className="mb-8 text-4xl">Subject Guide</h2>
        {!!currentMajor.name ? (
          <div
            className="flex flex-col gap-12 md:flex-row md:gap-0"
            v-if="currentMajor.name != ''"
          >
            <div className="flex-1">
              <h3 className="mb-4 text-xl md:text-3xl">Core Subjects</h3>
              {currentMajor.coreSubjects.map((subject) => {
                return <div key={subject}>{subject}</div>;
              })}
            </div>
            <div className="flex-1">
              <h3 className="mb-4 text-xl md:text-3xl">
                Non-Essential Subjects
              </h3>
              {currentMajor.optionalSubjects.map((subject) => {
                return <div key={subject}>{subject}</div>;
              })}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default subjectsList;
