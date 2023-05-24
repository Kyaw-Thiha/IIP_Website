import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import type { IGCSEAlumniInterface } from "@helpers/igcseAlumni";
import type { ALevelAlumniInterface } from "@helpers/aLevelAlumni";

function AlumniList() {
  const [curriculum, setCurriculum] = useState("IGCSE" as "IGCSE" | "A-Levels");
  const [alumni, setAlumni] = useState(
    [] as IGCSEAlumniInterface[] | ALevelAlumniInterface[]
  );

  return (
    <div className="mx-4 mt-12 flex md:mx-8">
      <div className="grid w-full grid-cols-2 gap-12 md:grid-cols-4 ">
        <div className="col-span-2 flex gap-4">
          <Input
            className="h-12 text-lg"
            placeholder="Search by name of the alumni"
          />
          <Button className="h-12 text-white">
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
        <div>Hi</div>
      </div>
    </div>
  );
}
export default AlumniList;
