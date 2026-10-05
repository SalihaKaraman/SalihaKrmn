import Link from 'next/link';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data';

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
      <div className="mb-12">
        <p className="label mb-3">Projects</p>
        <h1 className="text-3xl font-medium tracking-tight md:text-5xl">Selected work and learning experiences.</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-50">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
