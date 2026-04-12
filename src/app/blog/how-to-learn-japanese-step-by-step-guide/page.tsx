import { Metadata } from 'next';
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: 'How to Learn Japanese: Step-by-Step Guide for Beginners | Achieve Japan',
  description: 'Learn Japanese step-by-step with Achieve Japan. Follow this beginner-friendly guide to speak, read, and write Japanese confidently while enjoying cultural learning.',
  openGraph: {
    title: 'How to Learn Japanese: Step-by-Step Guide for Beginners',
    description: 'Learn Japanese step-by-step with Achieve Japan. Follow this beginner-friendly guide to speak, read, and write Japanese confidently while enjoying cultural learning.',
    type: 'article',
    images: [{ url: '/blog/how-to-learn-japanese-featured.png' }]
  }
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <BlogContent />
    </main>
  );
}
