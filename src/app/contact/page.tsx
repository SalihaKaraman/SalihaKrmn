import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';
import { personalInfo } from '@/data';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-20">
      <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
        <div>
          <p className="label mb-3">Contact</p>
          <h1 className="text-3xl font-medium tracking-tight md:text-5xl">Let’s connect.</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
            I’m open to learning collaborations, educational projects, and meaningful opportunities in mathematics education and technology.
          </p>

          <div className="mt-8 space-y-5 text-sm text-zinc-700 dark:text-zinc-300">
            <div className="flex items-center gap-3">
              <Mail size={16} className="text-primary-500" />
              <a href={`mailto:${personalInfo.email}`} className="hover:text-zinc-900 dark:hover:text-zinc-50">
                {personalInfo.email}
              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={16} className="text-primary-500" />
              <span>{typeof personalInfo.location === 'string' ? personalInfo.location : personalInfo.location.tr}</span>
            </div>
          </div>
        </div>

        <form className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950" action="https://formsubmit.co/salihakaraman33@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New message from portfolio" />
          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">Name</label>
              <input type="text" name="name" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">Email</label>
              <input type="email" name="email" className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900" required />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-zinc-700 dark:text-zinc-200">Message</label>
              <textarea name="message" rows={5} className="w-full rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm outline-none ring-0 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900" required />
            </div>
            <button type="submit" className="inline-flex items-center rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">
              Send message
            </button>
          </div>
        </form>
      </div>

      <div className="mt-10 text-sm text-zinc-600 dark:text-zinc-400">
        <Link href="/" className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-zinc-50">
          ← Back home
        </Link>
      </div>
    </div>
  );
}
