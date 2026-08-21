import Hero from "@/components/hero/Hero";
import Benefits from "@/components/home/Benefits";
import AboutSection from "@/components/home/AboutSection";
import CourseFormats from "@/components/home/CourseFormats";
import TestBanner from "@/components/home/TestBanner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <AboutSection />
      <CourseFormats />
      <TestBanner />
    </main>
  );
}
