import HeroSection from "./sections/hero/HeroSection";
import NewsFeed from "./sections/news-feed/NewsFeed";
import ProjectsShowcase from "./sections/projects-showcase/ProjectsShowcase";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProjectsShowcase />
      <NewsFeed />
    </>
  );
}
