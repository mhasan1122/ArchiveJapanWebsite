import type { Metadata } from "next";
import BlogIndexContent from "./BlogIndexContent";

export const metadata: Metadata = {
  title: "Blog | Achieve Japan",
  description:
    "Explore our comprehensive guides on learning Japanese, navigating the SSW visa process, and identifying the best language institutes in Dhaka. Achieve Japan provides expert advice for Bangladeshi candidates aiming for a career in Japan.",
  openGraph: {
    title: "Expert Guides for Japanese Learning & Visas | Achieve Japan",
    description: "Your journey to Japan begins here. Practical guides on JLPT, JFT, and SSW visas for Bangladeshi workers.",
    images: [{ url: '/blog/how-to-learn-japanese-featured.png' }]
  }
};

export default function BlogIndexPage() {
  return <BlogIndexContent />;
}
