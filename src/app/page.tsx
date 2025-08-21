import Courses from "@/components/Courses/Courses";
import FAQ from "@/components/FAQ/FAQ";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import ParallaxText from "@/components/ParallaxText/ParallaxText";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <ParallaxText baseVelocity={-1}>
        CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.
      </ParallaxText>
      <ParallaxText baseVelocity={1}>
        TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO.
      </ParallaxText>
      <Courses />
      <FAQ />
    </>
  );
}
