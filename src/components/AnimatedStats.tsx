import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Users, Briefcase, Award, Globe } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  delay: number;
  isVisible: boolean;
}

function StatItem({ icon, value, suffix = "", label, delay, isVisible }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div
      className={`flex flex-col items-center p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover-lift transition-all duration-500 ${
        isVisible ? "animate-fade-in opacity-100" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 mb-4 glow-primary">
        {icon}
      </div>
      <div className="text-4xl md:text-5xl font-display font-bold gradient-text mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm md:text-base text-center">{label}</div>
    </div>
  );
}

export default function AnimatedStats() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>({ threshold: 0.2 });

  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, value: 500, suffix: "+", label: "Professionals in Network" },
    { icon: <Briefcase className="w-8 h-8 text-accent" />, value: 150, suffix: "+", label: "Successful Placements" },
    { icon: <Award className="w-8 h-8 text-secondary" />, value: 98, suffix: "%", label: "Client Satisfaction" },
    { icon: <Globe className="w-8 h-8 text-primary" />, value: 25, suffix: "+", label: "Countries Served" },
  ];

  return (
    <section ref={ref} className="py-20 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl floating-orb" />
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl floating-orb-delayed" />

      <div className="container mx-auto relative z-10">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "animate-fade-in opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Our <span className="gradient-text">Impact</span> in Numbers
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by professionals and companies worldwide to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              delay={index * 150}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
