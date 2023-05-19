import { Button } from "@components/ui/button";
import { Input } from "@components/ui/input";

import { SearchIcon } from "lucide-react";
import "./Alumni.css";

function AlumniList() {
  return (
    <div className="flex w-full space-x-2 p-10 ">
      <div className="flex w-6/12 flex-row">
        <Input
          className="height: rounded-none border-2 border-r-0 border-black focus-visible:ring-0"
          type="email"
          placeholder="Search"
        />

        <Button className="rounded-none border-2 border-l-0 border-black bg-white hover:bg-white">
          <SearchIcon className="mx-0 transition-all hover:scale-x-125 hover:scale-y-125 " />
        </Button>
      </div>
    </div>
  );
}
export default AlumniList;
