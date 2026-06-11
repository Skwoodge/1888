import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";

export default function JuanLeivas() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-terracotta-900 to-charcoal" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,168,83,0.15),transparent_70%)]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <SectionReveal>
            <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
              The First Champion
            </span>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              Juan{" "}
              <span className="text-gold italic">Leivas</span>
            </h1>
            <p className="font-display italic text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto">
              The First Champion of the World's Oldest Rodeo
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Juan's Story */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Image */}
            <SectionReveal direction="left" className="lg:col-span-2">
              <div className="sticky top-28">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
                  <img
                    src="/juan-leivas.png"
                    alt="Juan Leivas — First Champion of the World's Oldest Rodeo"
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="font-display italic text-white text-sm">
                      Juan Leivas — 1888 Champion
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Content */}
            <div className="lg:col-span-3 space-y-8">
              <SectionReveal>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                  A Champion is <span className="text-terracotta italic">Crowned</span>
                </h2>
                <div className="space-y-5 font-body text-charcoal/70 text-lg leading-relaxed">
                  <p>
                    In 1888, at the very first rodeo in Prescott, Arizona
                    Territory, a Mexican-American cowboy named Juan Leivas made
                    history. From Date Creek Ranch, southwest of Prescott,
                    Leivas rode into the arena and rode out a legend.
                  </p>
                  <p>
                    In the bronco-riding event, Leivas tied with Charlie
                    Meadows — another great cowboy of the era — in a display of
                    skill that electrified the crowd. But it was in the
                    steer-roping event that Leivas truly shone, catching and
                    tying his steer in a remarkable 1 minute and 17 seconds.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={100}>
                <blockquote className="border-l-4 border-gold pl-6 sm:pl-8 py-2">
                  <p className="font-display italic text-xl sm:text-2xl text-adobe leading-relaxed">
                    "Leivas won the inscribed silver trophy as the 'Best
                    Cowboy' — a title that spoke not just to his skill, but to
                    the spirit of the vaquero tradition he embodied."
                  </p>
                </blockquote>
              </SectionReveal>

              <SectionReveal delay={200}>
                <div className="space-y-5 font-body text-charcoal/70 text-lg leading-relaxed">
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    The Silver Trophy
                  </h3>
                  <p>
                    As the overall winner, Juan Leivas was awarded an inscribed
                    silver trophy declaring him the "Best Cowboy" of the
                    inaugural Prescott rodeo. This trophy — a tangible symbol of
                    excellence — remains one of the most important artifacts of
                    early rodeo history.
                  </p>
                  <p>
                    Today, the original trophy is preserved at the{" "}
                    <strong className="text-charcoal">Sharlot Hall Museum</strong>{" "}
                    in Prescott, Arizona, where visitors can see the very award
                    that crowned the first champion of what would become the
                    World's Oldest Rodeo.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={300}>
                <div className="bg-sand/60 rounded-2xl p-8 border border-gold/20">
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                    1889: The Return
                  </h3>
                  <p className="font-body text-charcoal/70 text-lg leading-relaxed">
                    Juan Leivas didn't rest on his laurels. He came back in
                    1889 and won the saddle bronco-riding event, proving that
                    his first victory was no fluke. He was a true champion —
                    skilled, determined, and embodying the very best of the
                    vaquero tradition.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={400}>
                <div className="space-y-5 font-body text-charcoal/70 text-lg leading-relaxed">
                  <h3 className="font-display text-2xl font-bold text-charcoal">
                    Heritage & Legacy
                  </h3>
                  <p>
                    Juan Leivas' heritage adds another layer of significance to
                    his achievement. According to family accounts preserved by{" "}
                    <strong className="text-charcoal">
                      David Leivas Chavez
                    </strong>
                    , Juan Leivas was of Opata Indian heritage — a member of
                    the indigenous people of northern Mexico whose descendants
                    became part of the fabric of the American Southwest.
                  </p>
                  <p>
                    His story is a testament to the multicultural reality of the
                    American West. The cowboys who built this nation were not of
                    one blood or one origin. They were Mexican, Native American,
                    Anglo, and everything in between. Juan Leivas — champion,
                    cowboy, Opata — represents them all.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={500}>
                <blockquote className="border-l-4 border-terracotta pl-6 sm:pl-8 py-2">
                  <p className="font-display italic text-lg sm:text-xl text-adobe leading-relaxed">
                    "His family account tells of Opata Indian heritage — a
                    reminder that the American West was built by people of many
                    nations and traditions, all contributing to the cowboy
                    culture we celebrate today."
                  </p>
                  <cite className="block mt-3 font-body text-sm text-charcoal/50 not-italic">
                    — Based on family history from David Leivas Chavez
                  </cite>
                </blockquote>
              </SectionReveal>

              <SectionReveal delay={600}>
                <div className="bg-terracotta/5 rounded-2xl p-8 border border-terracotta/20">
                  <h3 className="font-display text-2xl font-bold text-terracotta mb-4">
                    The Leivas Family Today
                  </h3>
                  <p className="font-body text-charcoal/70 text-lg leading-relaxed">
                    The legacy of Juan Leivas lives on through his
                    descendants and through the 1888 Americano Society's
                    efforts to preserve this history. His story reminds us
                    that the World's Oldest Rodeo was born from the skill and
                    courage of Mexican-American cowboys — and that this
                    heritage deserves to be honored, remembered, and
                    celebrated.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Continue the <span className="text-gold italic">Story</span>
            </h2>
            <p className="font-body text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Help us preserve the legacy of Juan Leivas and the
              Mexican-American cowboys who shaped the American West.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/history">
                <Button className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Full History
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button
                  variant="outline"
                  className="border-2 border-gold/50 text-gold hover:bg-gold hover:text-charcoal font-body rounded-xl px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
                >
                  Support Our Mission
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
}