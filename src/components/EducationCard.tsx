import type { Education } from '@/types';

export default function EducationCard({ education }: { education: Education }) {
  const degree = typeof education.degree === 'string' ? education.degree : education.degree.tr;

  return (
    <article className="border-b border-zinc-200 py-6 dark:border-zinc-800">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{education.institution}</p>
          <h3 className="mt-1 text-xl text-zinc-900 dark:text-zinc-100">{degree}</h3>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{education.field}</p>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {education.startDate} — {education.endDate ?? 'Present'}
        </p>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {typeof education.description === 'string' ? education.description : education.description.tr}
      </p>
    </article>
  );
}
