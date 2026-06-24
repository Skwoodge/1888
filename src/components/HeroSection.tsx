import { useScrollPosition } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  tagline?: string;
  bgImage?: string;
  bgClassName?: string;
  className?: string;
  children?: React.ReactNode;
  small?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  tagline,
  bgImage,
  bgClassName,
  className,
  children,
  small = false,
}: HeroSectionProps) {
  const scrollY = useScrollPosition();
  const isMobile = useIsMobile();

  return (
    <section
      className={cn(
        "relative flex items-center justify-center overflow-hidden",
        small ? "min-h-[50vh] sm:min-h-[60vh]" : "min-h-screen",
        className
      )}
    >
      {/* Parallax background */}
      {bgImage && (
        <div
          className="absolute inset-0 z-0"
          style={{ transform: isMobile ? "none" : `translateY(${scrollY * 0.3}px)` }}
        >
          <div
            className="absolute inset-[-20%] bg-cover bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        </div>
      )}

      {/* Default gradient bg if no image */}
      {!bgImage && (
        <div className={cn(
          "absolute inset-0 z-0 bg-gradient-to-br from-terracotta via-terracotta-600 to-adobe",
          bgClassName
        )}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(212,168,83,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(107,58,42,0.2),transparent_60%)]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {tagline && (
          <p className="font-display italic text-gold/80 text-base sm:text-lg mb-4 animate-fade-up">
            {tagline}
          </p>
        )}
        <h1
          className={cn(
            "font-display font-bold text-cream leading-tight animate-fade-up",
            small ? "text-4xl sm:text-5xl md:text-6xl" : "text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
          )}
          style={{ animationDelay: "150ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-6 text-cream/70 text-lg sm:text-xl max-w-2xl mx-auto font-body leading-relaxed animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8 animate-fade-up" style={{ animationDelay: "450ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
