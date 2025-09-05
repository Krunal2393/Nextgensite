import BusinessGrowth from "../components/BusinessGrowth";
import Hero from "../components/Hero";
import HotServices from "../components/HotServices";
import SparkToMotion from "../components/SparkToMotion";
import StatsSection from "../components/StatsSection";
import TestimonialCarousel from "../components/TestimonialCarousel";

export default function Home() {
  return (
    <div>
      <Hero />

      <StatsSection />
      <SparkToMotion />
      <BusinessGrowth />
      <HotServices />
      <TestimonialCarousel />
    </div>
  );
}
