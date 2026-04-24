'use client';

import Link from "next/link";
import { Calendar, ChevronRight, Clock, BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

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
    category: "Education",
    readTime: "7 min read",
    date: "Oct 2024",
    image: "/blog/how-to-learn-japanese-featured.png",
  },
  {
    slug: "what-should-bangladeshi-candidates-do-to-get-an-ssw-visa",
    title: "What should Bangladeshi Candidates do to get an SSW Visa?",
    excerpt:
      "Achieve Japan explains exams, documents, jobs, and preparation stepwise for Bangladeshis seeking the Specified Skilled Worker visa.",
    category: "Visa",
    readTime: "8 min read",
    date: "Oct 2024",
    image: "/blog/ssw-visa-guide-bangladesh.png",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" as const 
    },
  },
};

export default function BlogIndexContent() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-24 overflow-hidden">
      {/* Hero Section with subtle background decoration */}
      <div className="relative mb-20">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-secondary/5 blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.nav 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center text-base font-medium text-gray-400 mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4 mx-2 shrink-0" />
            <span className="text-secondary font-bold">Blog</span>
          </motion.nav>

          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-black text-secondary mb-6 tracking-tight"
            >
              Latest <span className="text-primary italic">Guides</span> & Insights
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Expert advice on learning Japanese, navigating visa processes, and building your future in Japan. All tailored for Bangladeshi candidates.
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {posts.map((post) => (
            <motion.div key={post.slug} variants={itemVariants}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex flex-col h-full bg-white border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/95 backdrop-blur-md px-4 py-1.5 text-[11px] font-black text-secondary uppercase tracking-widest shadow-xl border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="flex-1 p-8 flex flex-col">
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-primary" />
                      {post.date}
                    </span>
                    <span className="w-1.5 h-1.5 bg-primary/20" />
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-primary" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-secondary group-hover:text-primary transition-colors mb-4 leading-tight">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-secondary font-black text-sm uppercase tracking-wider group-hover:text-primary transition-colors">
                      Read Article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </span>
                    <div className="w-10 h-10 bg-gray-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <BookOpen className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
