import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";

const timeline = [
  {
    year: "1888",
    title: "The First Rodeo",
    desc: "The World's Oldest Rodeo kicks off in Prescott, Arizona Territory. Juan Leivas, a Mexican-American cowboy, ties Charlie Meadows for the bronco-riding championship and wins the steer-roping event outright with a time of 1 minute and 17 seconds.",
  },
  {
    year: "1889",
    title: "Leivas Returns",
    desc: "Juan Leivas comes back and wins the saddle bronco-riding event, cementing his status as one of the greatest cowboys of the early era.",
  },
  {
    year: "Early 1900s",
    title: "Prescott's Identity",
    desc: "The rodeo becomes central to Prescott's identity. Vaquero traditions blend with Anglo cowboy culture, creating a unique heritage that defines the region.",
  },
  {
    year: "20th Century",
    title: "Preserving the Legacy",
    desc: "Generations of Prescott residents work to keep the story alive — the Mexican-American roots of rodeo, the vaquero influence on American cowboy culture, and the community bonds forged in the arena.",
  },
  {
    year: "1988",
    title: "Centennial Celebration",
    desc: "Prescott celebrates 100 years of the World's Oldest Rodeo, drawing national attention to the historic event and its deep cultural roots.",
  },
  {
    year: "Today",
    title: "1888 Americano Society",
    desc: "The 1888 Americano Society carries the torch — preserving this heritage through education, community events, and cultural celebration. The legacy lives on.",
  },
];

export default function History() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/american-usa-flag-wooden-backdrop.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal/90" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <SectionReveal>
            <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
              Prescott, Arizona
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Prescott's Western{" "}
              <span className="text-gold italic">Heritage</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              The story of how vaquero traditions, Mexican-American cowboys, and
              a small Arizona territory town created the World's Oldest Rodeo.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* The World's Oldest Rodeo */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8">
              The World's <span className="text-terracotta italic">Oldest Rodeo</span>
            </h2>
            <div className="space-y-6 font-body text-charcoal/70 text-lg leading-relaxed">
              <p>
                In 1888, the Arizona Territory was a land of wide-open spaces,
                dusty trails, and men who lived by the saddle. In the town of
                Prescott, a group of cowboys gathered for what would become the
                first officially recognized rodeo in the world — a competition
                that would endure for more than a century.
              </p>
              <p>
                This wasn't just a sporting event. It was a celebration of a way
                of life — the life of the cowboy, shaped by generations of
                vaquero tradition brought north from Mexico and Spain. The
                cowboy tournament format that defined the event was rooted in
                the skills these men used every day: bronco riding, roping,
                horsemanship.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <blockquote className="my-12 border-l-4 border-gold pl-6 sm:pl-8">
              <p className="font-display italic text-xl sm:text-2xl text-adobe leading-relaxed">
                "The cowboy was not born on the open range of Montana. He was
                born in the haciendas of Mexico and the ranches of Spain. The
                vaquero was the original cowboy — and Prescott's rodeo honors
                that truth."
              </p>
            </blockquote>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-6 font-body text-charcoal/70 text-lg leading-relaxed">
              <h3 className="font-display text-2xl font-bold text-charcoal">
                What Makes It the "Oldest"?
              </h3>
              <p>
                Five criteria establish Prescott's rodeo as the oldest
                continuously running rodeo in the world:
              </p>
              <ol className="list-decimal list-inside space-y-3 pl-4">
                <li>
                  <strong className="text-charcoal">Continuous operation</strong> — The rodeo has run
                  every year since 1888 without interruption.
                </li>
                <li>
                  <strong className="text-charcoal">Documented history</strong> — Newspaper records
                  and community accounts from 1888 confirm the event.
                </li>
                <li>
                  <strong className="text-charcoal">Competitive format</strong> — The original cowboy
                  tournament format included bronco riding, steer roping, and
                  horsemanship.
                </li>
                <li>
                  <strong className="text-charcoal">Community continuity</strong> — Prescott's
                  residents have maintained and celebrated the event for over
                  135 years.
                </li>
                <li>
                  <strong className="text-charcoal">Cultural significance</strong> — The rodeo
                  represents the authentic cowboy culture of the Arizona
                  Territory.
                </li>
              </ol>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* The Vaquero Tradition */}
      <section className="py-20 sm:py-28 bg-sand/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-8">
              The <span className="text-terracotta italic">Vaquero</span> Tradition
            </h2>
            <div className="space-y-6 font-body text-charcoal/70 text-lg leading-relaxed">
              <p>
                Long before the American cowboy became a Hollywood icon, there
                were the vaqueros — Spanish and Mexican horsemen who developed
                the skills, equipment, and techniques that would define cowboy
                culture for centuries. Spain brought horses, cattle, and the art
                of the vaquero to the Americas, and from these roots, the
                American cowboy was born.
              </p>
              <p>
                The word "buckaroo" itself is an anglicization of "vaquero."
                The lariat, the chaps, the saddle, the spurs — all of these
                tools of the cowboy trade originated with the vaquero
                tradition. When we celebrate the World's Oldest Rodeo, we
                celebrate this deep lineage.
              </p>
              <p>
                In Prescott, Arizona, this heritage runs particularly deep. The
                town was founded in 1864 as the first capital of the Arizona
                Territory, and from its earliest days, Mexican and
                Mexican-American cowboys were central to the community's
                identity and economy.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <blockquote className="my-12 border-l-4 border-gold pl-6 sm:pl-8">
              <p className="font-display italic text-xl sm:text-2xl text-adobe leading-relaxed">
                "Spain brought horses and rodeo to the Americas. The vaquero
                taught the gringo how to ride, how to rope, how to be a
                cowboy. Prescott remembers."
              </p>
            </blockquote>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-6 font-body text-charcoal/70 text-lg leading-relaxed">
              <h3 className="font-display text-2xl font-bold text-charcoal">
                Mexican-American Cowboys of Prescott
              </h3>
              <p>
                The cowboys who competed in the first Prescott rodeo in 1888
                were a blend of cultures. Mexican-Americans, Anglo settlers,
                and Native Americans all contributed to the ranching culture of
                the territory. They worked side by side, rode together, and
                competed together in the arena.
              </p>
              <p>
                Figures like Juan Leivas — the first champion of the World's
                Oldest Rodeo — exemplify this multicultural heritage. Leivas,
                a Mexican-American cowboy from Date Creek Ranch, won both the
                steer-roping event and tied for the bronco-riding championship,
                earning the silver trophy as the "Best Cowboy."
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={250}>
            <div className="mt-8">
              <Link to="/juan-leivas">
                <Button className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-6 py-3 shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  Read Juan Leivas' Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Through the Years
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
                A Living <span className="text-terracotta italic">Timeline</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gold/30" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <SectionReveal key={item.year} delay={i * 100}>
                  <div className="flex gap-6 sm:gap-8">
                    {/* Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-terracotta flex items-center justify-center text-white font-display font-bold text-xs sm:text-sm shadow-lg border-4 border-cream z-10 relative">
                        {item.year}
                      </div>
                    </div>
                    {/* Content */}
                    <div className="pb-4">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-charcoal mb-2">
                        {item.title}
                      </h3>
                      <p className="font-body text-charcoal/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}