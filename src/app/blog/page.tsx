import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog | Saliha Karaman',
  description: 'Matematik eğitimi, teknoloji ve öğrenme üzerine yazılar.',
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
      <header className="mb-12 max-w-3xl">
        <p className="label mb-3">Blog</p>
        <h1 className="text-3xl font-medium tracking-tight md:text-5xl">
          Notlar, denemeler, kısa yazılar.
        </h1>
        <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
          Web geliştirme, mobil ve eğitim teknolojileri üzerine yazılar.
        </p>
      </header>

      <div className="border-t border-zinc-200 dark:border-zinc-800">
        {blogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
