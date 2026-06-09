import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "left" | "right" | "scale";
  delay?: number;
}

export default function SectionReveal({ children, className, direction = "up", delay = 0 }: SectionRevealProps) {
  const { ref, isRevealed } = useScrollReveal();

  const directionClasses = {
    up: "scroll-reveal",
    left: "scroll-reveal-left",
    right: "scroll-reveal-right",
    scale: "scroll-reveal-scale",
  };

  return (
    <div
      ref={ref}
      className={cn(directionClasses[direction], isRevealed && "revealed", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
