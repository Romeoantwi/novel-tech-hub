import { Button } from "@/components/ui/button";
import { Code, Zap, Users, Trophy, Sparkles } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="pt-20 min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Tech Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 tech-grid-bg opacity-40"></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-[100px] floating-orb"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-gradient-to-br from-secondary/30 to-primary/20 rounded-full blur-[80px] floating-orb-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/10 via-transparent to-transparent rounded-full animate-glow-pulse"></div>
        
        {/* Subtle mesh overlay */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-accent" />
          <span className="text-sm font-medium text-white/90">Ghana's Premier Tech Network</span>
        </div>

        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-4 leading-tight tracking-tight">
            <span className="gradient-text">
              Phaemos
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-white/90">Technologies</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Join our elite network of tech professionals. Get matched with high-paying 
          projects and earn <span className="text-primary font-semibold">60% of project revenue</span> while we handle client acquisition.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 text-white px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl glow-primary transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("apply")}
          >
            <Users className="mr-2 h-6 w-6" />
            Apply to Join Network
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 px-10 py-6 text-xl font-semibold rounded-2xl glass-dark transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("services")}
          >
            <Code className="mr-2 h-6 w-6" />
            View Expertise Areas
          </Button>
        </div>
        
        {/* Enhanced Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass-dark p-8 rounded-3xl hover-lift border-gradient animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20">
                <Trophy className="h-10 w-10 text-yellow-400" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-3">60% Revenue Share</h3>
            <p className="text-white/60 text-lg">Earn majority of project revenue while we handle client acquisition and business development</p>
          </div>
          <div className="glass-dark p-8 rounded-3xl hover-lift border-gradient animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <Zap className="h-10 w-10 text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-secondary mb-3">Flexible Work</h3>
            <p className="text-white/60 text-lg">Work on projects that match your schedule, expertise, and professional goals</p>
          </div>
          <div className="glass-dark p-8 rounded-3xl hover-lift border-gradient animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                <Users className="h-10 w-10 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-accent mb-3">No Client Hunting</h3>
            <p className="text-white/60 text-lg">Focus on what you do best while we bring high-quality projects directly to you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;