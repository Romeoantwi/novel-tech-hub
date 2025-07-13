
import { Button } from "@/components/ui/button";
import { Code, Zap, Users, Trophy } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400">
              Phaemos
            </span>
            <br />
            <span className="text-4xl md:text-5xl">Technologies</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Join Ghana's premier network of tech professionals. Get matched with high-paying 
          projects in your expertise area and earn <span className="text-blue-400 font-bold">60% of project revenue</span> while we handle client acquisition.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-6 text-xl font-semibold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("apply")}
          >
            <Users className="mr-2 h-6 w-6" />
            Apply to Join Network
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-6 text-xl font-semibold rounded-xl backdrop-blur-sm bg-slate-800/50 transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("services")}
          >
            <Code className="mr-2 h-6 w-6" />
            View Expertise Areas
          </Button>
        </div>
        
        {/* Enhanced Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-12 w-12 text-yellow-400" />
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">60% Revenue Share</h3>
            <p className="text-gray-300 text-lg">Earn majority of project revenue while we handle client acquisition and business development</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-12 w-12 text-green-400" />
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">Flexible Work</h3>
            <p className="text-gray-300 text-lg">Work on projects that match your schedule, expertise, and professional goals</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 transform hover:scale-105 transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-12 w-12 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">No Client Hunting</h3>
            <p className="text-gray-300 text-lg">Focus on what you do best while we bring high-quality projects directly to you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
