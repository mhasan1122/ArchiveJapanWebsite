import { Metadata } from 'next';
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: 'What should Bangladeshi Candidates do to get an SSW Visa? | Achieve Japan',
  description: 'What should Bangladeshi Candidates do to get an SSW Visa? Achieve Japan explains exams, documents, jobs, and preparation stepwise for Bangladeshis.',
  openGraph: {
    title: 'What should Bangladeshi Candidates do to get an SSW Visa? | Achieve Japan',
    description: 'What should Bangladeshi Candidates do to get an SSW Visa? Achieve Japan explains exams, documents, jobs, and preparation stepwise for Bangladeshis.',
    type: 'article',
    images: [{ url: '/blog/ssw-visa-guide-bangladesh.png' }]
  }
};

export default function BlogPostPage() {
  return (
    <main className="min-h-screen bg-gray-50 pb-16">
      <BlogContent />
    </main>
  );
}
