import { Button } from "@components/ui/button";
import type { AnnouncementInterface } from "@helpers/announcement";
import { ArrowBigLeft } from "lucide-react";

interface Props {
  announcement: AnnouncementInterface;
  backBtnHandler: Function;
}
function Announcement(props: Props) {
  return (
    <section className="mx-4 md:mx-8">
      <Button variant="outline" onClick={() => props.backBtnHandler()}>
        <ArrowBigLeft className="h-8 w-8" />
      </Button>
      <h2 className="mt-4">{props.announcement.title}</h2>
      <div className="mt-8 flex items-center justify-center">
        <img
          className="md:w-[60vw]"
          src={props.announcement.image}
          alt={`Image for announcement titled - ${props.announcement.title}`}
        />
      </div>
      <p
        className="mt-8 text-justify indent-8"
        dangerouslySetInnerHTML={{
          __html: props.announcement.text,
        }}
      />
    </section>
  );
}

export default Announcement;
