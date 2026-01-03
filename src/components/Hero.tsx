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
      {/* Animated Tech Background - Light with blue accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background">
        {/* Animated Grid */}
        <div className="absolute inset-0 tech-grid-bg opacity-60"></div>
        
        {/* Floating Orbs - Blue theme */}
        <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-gradient-to-br from-primary/20 to-accent/10 rounded-full blur-[100px] floating-orb"></div>
        <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-gradient-to-br from-secondary/20 to-primary/10 rounded-full blur-[80px] floating-orb-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 via-transparent to-transparent rounded-full animate-glow-pulse"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-foreground">Ghana's Premier Tech Network</span>
        </div>

        <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-4 leading-tight tracking-tight">
            <span className="gradient-text">
              Phaemos
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-foreground/80">Technologies</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Join our elite network of tech professionals. Get matched with high-paying 
          projects and earn <span className="text-primary font-semibold">60% of project revenue</span> while we handle client acquisition.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground px-10 py-6 text-xl font-semibold rounded-2xl shadow-2xl glow-primary transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("apply")}
          >
            <Users className="mr-2 h-6 w-6" />
            Apply to Join Network
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary/30 text-foreground hover:bg-primary/10 hover:border-primary/50 px-10 py-6 text-xl font-semibold rounded-2xl glass transform hover:scale-105 transition-all duration-300"
            onClick={() => scrollToSection("services")}
          >
            <Code className="mr-2 h-6 w-6" />
            View Expertise Areas
          </Button>
        </div>
        
        {/* Enhanced Key Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="glass p-8 rounded-3xl hover-lift border-gradient animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                <Trophy className="h-10 w-10 text-amber-500" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-primary mb-3">60% Revenue Share</h3>
            <p className="text-muted-foreground text-lg">Earn majority of project revenue while we handle client acquisition and business development</p>
          </div>
          <div className="glass p-8 rounded-3xl hover-lift border-gradient animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                <Zap className="h-10 w-10 text-emerald-500" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-secondary mb-3">Flexible Work</h3>
            <p className="text-muted-foreground text-lg">Work on projects that match your schedule, expertise, and professional goals</p>
          </div>
          <div className="glass p-8 rounded-3xl hover-lift border-gradient animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <Users className="h-10 w-10 text-accent" />
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-accent mb-3">No Client Hunting</h3>
            <p className="text-muted-foreground text-lg">Focus on what you do best while we bring high-quality projects directly to you</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;