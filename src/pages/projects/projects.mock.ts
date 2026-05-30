export type ProjectListing = {
  id: number;
  developer: string;
  name_eng: string;
  name_geo: string;
  location_eng: string;
  image_location: string;
  status: "finished" | "on_going";
  completion_percentage?: number;
  area_sqm?: number;
  units_count?: number;
  isSaved?: boolean;
};

export const projectsResultTotal = 34;

export const projectListings: ProjectListing[] = [
  {
    id: 1,
    developer: "BLOX",
    name_eng: "BLOX | Lisi",
    name_geo: "ბლოქსი | ლისი",
    location_eng: "Tbilisi, Lisi Lake District",
    image_location: "img_1.jpg",
    status: "finished",
    completion_percentage: 100,
    area_sqm: 142000,
    units_count: 195,
    isSaved: true,
  },
  {
    id: 2,
    developer: "BLOX",
    name_eng: "BLOX | Saburtalo",
    name_geo: "ბლოქსი | საბურთალო",
    location_eng: "Tbilisi, Kazbegi Avenue",
    image_location: "img_2.jpg",
    status: "on_going",
    completion_percentage: 68,
    area_sqm: 118000,
    units_count: 160,
  },
  {
    id: 3,
    developer: "BLOX",
    name_eng: "BLOX | Dighomi",
    name_geo: "ბლოქსი | დიღომი",
    location_eng: "Tbilisi, King Mirian Street",
    image_location: "img_3.jpg",
    status: "finished",
    completion_percentage: 100,
    area_sqm: 95000,
    units_count: 130,
  },
  {
    id: 4,
    developer: "BLOX",
    name_eng: "BLOX | Vake",
    name_geo: "ბლოქსი | ვაკე",
    location_eng: "Tbilisi, Abashidze Street",
    image_location: "img_4.jpg",
    status: "on_going",
    completion_percentage: 45,
    area_sqm: 108000,
    units_count: 148,
  },
  {
    id: 5,
    developer: "BLOX",
    name_eng: "BLOX | Kojori",
    name_geo: "ბლოქსი | კოჯორი",
    location_eng: "Kojori, Mountain Road",
    image_location: "img_5.jpg",
    status: "finished",
    completion_percentage: 100,
    area_sqm: 76000,
    units_count: 102,
  },
  {
    id: 6,
    developer: "BLOX",
    name_eng: "BLOX | Ortachala",
    name_geo: "ბლოქსი | ორთაჭალა",
    location_eng: "Tbilisi, Gorgasali Street",
    image_location: "img_6.jpg",
    status: "on_going",
    completion_percentage: 30,
    area_sqm: 87000,
    units_count: 120,
  },
];
