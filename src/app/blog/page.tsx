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
    image: "/blog/best-places-to-learn-japanese-in-dhaka.png",
  },
  {
    slug: "how-to-learn-japanese-step-by-step-guide",
    title: "How to Learn Japanese: Step-by-Step Guide for Beginners",
    excerpt:
      "Learn Japanese step-by-step with Achieve Japan. Follow this beginner-friendly guide to speak, read, and write Japanese confidently while enjoying cultural learning.",
    category: "Guide",
    readTime: "7 min read",
    date: "Oct 2024",
    image: "/blog/how-to-learn-japanese-featured.png",
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

        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 aspect-[16/9] md:aspect-auto relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary px-3 py-1 text-[10px] font-bold text-white rounded-full uppercase tracking-widest shadow-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-primary" />
                        {post.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-primary" />
                        {post.readTime}
                      </span>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors mb-3 leading-tight">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 line-clamp-2 italic">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-primary font-bold text-sm">
                        Read full guide
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
