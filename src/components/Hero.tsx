
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Innovation That
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Transforms
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Novel Technologies delivers cutting-edge solutions that revolutionize how businesses operate. 
          We turn complex challenges into elegant, scalable technology solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            onClick={() => scrollToSection("services")}
          >
            Explore Our Services
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 text-lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
