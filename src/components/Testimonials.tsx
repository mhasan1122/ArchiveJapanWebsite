"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rafiqul Islam",
    role: "SSW Worker — Agriculture",
    location: "Now in Hokkaido, Japan",
    avatar: "RI",
    text: "Achieve Japan changed my life completely. From zero Japanese knowledge, I passed JLPT N4 in just 6 months and now I'm working in Japan with a great company. The teachers and staff are incredibly supportive!",
    rating: 5,
  },
  {
    name: "Farhana Akter",
    role: "SSW Worker — Food Service",
    location: "Now in Tokyo, Japan",
    avatar: "FA",
    text: "I was skeptical at first, but Achieve Japan proved me wrong. They handled everything from language training to visa processing. Today I'm earning well in Tokyo and supporting my family back home. Best decision ever!",
    rating: 5,
  },
  {
    name: "Mohammad Hasan",
    role: "Student Visa — Language School",
    location: "Now in Osaka, Japan",
    avatar: "MH",
    text: "The quality of teaching at Achieve Japan is unmatched. Their experienced teachers make learning Japanese fun and effective. I cleared JFT-Basic on my first attempt and got my student visa smoothly.",
    rating: 5,
  },
  {
    name: "Tasnim Rahman",
    role: "SSW Worker — Nursing Care",
    location: "Now in Nagoya, Japan",
    avatar: "TR",
    text: "From the very first consultation to my arrival in Japan, Achieve Japan was with me at every step. Their 17 years of experience really shows. I couldn't have done it without their guidance and support.",
    rating: 5,
  },
  {
    name: "Abdul Karim",
    role: "SSW Worker — Construction",
    location: "Now in Fukuoka, Japan",
    avatar: "AK",
    text: "The SSW training program at Achieve Japan is comprehensive and practical. They don't just teach you the language — they teach you Japanese work culture, which is equally important. Highly recommended!",
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <section
      id="testimonials"
      className="relative py-24 bg-secondary overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-sakura/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary-light text-sm font-semibold tracking-wide uppercase">
            Success Stories
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Lives <span className="text-primary">Transformed</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Real stories from real students who built their dream careers in Japan
            with our guidance.
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <div className="min-h-[320px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={current}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <div className="p-8 sm:p-12 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10">
                  {/* Quote icon */}
                  <svg
                    className="w-10 h-10 text-primary/40 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
                  </svg>

                  {/* Text */}
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/30">
                      {testimonials[current].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        {testimonials[current].name}
                      </div>
                      <div className="text-sm text-gray-400">
                        {testimonials[current].role}
                      </div>
                      <div className="text-xs text-primary mt-0.5">
                        📍 {testimonials[current].location}
                      </div>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {Array.from({ length: testimonials[current].rating }).map(
                        (_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > current ? 1 : -1);
                  setCurrent(i);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-8"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Nav buttons */}
          <button
            onClick={() => {
              setDirection(-1);
              setCurrent(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              );
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => {
              setDirection(1);
              setCurrent((prev) => (prev + 1) % testimonials.length);
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
