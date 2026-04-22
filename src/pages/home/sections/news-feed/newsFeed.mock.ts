export type NewsFeedItem = {
  id: number;
  title: string;
  excerpt: string;
  image_location: string;
  brand: string;
  brandLabel: string;
  brandMark: string;
  date: string;
  time: string;
  likes: number;
  comments: number;
};

export const newsFeedItems: NewsFeedItem[] = [
  {
    id: 1,
    title: "აქ იქნება სტატიის სათაური",
    excerpt:
      "Living spaces where quality, comfort, and thoughtful design come together to shape the life you deserve.",
    image_location: "news-card-1.jpg",
    brand: "Gldani",
    brandLabel: "group",
    brandMark: "2020",
    date: "3 აგვ.",
    time: "13:45",
    likes: 12,
    comments: 5,
  },
  {
    id: 2,
    title: "აქ იქნება სტატიის სათაური",
    excerpt:
      "Living spaces where quality, comfort, and thoughtful design come together to shape the life you deserve.",
    image_location: "news-card-2.jpg",
    brand: "BLOX",
    brandLabel: "dev group",
    brandMark: "blox",
    date: "3 აგვ.",
    time: "13:45",
    likes: 12,
    comments: 5,
  },
];
