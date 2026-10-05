import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts, getBlogPost } from '@/lib/blog';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 pb-24 pt-20">
      <Link
        href="/blog"
        className="text-sm text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
      >
        ← Tüm yazılara dön
      </Link>

      <header className="mb-10 mt-10 border-b border-zinc-200 pb-8 dark:border-zinc-800">
        <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('tr-TR', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              timeZone: 'UTC',
            })}
          </time>
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-zinc-200 px-2.5 py-1 dark:border-zinc-700">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {post.summary}
        </p>
      </header>

      <div className="whitespace-pre-line text-base leading-8 text-zinc-700 dark:text-zinc-300">
        {post.content}
      </div>
    </article>
  );
}
