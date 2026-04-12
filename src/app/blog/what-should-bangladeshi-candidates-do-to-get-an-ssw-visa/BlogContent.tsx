'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Calendar, User, Clock, Share2, ChevronDown, ArrowRight, BookOpen, CheckCircle2, AlertCircle } from 'lucide-react';
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
  { id: 'understand-ssw', title: 'Understand the SSW System' },
  { id: 'eligibility', title: 'Eligibility Requirements' },
  { id: 'language-prep', title: 'Language Preparation' },
  { id: 'documents', title: 'Document Preparation' },
  { id: 'job-matching', title: 'Job Matching' },
  { id: 'coe-visa', title: 'COE and Visa Process' },
  { id: 'common-mistakes', title: 'Common Mistakes' },
  { id: 'faqs', title: 'FAQs' },
  { id: 'conclusion', title: 'Conclusion' }
];

const faqs = [
  {
    question: "What should Bangladeshi Candidates do to get an SSW Visa first?",
    answer: "You must understand the requirements first and determine whether you are eligible or not. You must choose an available SSW sector in Bangladesh."
  },
  {
    question: "Is learning the Japanese language mandatory for Bangladeshi SSW applicants?",
    answer: "To get an SSW visa, learning the Japanese language JLPT N4 or JFT A2(Basic) is mandatory. You couldn’t get a Japanese visa approval without a language certification."
  },
  {
    question: "Which sectors of SSW are available in Bangladesh?",
    answer: "Currently, four sectors are available in the SSW program in Bangladesh. The sectors include Caregiver, Construction, Agriculture, and Aviation."
  },
  {
    question: "How long can I stay in Japan on an SSW visa?",
    answer: "In the Specified Skilled Worker visa, an employee can stay 5 years in Japan. After living 5 years successfully, you can extend your visa for the next 5 years."
  },
  {
    question: "How much is the basic salary of an SSW employee?",
    answer: "The salary of an employee depends on his/her skills, language proficiency, experience, and job sector. On average, the basic salary of an SSW employee is ¥180,000 – ¥210,000 per month."
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
            className="flex items-center text-base font-medium text-gray-300 mb-8"
          >
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-white truncate">SSW Visa Guide for Bangladeshis</span>
          </motion.nav>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light text-sm font-semibold tracking-wider uppercase border border-primary/30">
                Visa Guide / Career
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              What should Bangladeshi Candidates do to <span className="text-primary-light">get an SSW Visa?</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl leading-relaxed">
              A clear and practical guide for Bangladeshi workers to navigate the SSW visa process, from exams to document preparation.
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
                <span>8 min read</span>
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
                className="prose prose-lg max-w-none prose-headings:text-secondary prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-img:rounded-3xl prose-img:shadow-2xl prose-p:text-gray-600 prose-p:leading-loose"
              >
                <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                  <img 
                    src="/blog/ssw-visa-guide-bangladesh.png" 
                    alt="SSW Visa Guide for Bangladeshis" 
                    className="w-full h-auto object-cover m-0"
                  />
                </div>

                <div id="introduction" className="scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Introduction
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Many Bangladeshi candidates have a dream of working in Japan. You may feel unsure about where to start and how to take a step forward to your dream. You may hear mixed advice from different people. Achieve Japan provides you with guidance that you can trust blindly.
                  </p>
                  <p>
                    When your collected information is wrong, it can cause delay and financial loss to you. Many candidates struggle hard due to poor planning. We help you get the correct process so that you can move forward with confidence.
                  </p>
                  <p>
                    This guide explains every step properly for Bangladeshi applicants. We speak with you face-to-face individually. From us, you learn what to do and how to do it. You can prepare safely for Japan with us.
                  </p>
                </div>

                <div id="understand-ssw" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Understand the SSW system properly
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    If you want to go to Japan on an SSW Visa, you must understand the SSW visa system. Japan introduced this visa due to worker shortages in Japan. The program welcomes skilled foreign workers to Japan. Bangladeshi skilled workers are officially accepted for this program.
                  </p>
                  <p>
                    There are two types of the SSW visa: SSW Type 1 and SSW Type 2. SSW Type 1 allows working in selected industries of this program. The duration of staying in Japan under this visa is up to five years. Within these five years, family sponsorship is not permitted. 
                  </p>
                  <p>
                    After completing the tenure of SSW Type 1, candidates can move to SSW Type 2. In this type, candidates can extend their visas for the next five years, and their spouse can enter Japan. SSW Type 2 allows for a long-term stay in Japan, provided the terms and conditions of Japan are followed.
                  </p>
                  <div className="bg-primary/5 border-l-4 border-primary p-6 my-8 rounded-r-lg shadow-sm">
                    <p className="m-0 italic text-secondary font-medium">
                      &ldquo;To go to Japan, you must pass language and skill exams. At Achieve Japan, we guide you before investment and provide the knowledge to protect you.&rdquo;
                    </p>
                  </div>
                </div>

                <div id="eligibility" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Eligibility requirements for Bangladeshi candidates
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Eligibility is the first step to understanding what Bangladeshi candidates need to do to get an SSW Visa. There is no strict age limit for the candidates. The ideal age for getting an SSW visa is 18 to 35 years. A good health condition is also required for getting a visa in the SSW program.
                  </p>
                  <p>
                    For an SSW visa, higher education is not required. Skill matters more than education level. Not all the sectors of the SSW program are available in Bangladesh. You must choose an available SSW sector in Bangladesh.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    {['Caregiving', 'Construction', 'Agriculture', 'Aviation'].map((sector) => (
                      <div key={sector} className="bg-white border border-gray-200 p-4 rounded-2xl text-center shadow-sm hover:border-primary/30 transition-colors">
                        <CheckCircle2 className="w-6 h-6 text-primary mx-auto mb-2" />
                        <span className="font-bold text-secondary text-sm">{sector}</span>
                      </div>
                    ))}
                  </div>
                  <p>
                    Medical clearance and police clearance of the selected candidate are mandatory. We carefully evaluate your profile so that you don't face any last-minute hassles. Early assessment prevents rejection.
                  </p>
                </div>

                <div id="language-prep" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Japanese language preparation for Bangladeshi candidates
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    To get an SSW visa, having Japanese language skills is compulsory. For the SSW program, you must pass <strong>JLPT N4</strong> or <strong>JFT A2 (Basic)</strong>. These exams test your ability for daily communication. Without language proof, visa approval is impossible.
                  </p>
                  <p>
                    You must learn basic sentence structure and understand the terms of your workplace. Listening and speaking skills are crucial for building confidence with supervisors and understanding daily work.
                  </p>
                  <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200 my-8">
                    <h4 className="text-xl font-bold text-secondary mb-4 flex items-center gap-2">
                       <BookOpen className="w-5 h-5 text-primary" /> Training at Achieve Japan
                    </h4>
                    <p className="m-0 text-gray-600">
                      Many Bangladeshi candidates struggle due to weak basics. We provide structured training to strengthen your foundation, creating more trust in your job opportunities.
                    </p>
                  </div>
                </div>

                <div id="documents" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Document preparation for Bangladeshi applicants
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    Document accuracy is one of the most important tasks. Prepare your documents early and ensure passport validation meets requirements to avoid delays.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                      <span>Police clearance certificate</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                      <span>Medical test reports</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                      <span>Japanese language certificates</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                      <span>Skill exam results</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1.5"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                      <span>Valid job offer (mandatory)</span>
                    </li>
                  </ul>
                  <p className="mt-6">
                    M/S Sanjana International (RL no 711), a sister concern of the KAWAII group, verifies your documents carefully with an experienced lawyer to save you time and money.
                  </p>
                </div>

                <div id="job-matching" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Job matching and employer selection for Bangladeshi workers
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    A confirmed job offer is strictly required for getting an SSW visa. Japanese employers must sponsor you; individual applications are not allowed. This process is managed by Registered Support Organizations.
                  </p>
                  <p>
                    Beware of unlicensed agencies and fake job offers in Bangladesh. Achieve Japan and M/S Sanjana International work with verified employers, ensuring everything is done legally and transparently.
                  </p>
                </div>

                <div id="coe-visa" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    COE and visa process
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <p>
                    After job confirmation, the employer applies for the <strong>COE (Certificate of Eligibility)</strong>. Once approved, you can apply for the visa at the Japanese embassy.
                  </p>
                  <p>
                    In the embassy interview, honest answers are required. Once you get visa approval, you are allowed to enter Japan legally. We support you even after you arrive in Japan.
                  </p>
                </div>

                <div id="common-mistakes" className="mt-16 scroll-mt-28">
                  <h2 className="text-3xl font-bold text-secondary mb-6 relative">
                    Common mistakes Bangladeshi candidates should avoid
                    <span className="absolute -bottom-2 left-0 w-16 h-1 bg-primary rounded-full"></span>
                  </h2>
                  <div className="space-y-6 mt-8">
                    {[
                      { title: "Weak Language Preparation", desc: "Many candidates don't take Japanese learning seriously, causing problems in interviews and daily work." },
                      { title: "Choosing Unavailable Sectors", desc: "Picking a sector that is not currently offered in Bangladesh leads to rejection." },
                      { title: "Trusting Unverified Agents", desc: "Beware of \"100% visa guarantees\" or \"Free Visa\" promises from unlicensed brokers." },
                      { title: "Document Errors", desc: "Simple mistakes in name spelling or missing translations can cancel your application." },
                      { title: "Ignoring Work Culture", desc: "Punctuality and discipline are essential. Failing to follow Japanese etiquette creates a negative impression." }
                    ].map((mistake, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-red-50 rounded-2xl border border-red-100">
                        <AlertCircle className="w-6 h-6 text-primary shrink-0" />
                        <div>
                          <h4 className="font-bold text-secondary mb-1">{mistake.title}</h4>
                          <p className="text-gray-600 text-sm m-0 leading-relaxed">{mistake.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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
                              key={`faq-panel-${index}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              style={{ overflow: "hidden" }}
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
                    The SSW visa provides a structured and legal pathway for Bangladeshi candidates to work in Japan. Successful outcomes depend on proper planning, verified information, and disciplined preparation.
                  </p>
                  <p>
                    Achieve Japan offers professional, ethical, and experience-based support at every stage of the SSW program. Our main focus remains on compliance, transparency, and long-term career stability in Japan.
                  </p>
                  <p>
                    <strong className="text-secondary text-xl font-bold mt-4 block underline decoration-primary decoration-4 underline-offset-8">Begin your journey with Achieve Japan today.</strong>
                  </p>
                </div>
              </motion.article>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden bg-secondary text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-95 z-0"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Start Your SSW Preparation</h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Schedule a consultation with Achieve Japan for proper assessment and structured preparation for your future in Japan.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-lg shadow-xl transition-all duration-300 group"
              >
                Get Informed Guidance
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h3 className="text-2xl font-bold text-secondary mb-10">More from our Blog</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {[
              { 
                title: "Best Places to Learn Japanese in Dhaka", 
                slug: "best-places-to-learn-japanese-in-dhaka",
                cat: "Guide", 
                color: "bg-blue-500" 
              },
              { 
                title: "How to Learn Japanese: Step-by-Step Guide", 
                slug: "how-to-learn-japanese-step-by-step-guide",
                cat: "Education", 
                color: "bg-green-500" 
              }
            ].map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 group"
              >
                <div className="p-8">
                  <span className="bg-gray-100 px-3 py-1 text-[10px] font-bold text-gray-500 rounded-full uppercase tracking-wider mb-4 inline-block">
                    {post.cat}
                  </span>
                  <h4 className="text-xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                  <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform">
                    Read article <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
