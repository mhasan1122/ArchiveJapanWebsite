import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Programs from "@/components/Programs";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex-1">
      <Navbar />
      <Hero />
      <Stats />
      <Programs />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
