import HeroSection from "@/components/HeroSection";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";
import TimelineItem from "@/components/TimelineItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const timelineData = [
  {
    year: "1519",
    title: "Spanish Horses Arrive in the Americas",
    description: "Hernán Cortés brings horses to Mexico, beginning the transformation of horsemanship that would create the vaquero tradition.",
  },
  {
    year: "1600s",
    title: "The Vaquero Tradition Takes Root",
    description: "Spanish and Mexican horsemen develop cattle ranching techniques in the Americas — roping, riding, and herding skills that would later define the American cowboy.",
  },
  {
    year: "1700s",
    title: "Vaqueros Move North",
    description: "Mexican vaqueros settle in what is now Arizona, bringing their horsemanship, cattle skills, and rodeo-style competitions to the Prescott area.",
  },
  {
    year: "1864",
    title: "Prescott Becomes Arizona's Capital",
    description: "The territorial capital is established in Prescott, a town built on mining, ranching, and the cowboy culture of its Mexican-American settlers.",
  },
  {
    year: "1888",
    title: "The World's Oldest Rodeo",
    description: "Prescott hosts the first documented cowboy tournament — a rodeo competition judged by five criteria, making it the oldest recognized rodeo in the world.",
  },
  {
    year: "1888",
    title: "Juan Leivas Wins the Championship",
    description: "A Mexican-American cowboy from Date Creek Ranch ties Charlie Meadows in bronco riding and wins steer roping, claiming the title of 'Best Cowboy' and a silver trophy.",
  },
  {
    year: "1889",
    title: "Leivas Returns to Win Again",
    description: "Juan Leivas comes back and wins the saddle bronc riding competition, cementing his legacy as one of the greatest early rodeo champions.",
  },
  {
    year: "Today",
    title: "The 1888 Americano Society",
    description: "A new generation honors the legacy of the vaqueros and cowboys who created the World's Oldest Rodeo, preserving this heritage for future Americans.",
  },
];

const History = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <HeroSection
        title="Prescott's Western Heritage"
        subtitle="The story of the World's Oldest Rodeo — where the vaquero tradition became the American cowboy legend."
        tagline="Where It All Began"
        bgImage="/assets/history-bg.jpg"
        small
      />

      {/* Intro */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">The Origin Story</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3 leading-tight">
              From Spain to Prescott: The Birth of the American Cowboy
            </h2>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mt-8 text-charcoal/60 leading-relaxed space-y-6 text-lg">
              <p>
                Long before the American cowboy became an icon of the West, there were the <strong className="text-charcoal">vaqueros</strong> — 
                skilled Mexican horsemen whose traditions, tools, and techniques defined ranching life across the Southwest. 
                The word "cowboy" itself is a translation of the Spanish <em>vaquero</em>.
              </p>
              <p>
                When Spanish settlers brought horses to the Americas in 1519, they ignited a revolution in horsemanship. 
                Over the following centuries, Mexican vaqueros developed the lasso, the bridle, the chaps, and the 
                cattle-roping techniques that would become hallmarks of the American West. They brought these skills 
                northward into what is now Arizona, establishing Prescott's cowboy culture generations before statehood.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* The World's Oldest Rodeo */}
      <section className="py-20 sm:py-28 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">1888</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3 leading-tight">
              The World's Oldest Rodeo
            </h2>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mt-8 text-charcoal/60 leading-relaxed space-y-6 text-lg">
              <p>
                In <strong className="text-charcoal">1888</strong>, Prescott, Arizona hosted a cowboy tournament that would 
                earn the distinction of being the <strong className="text-terracotta">World's Oldest Rodeo</strong>. This wasn't just 
                a casual gathering — it was a formally organized competition judged by five specific criteria that set it apart from 
                informal ranch contests and cowboy gatherings of the era.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Formal organization by a recognized entity",
                "A designated arena or competition venue",
                "An admission charge for spectators",
                "Advertised prizes for competitors",
                "A specific set of competition rules and judged events",
              ].map((criterion, i) => (
                <div key={i} className="flex items-start gap-3 p-5 rounded-xl bg-cream border border-gold/20">
                  <span className="shrink-0 w-7 h-7 rounded-full bg-terracotta text-cream text-xs font-bold flex items-center justify-center mt-0.5">
                    {i + 1}
                  </span>
                  <span className="text-sm text-charcoal/70 leading-relaxed">{criterion}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-terracotta/5 to-gold/5 border border-terracotta/20">
              <p className="font-display italic text-xl sm:text-2xl text-charcoal/80 leading-relaxed">
                "Prescott's 1888 cowboy tournament met all five criteria — making it not just a local tradition, 
                but the earliest documented rodeo in the world that still operates under its original name and format."
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Vaquero Tradition */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">Heritage</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3 leading-tight">
              The Vaquero Tradition
            </h2>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="mt-8 text-charcoal/60 leading-relaxed space-y-6 text-lg">
              <p>
                The vaquero tradition is the beating heart of Prescott's rodeo heritage. These weren't just 
                ranch hands — they were <strong className="text-charcoal">master horsemen</strong> whose skills in 
                roping, riding, and cattle management were unmatched. Spain had brought horses and horsemanship to 
                the Americas, and Mexican vaqueros refined these into an art form.
              </p>
              <p>
                The vaquero's equipment — the <em>reata</em> (lasso), <em>chaparreras</em> (chaps), and 
                <em> sombrero</em> — became the cowboy's lasso, chaps, and hat. The skills of the vaquero became 
                the events of the rodeo: bronc riding, steer roping, barrel racing, and calf roping.
              </p>
              <p>
                Mexican-American cowboys were central to Prescott's ranching community. They were the backbone 
                of the cattle industry, the builders of ranches, and the competitors in the very first rodeos. 
                The World's Oldest Rodeo was not created in spite of this heritage — it was created 
                <em> because</em> of it.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-sand/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-14">
              <span className="text-terracotta font-semibold text-sm uppercase tracking-widest">Timeline</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal mt-3">
                Key Moments in History
              </h2>
            </div>
          </SectionReveal>

          <div className="space-y-2">
            {timelineData.map((item, i) => (
              <SectionReveal key={i} delay={i * 80}>
                <TimelineItem
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  side={i % 2 === 0 ? "left" : "right"}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cream">
              Meet the First Champion
            </h2>
            <p className="mt-4 text-cream/60 text-lg max-w-xl mx-auto">
              Juan Leivas — a Mexican-American cowboy who won the very first World's Oldest Rodeo.
            </p>
            <div className="mt-8">
              <Link to="/juan-leivas">
                <Button size="lg" className="bg-terracotta hover:bg-terracotta-600 text-cream font-semibold px-8 py-6 rounded-xl">
                  Read Juan's Story →
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default History;
