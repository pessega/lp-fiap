import Courses from "@/components/Courses/Courses";
import Differentiators from "@/components/Differentiators/Differentiators";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Differentiators />
      <ScrollAnimation />
      <Courses />
      <FAQ />
    </>
  );
}
