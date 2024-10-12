import CardGridSection from "@/components/CardGridSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="bg-black/[0.96] min-h-screen antialiased bg-grid-white/[0.02]">
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <CardGridSection/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
