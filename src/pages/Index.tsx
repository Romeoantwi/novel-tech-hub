
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

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <Header />
      <Hero />
      <ApplicationForm />
      <Team />
      <TrackRecord />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
