import Link from 'next/link';
import type { Project } from '@/types';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col justify-between border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950">
      <div>
        <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
          Project
        </p>
        <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-100">{project.title}</h3>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {typeof project.description === 'string' ? project.description : project.description.tr}
        </p>
      </div>

      <div className="mt-6">
        <div className="mb-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.href ? (
          <Link
            href={project.href}
            className="inline-flex items-center text-sm font-medium text-zinc-900 transition hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300"
          >
            View project →
          </Link>
        ) : null}
      </div>
    </article>
  );
}
