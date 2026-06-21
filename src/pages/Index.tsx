import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Index() {
  const heroRef = useScrollReveal({ threshold: 0.05, rootMargin: "0px" });

  return (
    <div className="min-h-screen">
      {/* ============ HERO ============ */}
      <section
        ref={heroRef.ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
            style={{
              backgroundImage: "url(/assets/hero-bg.png)",
              transform: `translateY(${heroRef.isRevealed ? "0%" : "5%"}) scale(1.05)`,
              transition: "transform 1.5s ease-out",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-terracotta/30 to-charcoal/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24">
          <div
            className={`transition-all duration-1000 delay-200 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative mx-auto mb-8 w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border-2 border-gold/40 shadow-[0_0_40px_rgba(212,168,83,0.3)]" />
              <img
                src="/1888_logo.png"
                alt="1888 Americano Society Logo"
                className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(212,168,83,0.4)]"
              />
            </div>
          </div>

          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-500 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            1888 Americano{" "}
            <span className="text-gold italic">Society</span>
          </h1>

          <p
            className={`font-display font-bold italic text-xl sm:text-2xl md:text-3xl text-gold mb-4 transition-all duration-1000 delay-700 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Honoring the Heritage & Service of Mexican Americans in Prescott and the American West
          </p>

          <p
            className={`font-body text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-4 transition-all duration-1000 delay-900 ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Recognizing, preserving, and celebrating the rich cultural heritage
            of Prescott, Arizona and the American West — from the vaquero
            traditions that shaped the cowboy to the veterans who served our
            country.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-[1100ms] ${
              heroRef.isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <Link to="/heritage">
              <Button
                size="lg"
                className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-6 text-lg shadow-xl shadow-terracotta/30 hover:shadow-terracotta/50 transition-all duration-300 hover:-translate-y-1"
              >
                Our Heritage
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/get-involved">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gold/60 text-gold hover:bg-gold hover:text-charcoal font-body rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
              >
                Get Involved
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <SectionReveal direction="left">
              <div>
                <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                  Our Purpose
                </span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6 leading-tight">
                  Our{" "}
                  <span className="text-terracotta italic">Mission</span>
                </h2>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed mb-6">
                  The 1888 Americano Society recognizes, preserves, and
                  celebrates the rich cultural heritage of Mexican Americans in
                  Prescott, Arizona and the surrounding communities. From the
                  vaquero traditions that gave birth to the American cowboy, to
                  the generations of families who helped shape our region — we
                  ensure these stories are told, remembered, and honored.
                </p>
                <p className="font-body text-charcoal/70 text-lg leading-relaxed">
                  Through heritage education, community celebrations, and the
                  recognition of those who served our country, we carry this
                  legacy forward for future generations.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal direction="right">
              <div className="relative">
                <div className="bg-terracotta/5 border-2 border-gold/20 rounded-3xl p-10 sm:p-12">
                  <div className="text-center">
                    <span className="font-display text-8xl sm:text-9xl font-bold text-terracotta/10 absolute top-4 right-6 select-none">
                      1888
                    </span>
                    <span className="font-display text-7xl sm:text-8xl font-bold text-terracotta/20">
                      1888
                    </span>
                    <p className="font-display italic text-xl text-adobe mt-4 leading-relaxed">
                      "For all Americans with Mexican heritage — preserving our
                      past, honoring our heroes, strengthening our community."
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* ============ THREE PILLARS ============ */}
      <section className="py-20 sm:py-28 bg-sand/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                What We Do
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Three Pillars of{" "}
                <span className="text-terracotta italic">Purpose</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: BookOpen,
                title: "Preserve Heritage",
                desc: "Safeguarding Prescott's western heritage and the lasting contributions of the Mexican American community to the American West.",
                delay: 0,
              },
              {
                icon: Shield,
                title: "Honor Veterans",
                desc: "Recognizing the service and sacrifice of Mexican American veterans, the vaquero tradition, and the early Prescott families who built our community.",
                delay: 150,
              },
              {
                icon: Users,
                title: "Community Engagement",
                desc: "Promoting Prescott Frontier Days Parade awareness, cultural celebrations, and fellowship that brings our community together.",
                delay: 300,
              },
            ].map((pillar) => (
              <SectionReveal key={pillar.title} delay={pillar.delay}>
                <div className="bg-cream rounded-2xl p-8 border border-gold/20 shadow-sm hover:shadow-lg hover:border-gold/40 transition-all duration-300 hover:-translate-y-1 h-full group">
                  <div className="w-14 h-14 rounded-xl bg-terracotta/10 flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:scale-110 transition-all duration-300">
                    <pillar.icon className="w-7 h-7 text-terracotta group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-body text-charcoal/60 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* ============ EXPLORE ============ */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Explore
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                Discover Our{" "}
                <span className="text-terracotta italic">Story</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                to: "/heritage",
                title: "Our Heritage",
                desc: "From vaquero traditions to the World's Oldest Rodeo — the full story of Prescott's Mexican American heritage.",
                gradient: "from-terracotta to-terracotta-700",
              },
              {
                to: "/events",
                title: "Events",
                desc: "4th of July Parade, America 250 celebrations, and upcoming community gatherings.",
                gradient: "from-gold-600 to-gold",
              },
              {
                to: "/get-involved",
                title: "Get Involved",
                desc: "Volunteer, march with us, and help preserve the heritage of the American West.",
                gradient: "from-sage-dark to-sage",
              },
              {
                to: "/donate",
                title: "Support Us",
                desc: "Every contribution helps us honor our heritage and recognize those who served.",
                gradient: "from-adobe to-adobe-light",
              },
            ].map((card) => (
              <SectionReveal key={card.to} delay={0}>
                <Link to={card.to} className="block group h-full">
                  <div className="relative overflow-hidden rounded-2xl h-full min-h-[280px] flex flex-col justify-end p-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} transition-transform duration-500 group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="relative z-10">
                      <h3 className="font-display text-2xl font-bold text-white mb-2">
                        {card.title}
                      </h3>
                      <p className="font-body text-white/70 text-sm leading-relaxed mb-3">
                        {card.desc}
                      </p>
                      <span className="inline-flex items-center text-gold text-sm font-semibold font-body group-hover:translate-x-1 transition-transform duration-300">
                        Explore <ArrowRight className="ml-1 w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* ============ AMERICA 250 / PARADE ============ */}
      <section className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta/20 via-transparent to-gold/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal>
            <div className="text-center">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                4th of July Parade 2026
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Celebrating America's{" "}
                <span className="text-gold italic">250th Anniversary</span>
              </h2>
              <p className="font-body text-white/60 text-lg max-w-3xl mx-auto mb-4 leading-relaxed">
                This year, the 1888 Americano Society makes its debut in the
                Prescott 4th of July Parade — honoring the Mexican Americans
                of Yavapai County who served our country. We are highlighting
                the veterans and service men and women with Mexican heritage
                who proudly represented our community.
              </p>
              <p className="font-body text-white/80 text-lg max-w-3xl mx-auto mb-8 leading-relaxed font-semibold">
                We are looking for service men and women with Mexican heritage
                to march in the parade. If you are a veteran or family member
                of a veteran from Yavapai County, we want to honor you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-involved">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-500 text-charcoal font-body rounded-xl px-8 py-6 text-lg shadow-xl shadow-gold/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    Volunteer Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/events">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white/30 text-white hover:bg-white/10 font-body rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Sponsorship
                  </Button>
                </Link>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-20 sm:py-28 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal mb-6">
              Be Part of the <span className="text-terracotta italic">Legacy</span>
            </h2>
            <p className="font-body text-charcoal/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you march with us, volunteer, donate, or simply share
              our story — you become part of preserving the heritage and
              honoring the service of Mexican Americans in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button
                  size="lg"
                  className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-6 text-lg shadow-xl shadow-terracotta/30 hover:shadow-terracotta/50 transition-all duration-300 hover:-translate-y-1"
                >
                  Join Us
                </Button>
              </Link>
              <Link to="/donate">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-terracotta/30 text-terracotta hover:bg-terracotta hover:text-white font-body rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Donate Now
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}
