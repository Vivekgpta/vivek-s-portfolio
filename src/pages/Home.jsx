import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import FeaturedWork from "../components/FeaturedWork/FeaturedWork";
import WhyChooseMe from "../components/WhyChooseMe/WhyChooseMe";
import CTA from "../components/CTA/CTA";
import ClientFeedback from "../components/ClientFeedback/ClientFeedback";


export default function Home() {
  return (
    <MainLayout>
      <Hero />

      <FeaturedWork />

      <ClientFeedback />

      <Stats />

      <WhyChooseMe />

      <CTA />
    </MainLayout>
  );
}
