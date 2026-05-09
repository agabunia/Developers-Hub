export type PartnersType = {
  id: number;
  name_geo: string;
  name_eng: string;
  logo_location: string;
};

export type SocialMediaType = {
  id: number;
  name: string;
  icon_url: string;
  link: string;
};

export type AboutSectionType = {
  developer_id: number;
  name_geo: string;
  name_eng: string;
  description_end: string;
  description_geo: string;
  since_year: number;
  experience_years: number;
  partners: PartnersType[];
  social_media: SocialMediaType[];
};

export const aboutSections: AboutSectionType[] = [
  {
    developer_id: 1,
    name_geo: "ბლოქსი",
    name_eng: "BLOX",
    description_end:
      "BLOX, has been operating on Real Estate Development Market in Georgia since 2016 and has been creating new comfortable living standards every day. It is our priority to create profitable projects that will stand the test of time. We are dedicated to building quality living spaces built in a green and peaceful areas. With European standards, high quality living spaces built in a green and peaceful areas. With European standards, high quality living spaces built in a green and peaceful areas. BLOX, has been operating on Real Estate Development Market in Georgia since 2016 and has been creating new comfortable living standards every day. It is our priority to create profitable projects that will stand the test of time. We are dedicated to building quality living spaces built in a green and peaceful areas. With European standards, high quality living spaces built in a green and peaceful areas. With European standards, high quality living spaces built in a green and peaceful areas.",
    description_geo:
      "ბლოქსი, რეალური ქონების განვითარების ბაზარზე საქართველოში 2016 წლიდან ღირებული და თითოეულ დღეს შეუდგენელი კომფორტული ცხოვრების სტანდარტების შექმნა. ჩვენი პრიორიტეტი არის მომგებიანი პროექტების შექმნა.",
    since_year: 2015,
    experience_years: 11,
    partners: [
      {
        id: 1,
        name_geo: "ბიოგრაფი",
        name_eng: "Biograpi",
        logo_location: "biograpi.jpg",
      },
      {
        id: 2,
        name_geo: "არჩი",
        name_eng: "Archi",
        logo_location: "archi.jpg",
      },
      {
        id: 3,
        name_geo: "მ2",
        name_eng: "m2",
        logo_location: "m2.jpg",
      },
      {
        id: 4,
        name_geo: "დეკა",
        name_eng: "Deka",
        logo_location: "deka.jpg",
      },
    ],
    social_media: [
      {
        id: 1,
        name: "Facebook",
        icon_url: "fb-img.png",
        link: "https://facebook.com/blox.ge",
      },
      {
        id: 2,
        name: "Instagram",
        icon_url: "insta-img.png",
        link: "https://instagram.com/bloxofficial",
      },
      {
        id: 3,
        name: "WhatsApp",
        icon_url: "whatsapp-img.png",
        link: "https://wa.me/995591983210",
      },
      {
        id: 4,
        name: "Viber",
        icon_url: "viber-img.png",
        link: "viber://contact?number=995591983210",
      },
    ],
  },
  {
    developer_id: 2,
    name_geo: "არჩი",
    name_eng: "Archi",
    description_end:
      "Archi, leading architecture firm in Georgia specializing in innovative and sustainable design solutions since 2010. We create spaces that inspire and endure.",
    description_geo: "არჩი, ლიდერი არქიტექტურული ფირმა საქართველოში თანამედროვე და მდგრადი დიზაინის გადაწყვეტილებებით.",
    since_year: 2010,
    experience_years: 14,
    partners: [
      {
        id: 1,
        name_geo: "ბლოქსი",
        name_eng: "Blox",
        logo_location: "blox.jpg",
      },
      {
        id: 2,
        name_geo: "მ2",
        name_eng: "m2",
        logo_location: "m2.jpg",
      },
    ],
    social_media: [
      {
        id: 1,
        name: "Facebook",
        icon_url: "fb-img.png",
        link: "https://facebook.com/archi.ge",
      },
      {
        id: 2,
        name: "Instagram",
        icon_url: "insta-img.png",
        link: "https://instagram.com/archi_ge",
      },
    ],
  },
  {
    developer_id: 3,
    name_geo: "მ2",
    name_eng: "m2",
    description_end:
      "m2 is dedicated to creating modern living spaces with perfect square meter utilization and contemporary design principles.",
    description_geo: "მ2 მიძღვნილია თანამედროვე საცხოვრებელი სივრცეების შექმნას სრულყოფილი დიზაინით.",
    since_year: 2012,
    experience_years: 12,
    partners: [
      {
        id: 1,
        name_geo: "ბლოქსი",
        name_eng: "Blox",
        logo_location: "blox.jpg",
      },
      {
        id: 2,
        name_geo: "დეკა",
        name_eng: "Deka",
        logo_location: "deka.jpg",
      },
    ],
    social_media: [
      {
        id: 1,
        name: "Instagram",
        icon_url: "insta-img.png",
        link: "https://instagram.com/m2_developers",
      },
      {
        id: 2,
        name: "Facebook",
        icon_url: "fb-img.png",
        link: "https://facebook.com/m2.ge",
      },
    ],
  },
];
