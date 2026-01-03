import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "fade-in" | "slide-up" | "scale-in";
}

export default function ScrollAnimationWrapper({
  children,
  className = "",
  delay = 0,
  animation = "fade-in",
}: ScrollAnimationWrapperProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold: 0.1 });

  const animationClass = isVisible ? `animate-${animation}` : "opacity-0";

  return (
    <div
      ref={ref}
      className={`transition-all duration-500 ${animationClass} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
