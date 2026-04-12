'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, User, Clock, Share2, ChevronDown, CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' as const }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const tocItems = [
  { id: 'introduction', title: 'Introduction' },
  { id: 'why-achieve-japan', title: 'Why Achieve Japan' },
  { id: 'what-beginners-should-know', title: 'What Beginners Should Know' },
  { id: 'how-classes-work', title: 'How Classes Work' },
  { id: 'faqs', title: 'FAQs' },
  { id: 'conclusion', title: 'Conclusion' }
];

const faqs = [
  {
    question: "Is Japanese difficult for beginners?",
    answer: "Japanese is simple when explained step by step. Achieve Japan uses clear lessons and examples. Beginners understand words and sentences quickly."
  },
  {
    question: "Can I start learning without any knowledge?",
    answer: "You can start learning the language without any knowledge. Students start learning with N5, the alphabet, basic grammar, and simple conversation."
  },
  {
    question: "Which course should beginners choose first?",
    answer: "Beginners start with N5 first. This course covers Hiragana, Katakana, basic grammar, and short sentences. It builds a strong foundation for further learning."
  },
  {
    question: "How long does it take to complete beginner-level Japanese?",
    answer: "Usually, it takes a few months to complete N5, depending on class attendance and practice. It also depends on the student’s adaptability and teaching style."
  },
  {
    question: "Why should beginners choose Achieve Japan?",
    answer: "Achieve Japan offers a legal setup, experienced teachers, friendly classes, and a structured approach. Beginners can learn comfortably and gain confidence from the first day."
  }
];

export default function BlogContent() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveFaq((prev) => (prev === index ? null : index));
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-secondary to-secondary z-0"></div>
        <div className="absolute top-0 right-0 w-full h-full opacity-10 wave-pattern z-0"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
          {/* Breadcrumbs */}
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center text-sm font-medium text-gray-300 mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white truncate">Beginner Guide</span>
          </motion.nav>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light text-sm font-semibold tracking-wider uppercase border border-primary/30">
                Education / Guide
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Best Places to Learn Japanese in Dhaka: <span className="text-primary-light">A Beginner-Friendly Guide</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              Discover the best places to learn Japanese in Dhaka. Achieve Japan offers beginner-friendly courses, skilled teachers, and a supportive learning environment.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <User className="w-4 h-4 text-primary" />
                <span>Achieve Japan Team</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Calendar className="w-4 h-4 text-primary" />
                <span>Published Oct 2024</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Clock className="w-4 h-4 text-primary" />
                <span>5 min read</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            
            {/* Sidebar (TOC) */}
            <div className="lg:w-1/4 order-2 lg:order-1 hidden lg:block">
              <div className="sticky top-28 bg-gray-50 border border-gray-100 p-6 rounded-2xl shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-3 border-gray-200">Table of Contents</h3>
                <nav className="space-y-3 font-medium text-gray-600">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => scrollToSection(e, item.id)}
                      className="block hover:text-primary transition-colors text-sm leading-tight hover:translate-x-1 transform duration-200"
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>

                <div className="mt-10 border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                    <Share2 className="w-4 h-4" /> Share Article
                  </h4>
                  <div className="flex gap-3">
                    <button aria-label="Share on Facebook" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                    </button>
                    <button aria-label="Share on Twitter" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                    </button>
                    <button aria-label="Share on LinkedIn" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-primary hover:border-primary hover:shadow-md transition-all duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 order-1 lg:order-2">
              <motion.article 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="prose prose-lg max-w-none prose-headings:text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-2xl prose-img:shadow-lg prose-p:text-gray-600 prose-p:leading-loose"
              >
                <div id="introduction" className="scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Introduction
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Many beginners often ask where they can learn Japanese in Dhaka. <span className="font-semibold text-primary">Achieve Japan</span> provides a clear and beginner-friendly path. Students get lessons that are easy to follow, structured, and practical.
                  </p>
                  <p>
                    Achieve Japan supports learners with skilled teachers. They explain concepts using simple examples. Students feel confident learning step by step. Each lesson focuses on building understanding without overwhelming beginners.
                  </p>
                  <p>
                    Beginners enjoy a safe and encouraging learning environment. Teachers guide students through the alphabet, grammar, and daily conversation. This friendly space allows learners to feel comfortable and motivated while learning Japanese.
                  </p>
                </div>

                <div id="why-achieve-japan" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Why Achieve Japan Stands Out for Beginners
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Beginners often struggle to find a suitable institute that makes Japanese easy. <span className="font-semibold text-secondary">Achieve Japan solves this problem</span> with clear teaching methods and patient instructors. Every lesson focuses on step-by-step understanding.
                  </p>
                  <p>
                    The institute is located in Banasree, Dhaka, a peaceful and accessible area. Parents trust the legal setup, and students feel secure. This environment allows beginners to focus completely on learning.
                  </p>
                  <div className="bg-gray-50 border-l-4 border-primary p-6 my-8 rounded-r-lg shadow-sm">
                    <p className="m-0 italic text-gray-700">"Achieve Japan has thirty seven years of experience in teaching Japanese. They have guided over five hundred students and workers to Japan. Beginners feel motivated knowing the institute has a proven record of success."</p>
                  </div>
                  <p>
                    The courses are designed for beginners starting from N5. Students learn <span className="text-primary font-medium">Hiragana, Katakana, simple grammar, and basic conversation</span>. Teachers explain every topic easily and understandably. Beginners gain confidence with every class.
                  </p>
                </div>

                <div id="what-beginners-should-know" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    What Beginners Should Know Before Joining Japanese Classes
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Beginners need a clear and simple learning path. Achieve Japan provides this with structured lessons. Teachers guide learners slowly, ensuring that each student understands every step.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-primary/30 transition-colors group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-secondary mb-2">Alphabet & Basics</h4>
                      <p className="text-sm m-0 text-gray-600">The first course, N5, focuses on learning the Japanese alphabet: Hiragana and Katakana. Practice pronunciation, writing, and reading simple words.</p>
                    </div>
                    <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-gray-100 hover:border-primary/30 transition-colors group">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-secondary mb-2">Grammar & Structure</h4>
                      <p className="text-sm m-0 text-gray-600">Grammar is taught in small, easy-to-follow examples. Students learn basic sentence structures such as “I eat rice” or “I go home.”</p>
                    </div>
                  </div>
                  <p>
                    Beginners also learn useful vocabulary. Teachers introduce common words for daily life, food, family, and simple actions. Students practice using them in sentences. This builds communication skills early.
                  </p>
                  <p>
                    Achieve Japan also guides the next levels: <span className="font-semibold">N4, JFT, and SSW</span>. Beginners learn how each level prepares them for future study or work opportunities in Japan. The guidance is honest, clear, and supportive.
                  </p>
                </div>

                <div id="how-classes-work" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    How Classes Work at Achieve Japan
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Achieve Japan has structured its classes to support beginners. Teachers explain each topic using simple words. Students practice speaking and writing during every class. This method ensures understanding.
                  </p>
                  <ul className="space-y-4 my-8 pl-0 list-none">
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary shrink-0"><ArrowRight className="w-4 h-4" /></div>
                      <div>
                        <strong className="text-secondary block mb-1">Building the Foundation</strong>
                        <span className="text-gray-600 text-[15px]">The N5 course builds the foundation. Students start with the alphabet and basic grammar. Teachers repeat lessons for reinforcement. Beginners gain confidence in reading and writing simple sentences.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary shrink-0"><ArrowRight className="w-4 h-4" /></div>
                      <div>
                        <strong className="text-secondary block mb-1">Progressing Together</strong>
                        <span className="text-gray-600 text-[15px]">After N5, learners progress to N4, where grammar and conversation skills are further developed. Teachers guide students step by step, ensuring that no one feels lost.</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="mt-1 bg-primary/10 p-1.5 rounded-full text-primary shrink-0"><ArrowRight className="w-4 h-4" /></div>
                      <div>
                        <strong className="text-secondary block mb-1">Practical Conversation</strong>
                        <span className="text-gray-600 text-[15px]">The institute also focuses on practical conversation practice. Students speak with teachers using daily situations. This makes learning useful and helps students apply what they learn immediately.</span>
                      </div>
                    </li>
                  </ul>
                  <p>
                    Counseling and guidance are also available. Students receive advice about the right courses for their goals. The institute explains study and work options in Japan. Beginners feel supported and motivated to continue learning.
                  </p>
                </div>

                <div id="faqs" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-8 relative">
                    FAQs
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <div className="not-prose space-y-4">
                    {faqs.map((faq, index) => (
                      <motion.div 
                        initial={false}
                        key={index} 
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeFaq === index ? 'border-primary/50 shadow-md bg-white' : 'border-gray-200 bg-gray-50/50 hover:bg-gray-50'}`}
                      >
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                          <span className={`font-semibold text-lg ${activeFaq === index ? 'text-primary' : 'text-secondary'}`}>
                            {faq.question}
                          </span>
                          <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${activeFaq === index ? 'rotate-180 text-primary' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {activeFaq === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div id="conclusion" className="mt-16 scroll-mt-28 bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative mt-0 pt-0">
                    Conclusion
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Beginners need a place that explains Japanese clearly and supports their learning journey. Achieve Japan provides simple, structured lessons with patient guidance. Students build confidence in reading, writing, and speaking Japanese.
                  </p>
                  <p>
                    The institute offers a safe and friendly environment. Beginners feel comfortable focusing on learning without distractions. Teachers provide individual support to ensure steady progress.
                  </p>
                  <p>
                    <strong className="text-secondary text-xl font-bold mt-4 block">Achieve Japan is the ideal choice for anyone asking where to learn Japanese in Dhaka.</strong> Beginners gain knowledge, skills, and motivation to continue learning.
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-secondary">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#E60023_0%,#B8001C_100%)] opacity-90 mix-blend-multiply z-0"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\\'60\\' height=\\'60\\' viewBox=\\'0 0 60 60\\' xmlns=\\'http://www.w3.org/2000/svg\\'%3E%3Cg fill=\\'none\\' fill-rule=\\'evenodd\\'%3E%3Cg fill=\\'%23ffffff\\' fill-opacity=\\'0.1\\'%3E%3Cpath d=\\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Enroll today at Achieve Japan and start your Japanese learning journey with expert guidance and a supportive environment.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link 
                href="/#courses" 
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300 group"
              >
                Enroll Now at Achieve Japan
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h3 className="text-2xl font-bold text-secondary mb-10">Read More Articles</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Mastering Hiragana and Katakana in 30 Days", cat: "Tips", delay: 0.1 },
              { title: "Working in Japan: What SSW Visa Applicants Need to Know", cat: "Career", delay: 0.2 },
              { title: "Top 5 Mistakes Beginners Make When Learning Japanese", cat: "Guide", delay: 0.3 }
            ].map((post, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: post.delay }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-secondary/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-gray-300" />
                  </div>
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-secondary rounded-full uppercase tracking-wider">
                      {post.cat}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Read article <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
