export type ProjectType = {
  id: number;
  developer_id: number;
  name_geo: string;
  name_eng: string;
  location_geo: string;
  location_end: string;
  image_location: string;
  status: "finished" | "on_going";
  completion_percentage?: number;
  start_date?: string;
  end_date?: string;
  budget?: string;
  description_geo?: string;
  description_end?: string;
  area_sqm?: number;
  units_count?: number;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    developer_id: 1,
    name_geo: "ბილიკი | კოლიჯი",
    name_eng: "BLOX | Kolonici",
    location_geo: "საბულვარი ქ., ქაფი-ში მახ კი",
    location_end: "Sabul vari St, Kafpi District",
    image_location: "img_1.jpg",
    status: "finished",
    completion_percentage: 100,
    start_date: "2020-01-15",
    end_date: "2022-12-20",
    budget: "$45 Million",
    area_sqm: 125000,
    units_count: 180,
  },
  {
    id: 2,
    developer_id: 1,
    name_geo: "ბილიკი | სამეფო ტიბა",
    name_eng: "BLOX | Royal Tower",
    location_geo: "ვაზის გასწვრივ, თბილისი",
    location_end: "Vazi Ave, Tbilisi",
    image_location: "img_2.jpg",
    status: "finished",
    completion_percentage: 100,
    start_date: "2019-06-01",
    end_date: "2023-05-15",
    budget: "$68 Million",
    area_sqm: 185000,
    units_count: 250,
  },
  {
    id: 3,
    developer_id: 1,
    name_geo: "ბილიკი | აზიელი პროექტი",
    name_eng: "BLOX | Premium Living",
    location_geo: "თეთრი რიგი, თბილისი",
    location_end: "White Row, Tbilisi",
    image_location: "img_3.jpg",
    status: "finished",
    completion_percentage: 100,
    start_date: "2021-03-10",
    end_date: "2023-11-30",
    budget: "$52 Million",
    area_sqm: 98000,
    units_count: 140,
  },
  {
    id: 4,
    developer_id: 1,
    name_geo: "ბილიკი | მდელოს პარკი",
    name_eng: "BLOX | Meadow Park",
    location_geo: "ხელაკსე ნახ., თბილისი",
    location_end: "Xelakse District, Tbilisi",
    image_location: "img_4.jpg",
    status: "on_going",
    completion_percentage: 75,
    start_date: "2022-08-20",
    budget: "$71 Million",
    area_sqm: 156000,
    units_count: 210,
  },
  {
    id: 5,
    developer_id: 1,
    name_geo: "ბილიკი | პიკი კვარტირა",
    name_eng: "BLOX | Peak Residences",
    location_geo: "აღმაშენებლების ქ., თბილისი",
    location_end: "Builders St, Tbilisi",
    image_location: "img_5.jpg",
    status: "on_going",
    completion_percentage: 60,
    start_date: "2023-01-05",
    budget: "$58 Million",
    area_sqm: 112000,
    units_count: 160,
  },
  {
    id: 6,
    developer_id: 1,
    name_geo: "ბილიკი | ღია სურ",
    name_eng: "BLOX | Clear Horizons",
    location_geo: "ღია ქ., დიდუბე",
    location_end: "Clear St, Didube",
    image_location: "img_6.jpg",
    status: "finished",
    completion_percentage: 100,
    start_date: "2018-11-15",
    end_date: "2021-09-20",
    budget: "$42 Million",
    area_sqm: 89000,
    units_count: 120,
  },
  {
    id: 7,
    developer_id: 1,
    name_geo: "ბილიკი | ოქროს კვარტირა",
    name_eng: "BLOX | Golden Park",
    location_geo: "ოქროს ქ., თბილისი",
    location_end: "Golden St, Tbilisi",
    image_location: "img_1.jpg",
    status: "on_going",
    completion_percentage: 45,
    start_date: "2023-06-01",
    budget: "$63 Million",
    area_sqm: 134000,
    units_count: 190,
  },
  {
    id: 8,
    developer_id: 1,
    name_geo: "ბილიკი | მარმარილოს პროექტი",
    name_eng: "BLOX | Marble Quarters",
    location_geo: "მარმარილოს ხეა, თბილისი",
    location_end: "Marble Way, Tbilisi",
    image_location: "img_2.jpg",
    status: "finished",
    completion_percentage: 100,
    start_date: "2020-04-10",
    end_date: "2022-08-15",
    budget: "$55 Million",
    area_sqm: 102000,
    units_count: 145,
  },
  {
    id: 9,
    developer_id: 1,
    name_geo: "ბილიკი | წიწილა გორა",
    name_eng: "BLOX | Blossom Heights",
    location_geo: "ღვინის ხეა, თბილისი",
    location_end: "Wine Ave, Tbilisii",
    image_location: "img_3.jpg",
    status: "finished",
    completion_percentage: 100,
    start_date: "2019-09-01",
    end_date: "2023-02-28",
    budget: "$48 Million",
    area_sqm: 118000,
    units_count: 165,
  },
  {
    id: 10,
    developer_id: 1,
    name_geo: "ბილიკი | მწვანე მოედანი",
    name_eng: "BLOX | Green Square",
    location_geo: "მწვანე ქ., სარაჯიშვილი",
    location_end: "Green St, Sarazhishvili",
    image_location: "img_4.jpg",
    status: "on_going",
    completion_percentage: 55,
    start_date: "2023-02-15",
    budget: "$69 Million",
    area_sqm: 145000,
    units_count: 205,
  },
];

export const getProjectsByDeveloper = (developerId: number): ProjectType[] => {
  return projects.filter((project) => project.developer_id === developerId);
};

export const getProjectsByStatus = (
  developerId: number,
  status?: "finished" | "on_going"
): ProjectType[] => {
  const developerProjects = getProjectsByDeveloper(developerId);
  if (!status) return developerProjects;
  return developerProjects.filter((project) => project.status === status);
};
