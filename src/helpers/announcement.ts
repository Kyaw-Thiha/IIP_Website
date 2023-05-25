const apiURL = "https://iip-admin-website.vercel.app";

export interface AnnouncementInterface {
  id: string;
  title: string;
  image: string;
  text: string;
}

export const fetchAnnouncements = async () => {
  try {
    const response = await fetch(`${apiURL}/api/announcement/getAll`);
    const jsonData = await response.json();

    return jsonData as AnnouncementInterface[];
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const fetchAnnouncementById = async () => {
  try {
    const response = await fetch(`${apiURL}/api/announcement/getById`);
    const jsonData = await response.json();

    return jsonData as AnnouncementInterface;
  } catch (error) {
    console.log("Error fetching data:", error);
  }
};

export const getShortText = (text: string) => {
  const words = text.split(" ");
  if (words.length > 80) {
    return `${words.slice(0, 80).join(" ")} ...`;
  } else {
    return text;
  }
};
