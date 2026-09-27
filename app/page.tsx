import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TakeoffSection from "@/components/TakeoffSection";
import HowToBeginSection from "@/components/HowToBeginSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import {
  BrandsSection,
  VideoReviewsRow,
  OutrankSection,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <BrandsSection />
        <VideoReviewsRow />
        <AboutSection />
        <ServicesSection />
        <WhyChooseSection />
        <OutrankSection />
        <TakeoffSection />
        <HowToBeginSection />
        <ProjectsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
