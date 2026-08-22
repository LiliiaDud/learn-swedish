import Hero from "@/components/hero/Hero";
import Benefits from "@/components/home/Benefits";
import AboutSection from "@/components/home/AboutSection";
import CourseFormats from "@/components/home/CourseFormats";
import TestBanner from "@/components/home/TestBanner";
import EventsSection from "@/components/home/EventsSection";
import ContactSection from "@/components/home/ContactSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <Benefits />
      <AboutSection />
      <CourseFormats />
      <TestBanner />
      <EventsSection />
      <ContactSection />
    </main>
  );
}
