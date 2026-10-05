import type { Experience } from '@/types';

export default function ExperienceCard({ experience }: { experience: Experience }) {
  const position = typeof experience.position === 'string' ? experience.position : experience.position.tr;

  return (
    <article className="border-b border-zinc-200 py-6 dark:border-zinc-800">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{experience.company}</p>
          <h3 className="mt-1 text-xl text-zinc-900 dark:text-zinc-100">{position}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{experience.location}</p>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {experience.startDate} — {experience.endDate ?? 'Present'}
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {typeof experience.description === 'string' ? experience.description : experience.description.tr}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {experience.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
