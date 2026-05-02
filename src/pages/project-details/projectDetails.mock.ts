export type ProjectDetailsType = {
  id: number;
  name_geo: string;
  name_end: string;
  logo_location: string;
  banner_location: string;
  rating: number;
  likes: number;
  description_geo: string;
  description_end: string;
  contact: {
    phone: string;
    email: string;
    website: string;
    instagram: string;
    facebook: string;
    linkedin: string;
  };
};

export type FeedItemType = {
  id: number;
  developer_id: number;
  type: "image" | "video";
  content_location?: string;
  video_url?: string;
  title_geo?: string;
  title_end?: string;
  description_geo?: string;
  description_end?: string;
  date: string;
};

export const projectDetails: ProjectDetailsType[] = [
  {
    id: 1,
    name_geo: "ბლოქსი",
    name_end: "BLOX",
    logo_location: "blox.jpg",
    banner_location: "blox_banner.jpg",
    rating: 4.0,
    likes: 22000,
    description_geo: "საცხოვრებელი სივრცეები, სადაც ხარისხი, კომფორტი და მოფიქრული დიზაინი ერთად შედის ჩვენი ცხოვრების ხელმისაწვდომი და სახალისო გამოსახულების შესაქმნელად.",
    description_end: "Living spaces where quality, comfort, and thoughtful design come together to shape the life you deserve. Living spaces where quality, comfort, and thoughtful design come together.",
    contact: {
      phone: "+995 591 98 32 10",
      email: "info@blox.ge",
      website: "www.blox.ge",
      instagram: "@bloxofficial",
      facebook: "blox.ge",
      linkedin: "blox-georgia",
    },
  },
  {
    id: 2,
    name_geo: "არჩი",
    name_end: "Archi",
    logo_location: "archi.jpg",
    banner_location: "archi_banner.jpg",
    rating: 4.5,
    likes: 18500,
    description_geo: "აქტიტექტურული გადაწყვეტილებები, რომლებიც შაბლონიან თქვენი სიზმრების გაბედულ რეალიზაციას.",
    description_end: "Architectural solutions that bring your boldest dreams to life with innovative design and precision.",
    contact: {
      phone: "+995 591 12 34 56",
      email: "info@archi.ge",
      website: "www.archi.ge",
      instagram: "@archi_ge",
      facebook: "archi.ge",
      linkedin: "archi-georgia",
    },
  },
  {
    id: 3,
    name_geo: "მ2",
    name_end: "m2",
    logo_location: "m2.jpg",
    banner_location: "m2_banner.jpg",
    rating: 4.2,
    likes: 15000,
    description_geo: "თანამედროვე სტილი და ფუნქციონალობა თითოეულ მეტრ კვადრატში.",
    description_end: "Modern style and functionality in every square meter of space.",
    contact: {
      phone: "+995 591 23 45 67",
      email: "info@m2.ge",
      website: "www.m2.ge",
      instagram: "@m2_developers",
      facebook: "m2.ge",
      linkedin: "m2-developers",
    },
  },
  {
    id: 4,
    name_geo: "დეკა",
    name_end: "Deka",
    logo_location: "deka.jpg",
    banner_location: "deka_banner.jpg",
    rating: 3.9,
    likes: 12500,
    description_geo: "ხარისხიანი პროექტები და სანდო პარტნიორი თქვენი სიზმრების რეალიზაციაში.",
    description_end: "Quality projects and trusted partner in making your visions a reality.",
    contact: {
      phone: "+995 591 34 56 78",
      email: "info@deka.ge",
      website: "www.deka.ge",
      instagram: "@deka_ge",
      facebook: "deka.ge",
      linkedin: "deka-georgia",
    },
  },
  {
    id: 5,
    name_geo: "ბიოგრაფი",
    name_end: "Biograpi",
    logo_location: "biograpi.jpg",
    banner_location: "biograpi_banner.jpg",
    rating: 4.3,
    likes: 20000,
    description_geo: "ბიოგრაფიული სივრცეები, რომლებიც ამბობენ თქვენი ისტორიას.",
    description_end: "Biographical spaces that tell your unique story.",
    contact: {
      phone: "+995 591 45 67 89",
      email: "info@biograpi.ge",
      website: "www.biograpi.ge",
      instagram: "@biograpi_ge",
      facebook: "biograpi.ge",
      linkedin: "biograpi-georgia",
    },
  },
  {
    id: 6,
    name_geo: "აპექსი",
    name_end: "Apex",
    logo_location: "apex.jpg",
    banner_location: "apex_banner.jpg",
    rating: 4.1,
    likes: 16800,
    description_geo: "ზღვარზე სიბრძნე - საუკეთესო მაღალწერტილოვანი რეალური ქონება.",
    description_end: "Excellence at the peak - premium real estate developments.",
    contact: {
      phone: "+995 591 56 78 90",
      email: "info@apex.ge",
      website: "www.apex.ge",
      instagram: "@apex_developers",
      facebook: "apex.ge",
      linkedin: "apex-georgia",
    },
  },
  {
    id: 7,
    name_geo: "თეთრი კვადრატი",
    name_end: "White Square",
    logo_location: "white_square.jpg",
    banner_location: "white_square_banner.jpg",
    rating: 4.0,
    likes: 14200,
    description_geo: "სიბრძნე და სიმარტივე თეთრ სივრცეში.",
    description_end: "Elegance and simplicity in white spaces.",
    contact: {
      phone: "+995 591 67 89 01",
      email: "info@whitesquare.ge",
      website: "www.whitesquare.ge",
      instagram: "@whitesquare_ge",
      facebook: "whitesquare.ge",
      linkedin: "white-square-georgia",
    },
  },
  {
    id: 8,
    name_geo: "ისტორია",
    name_end: "Istoria",
    logo_location: "istoria.jpg",
    banner_location: "istoria_banner.jpg",
    rating: 3.8,
    likes: 11500,
    description_geo: "ისტორია, რომელიც წერი თანამედროვე ხელოვნების საშუალებით.",
    description_end: "History written with modern architectural craftsmanship.",
    contact: {
      phone: "+995 591 78 90 12",
      email: "info@istoria.ge",
      website: "www.istoria.ge",
      instagram: "@istoria_ge",
      facebook: "istoria.ge",
      linkedin: "istoria-georgia",
    },
  },
];

export const feedItems: FeedItemType[] = [
  {
    id: 1,
    developer_id: 1,
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
    type: "video",
    video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title_geo: "პროექტის ტური",
    title_end: "Project Tour",
    description_geo: "გაიცანით ჩვენი ახალი პროექტის ყველა დეტალი ვიდეო ტურის საშუალებით.",
    description_end: "Explore every detail of our new project through an immersive video tour.",
    date: "2024-01-20",
  },
  {
    id: 3,
    developer_id: 1,
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
    type: "image",
    content_location: "feed_1.jpg",
    title_geo: "შიგა დეკორაცია",
    title_end: "Interior Design",
    description_geo: "ყველა ძირითადი ელემენტი, რომელიც გახდის თქვენს სახლს ღვინით.",
    description_end: "Every essential element that makes your home truly special.",
    date: "2024-02-01",
  },
];
