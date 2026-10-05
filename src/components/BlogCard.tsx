import Link from 'next/link';
import type { BlogPost } from '@/types';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col gap-3 border-b border-zinc-200 py-6 dark:border-zinc-800">
      <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">
        <span>{new Date(post.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
        {post.tags.slice(0, 2).map((tag) => (
          <span key={tag}>• {tag}</span>
        ))}
      </div>
      <Link href={`/blog/${post.slug}`} className="text-xl font-medium text-zinc-900 transition hover:text-zinc-600 dark:text-zinc-100 dark:hover:text-zinc-300">
        {post.title}
      </Link>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{post.summary}</p>
    </article>
  );
}
