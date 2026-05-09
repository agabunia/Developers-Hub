export type FeedItemType = {
  id: number;
  developer_id: number;
  name_geo: string;
  name_end: string;
  logo_location: string;
  type: "image" | "video";
  content_location?: string;
  video_url?: string;
  title_geo?: string;
  title_end?: string;
  description_geo?: string;
  description_end?: string;
  date: string;
};

export const feedItems: FeedItemType[] = [
  {
    id: 1,
    developer_id: 1,
    name_geo: "ბლოქსი",
    name_end: "BLOX",
    logo_location: "blox.jpg",
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "ახალი პროექტი",
    title_end: "New Project Launch",
    description_geo: "ჩვენი ახალი ფლაგმენენი პროექტი ხელმისაწვდომი ხარისხითა და თანამედროვე დიზაინით.",
    description_end: "Our latest flagship project showcasing premium quality and modern design.",
    date: "2024-01-15",
  },
  {
    id: 2,
    developer_id: 1,
    name_geo: "ბლოქსი",
    name_end: "BLOX",
    logo_location: "blox.jpg",
    type: "video",
    video_url: "https://www.youtube.com/embed/4IdWX_5CjLQ",
    title_geo: "პროექტის ტური",
    title_end: "Project Tour",
    description_geo: "გაიცანით ჩვენი ახალი პროექტის ყველა დეტალი ვიდეო ტურის საშუალებით.",
    description_end: "Explore every detail of our new project through an immersive video tour.",
    date: "2024-01-20",
  },
  {
    id: 3,
    developer_id: 1,
    name_geo: "ბლოქსი",
    name_end: "BLOX",
    logo_location: "blox.jpg",
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "დიზაინ კონცეფცია",
    title_end: "Design Concept",
    description_geo: "მოდერნული დიზაინი და კლასიკური კომფორტი ერთ პროექტში.",
    description_end: "Modern design meets classic comfort in our newest concept.",
    date: "2024-01-25",
  },
  {
    id: 4,
    developer_id: 1,
    name_geo: "ბლოქსი",
    name_end: "BLOX",
    logo_location: "blox.jpg",
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 2,
    name_geo: "არჩი",
    name_end: "Archi",
    logo_location: "archi.jpg",
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 3,
    name_geo: "მ2",
    name_end: "m2",
    logo_location: "m2.jpg",
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 4,
    name_geo: "დეკა",
    name_end: "Deka",
    logo_location: "deka.jpg",
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
  {
    id: 1,
    developer_id: 5,
    name_geo: "ბიოგრაფი",
    name_end: "Biograpi",
    logo_location: "biograpi.jpg",
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
];
