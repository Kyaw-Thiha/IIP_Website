import { useEffect, useState } from "react";
import { fetchAnnouncements, getShortText } from "@helpers/announcement";
import type { AnnouncementInterface } from "src/helpers/announcement";

function AnnouncementList() {
  const [announcements, setAnnouncements] = useState(
    [] as AnnouncementInterface[]
  );
  useEffect(() => {
    getAnnouncements();
  }, []);

  const getAnnouncements = async () => {
    const data = await fetchAnnouncements();
    setAnnouncements(data ?? []);
  };

  return (
    <section className="mb-20 flex flex-col gap-4 md:mx-6 md:mb-32 md:gap-8">
      {announcements.map((announcement) => {
        return (
          <article
            key={announcement.id}
            className="grid grid-cols-2 items-center justify-around bg-gray-300 p-4 md:border-l-8 md:border-double md:border-secondary md:p-6 lg:flex-row"
          >
            <div>
              <h1 className="mb-4 mt-1 p-1 text-center text-3xl font-bold">
                {announcement.title}
              </h1>
              <div className="flex items-center justify-center">
                <img
                  className="h-1/2 w-1/2"
                  src={announcement.image}
                  alt={`Image for announcement titled - ${announcement.title}`}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <p
                className="mt-8 text-justify indent-8"
                dangerouslySetInnerHTML={{
                  __html: getShortText(announcement.text),
                }}
              />
              <a href="#more" className="text-blue-700 hover:underline">
                Read More
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default AnnouncementList;
