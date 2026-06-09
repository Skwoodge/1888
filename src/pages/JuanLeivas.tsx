import HeroSection from "@/components/HeroSection";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, MapPin, Trophy, Users } from "lucide-react";

const JuanLeivas = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Juan Leivas"
        subtitle="The First Champion of the World's Oldest Rodeo — a Mexican-American cowboy whose legacy endures from 1888 to today."
        tagline="The Original Champion"
        bgImage="/assets/history-bg.jpg"
        small
      />

      {/* Introduction */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
            {/* Image */}
            <SectionReveal direction="left" className="lg:col-span-2">
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-br from-terracotta/20 to-gold/20 rounded-3xl blur-sm" />
                <div className="relative bg-cream rounded-2xl overflow-hidden border-2 border-gold/30 shadow-xl">
                  <div className="aspect-[3/4] bg-gradient-to-b from-terracotta/10 to-gold/10 flex items-center justify-center">
                    <img
                      src="/juan-leivas.png"
                      alt="Juan Leivas — 1888 Rodeo Champion"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 text-center bg-gradient-to-t from-charcoal to-charcoal/90">
                    <p className="font-display text-gold text-lg font-semibold">Juan Leivas</p>
                    <p className="text-cream/50 text-sm mt-1">First Champion · 1888</p>
                  </div>
                </div>
              </div>
            </SectionReveal>

            {/* Story */}
            <div className="lg:col-span-3">
              <SectionReveal direction="right">
                <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">His Story</span>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3 leading-tight">
                  A Cowboy's Legacy Born in <span className="text-terracotta italic">1888</span>
                </h2>
              </SectionReveal>

              <SectionReveal delay={100}>
                <div className="mt-8 text-charcoal/60 leading-relaxed space-y-6 text-lg">
                  <p>
                    In the rugged terrain southwest of Prescott, near <strong className="text-charcoal">Date Creek Ranch</strong>, 
                    a young Mexican-American cowboy named Juan Leivas was forging the skills that would make him 
                    a champion. Raised in the vaquero tradition, Leivas was part of a community of Mexican-American 
                    ranchers and cowboys who were the backbone of Prescott's cattle industry.
                  </p>
                  <p>
                    When the first World's Oldest Rodeo was held in <strong className="text-terracotta">1888</strong>, 
                    Juan Leivas entered the competition. In the bronco riding event, he tied 
                    <strong className="text-charcoal"> Charlie Meadows</strong> — one of the most famous cowboys of the era — 
                    in a feat that stunned the crowd. But Leivas wasn't done.
                  </p>
                  <p>
                    In the steer roping event, Leivas caught and tied his steer in an impressive 
                    <strong className="text-charcoal"> 1 minute and 17 seconds</strong>, claiming the event. His combined 
                    performance earned him the title of <strong className="text-terracotta">"Best Cowboy"</strong> and the 
                    honor of receiving a beautifully inscribed silver trophy — the first award in rodeo history.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      <ScrollDivider />

      {/* 1889 Return */}
      <section className="py-20 sm:py-28 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">The Comeback</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3 leading-tight">
              1889: Leivas Returns to Win Again
            </h2>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mt-8 text-charcoal/60 leading-relaxed space-y-6 text-lg">
              <p>
                One year after his historic victory, Juan Leivas came back to the 1889 competition 
                and won the <strong className="text-charcoal">saddle bronc riding</strong> event — proving his 1888 
                performance was no fluke. His back-to-back dominance established him as the premier rodeo 
                competitor of his era.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { icon: Trophy, title: "Best Cowboy", desc: "1888 Champion — the first in rodeo history" },
                { icon: Award, title: "Silver Trophy", desc: "Inscribed and awarded as 'Best Cowboy'" },
                { icon: Users, title: "Back-to-Back", desc: "Won saddle bronc riding in both 1888 and 1889" },
              ].map((item, i) => (
                <div key={i} className="text-center p-6 rounded-2xl border border-gold/20 bg-cream hover:border-gold/40 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-terracotta/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-6 w-6 text-terracotta" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal">{item.title}</h3>
                  <p className="text-sm text-charcoal/50 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Heritage */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">Heritage</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3 leading-tight">
              Opata Indian Heritage
            </h2>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mt-8 text-charcoal/60 leading-relaxed space-y-6 text-lg">
              <p>
                According to a family account shared by <strong className="text-charcoal">David Leivas Chavez</strong>, 
                Juan Leivas was of <strong className="text-terracotta">Opata Indian heritage</strong> — adding yet another layer 
                to the rich multicultural tapestry of the American West. The Opata (or "Eudeve") people were 
                indigenous to what is now Sonora, Mexico, and their descendants carried forward a deep connection 
                to the land and to horsemanship.
              </p>
              <p>
                Juan Leivas's story is not just a rodeo story — it is a story of the Americas. 
                Indigenous heritage, Mexican vaquero traditions, and the emerging American frontier all 
                converge in one man on one day in 1888 Prescott, Arizona.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="mt-10 p-8 rounded-2xl bg-gradient-to-br from-terracotta to-adobe text-cream">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">The Trophy Lives On</h3>
                  <p className="text-cream/70 mt-2 leading-relaxed">
                    Juan Leivas's inscribed silver trophy — the very first award in rodeo history — is preserved 
                    at the <strong className="text-cream">Sharlot Hall Museum</strong> in Prescott, Arizona. It stands as 
                    a tangible connection to the origins of the World's Oldest Rodeo and the multicultural 
                    cowboys who created it.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream">
              Keep the Legacy Alive
            </h2>
            <p className="mt-4 text-cream/60 text-lg max-w-xl mx-auto">
              Join the 1888 Americano Society in preserving the stories of cowboys like Juan Leivas.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/donate">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta-600 text-cream font-semibold px-8 py-6 rounded-xl">
                  Donate Today
                </Button>
              </Link>
              <Link to="/get-involved">
                <Button size="lg" variant="outline" className="border-gold/40 text-gold hover:bg-gold/10 px-8 py-6 rounded-xl">
                  Join the Society
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default JuanLeivas;
