import type { BlogPost } from '@/types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'modern-flutter-development-2025',
    title: 'Modern Flutter Development in 2025',
    summary: 'A practical look at state management, architecture, and developer experience in modern Flutter apps.',
    publishedAt: '2025-09-18',
    tags: ['Flutter', 'Dart', 'Architecture'],
    featured: true,
    content: 'Modern Flutter projects increasingly rely on structured architecture, testability, and clean state handling. This article reviews the patterns and tools that help teams ship maintainable cross-platform experiences.'
  },
  {
    slug: 'ai-powered-learning-tools',
    title: 'AI Tools for Education and Learning',
    summary: 'How AI assists educators and students while keeping accessibility and ethics at the center of the process.',
    publishedAt: '2025-08-10',
    tags: ['AI', 'Education', 'Accessibility'],
    content: 'AI can support learning workflows when used mindfully. The key is designing tools that improve clarity, personalization, and reflection without replacing human judgment.'
  },
  {
    slug: 'math-education-tech',
    title: 'Mathematics Education and Educational Technology',
    summary: 'Designing digital learning experiences that improve understanding and confidence for students.',
    publishedAt: '2025-07-12',
    tags: ['Math Education', 'EdTech'],
    content: 'The best educational tools combine clarity, feedback, and context. In mathematics, technology can support conceptual understanding when it is intentionally designed around student needs.'
  }
];

export function getRecentPosts(limit = 2) {
  return blogPosts.slice(0, limit);
}

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
