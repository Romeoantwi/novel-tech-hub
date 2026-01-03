import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ApplicationForm from "@/components/ApplicationForm";
import Team from "@/components/Team";
import TrackRecord from "@/components/TrackRecord";
import Services from "@/components/Services";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedStats from "@/components/AnimatedStats";
import ScrollAnimationWrapper from "@/components/ScrollAnimationWrapper";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AnimatedStats />
      <ScrollAnimationWrapper>
        <ApplicationForm />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={100}>
        <Team />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={100}>
        <TrackRecord />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={100}>
        <Services />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={100}>
        <About />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={100}>
        <Reviews />
      </ScrollAnimationWrapper>
      <ScrollAnimationWrapper delay={100}>
        <Contact />
      </ScrollAnimationWrapper>
      <Footer />
    </div>
  );
};

export default Index;
