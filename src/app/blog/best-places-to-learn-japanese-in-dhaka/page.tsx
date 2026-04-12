import { Metadata } from 'next';
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: 'Best Places to Learn Japanese in Dhaka: A Beginner-Friendly Guide | Achieve Japan',
  description: 'Discover the best places to learn Japanese in Dhaka. Achieve Japan offers beginner-friendly courses, skilled teachers, and a supportive learning environment.',
  openGraph: {
    title: 'Best Places to Learn Japanese in Dhaka',
    description: 'Discover the best places to learn Japanese in Dhaka. Achieve Japan offers beginner-friendly courses, skilled teachers, and a supportive learning environment.',
    type: 'article',
  }
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <BlogContent />
    </main>
  );
}
