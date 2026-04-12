import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ChevronRight, Clock, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Achieve Japan",
  description:
    "Guides and articles on learning Japanese in Dhaka, JLPT, visas, and studying in Japan from Achieve Japan.",
};

const posts = [
  {
    slug: "best-places-to-learn-japanese-in-dhaka",
    title: "Best Places to Learn Japanese in Dhaka: A Beginner-Friendly Guide",
    excerpt:
      "Discover beginner-friendly courses, skilled teachers, and what to look for when choosing a Japanese language institute in Dhaka.",
    category: "Guide",
    readTime: "5 min read",
    date: "Oct 2024",
  },
];

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center text-sm font-medium text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
          <span className="text-secondary font-semibold">Blog</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
          Blog
        </h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl leading-relaxed">
          Practical guides on learning Japanese, exams, and building your path
          to Japan.
        </p>

        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl border border-gray-100 p-6 md:p-8 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block text-xs font-bold uppercase tracking-wider text-primary mb-2">
                      {post.category}
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-semibold ml-auto sm:ml-0">
                        Read article
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
