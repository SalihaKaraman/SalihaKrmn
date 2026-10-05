import HomeView from '@/components/HomeView';
import { projects } from '@/data';
import { getRecentPosts } from '@/lib/blog';

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 2);

  return <HomeView featuredProjects={featuredProjects} recentPosts={getRecentPosts(2)} />;
}
