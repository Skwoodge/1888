import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";

const timeline = [
  {
    year: "1888",
    title: "The First Rodeo",
    desc: "The World's Oldest Rodeo kicks off in Prescott, Arizona Territory. Juan Leivas, a cowboy with Mexican heritage, ties Charlie Meadows for the bronco-riding championship and wins the steer-roping event outright with a time of 1 minute and 17 seconds.",
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
    title: "Generations of Service",
    desc: "Families with Mexican heritage from Prescott and Yavapai County served in every major conflict — World War I, World War II, Korea, Vietnam, and beyond — carrying the values of their heritage into uniform.",
  },
  {
    year: "1988",
    title: "Centennial Celebration",
    desc: "Prescott celebrates 100 years of the World's Oldest Rodeo, drawing national attention to the historic event and its deep cultural roots.",
  },
  {
    year: "Today",
    title: "1888 Americano Society",
    desc: "The 1888 Americano Society carries the torch — preserving heritage, honoring veterans, and celebrating the contributions from Americans with Mexican heritage that shaped our community.",
  },
];

export default function Heritage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-terracotta-800 to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,168,83,0.1),transparent_60%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <SectionReveal>
            <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
              Prescott, Arizona
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Our{" "}
              <span className="text-gold italic">Heritage</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              From the vaquero traditions that created the American cowboy, to the
              veterans who served our country — the story of Americans with Mexican heritage in
              Prescott and the American West.
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
                  138 years.
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
                Territory, and from its earliest days, cowboys with Mexican heritage were central to the community's
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
        </div>
      </section>

      <ScrollDivider />

      {/* Juan Leivas — The First Champion */}
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
                <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                  The First Champion
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                  Juan{" "}
                  <span className="text-terracotta italic">Leivas</span>
                </h2>
                <div className="space-y-5 font-body text-charcoal/70 text-lg leading-relaxed">
                  <p>
                    In 1888, at the very first rodeo in Prescott, Arizona
                    Territory, a cowboy named Juan Leivas with Mexican heritage made
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
                    courage of cowboys with Mexican heritage — and that this
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

      {/* Generations of Service */}
      <section className="py-20 sm:py-28 bg-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-terracotta/10 via-transparent to-gold/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal>
            <div className="text-center mb-12">
              <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                Honoring Service
              </span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Generations of{" "}
                <span className="text-gold italic">Service</span>
              </h2>
              <p className="font-body text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
                The same families who built Prescott's western heritage have
                served our country in every generation. From World War I to
                today, Americans with Mexican heritage from Yavapai County have answered the
                call — and the 1888 Americano Society is committed to honoring
                their sacrifice.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={150}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { era: "World War I", desc: "Americans with Mexican heritage from Prescott and Yavapai County served overseas, fighting for a country that didn't always recognize their contributions." },
                { era: "World War II", desc: "Hundreds of Americans with Mexican heritage from the region served in every theater of the war, earning medals and honors while maintaining the values of their heritage." },
                { era: "Korea & Vietnam", desc: "Generations continued to serve. Families like the Espitias and Gallegos sent sons and grandsons to defend the freedoms they held dear." },
                { era: "Today", desc: "The 1888 Americano Society ensures these stories are never forgotten — honoring veterans and preserving the legacy of service in our community." },
              ].map((item) => (
                <div key={item.era} className="bg-white/5 rounded-2xl p-6 border border-white/10">
                  <h3 className="font-display text-xl font-bold text-gold mb-3">{item.era}</h3>
                  <p className="font-body text-white/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
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
            <div className="absolute left-7 sm:left-10 top-0 bottom-0 w-px bg-gold/30" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <SectionReveal key={item.year} delay={i * 100}>
                  <div className="flex gap-6 sm:gap-8">
                    {/* Dot */}
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-terracotta flex items-center justify-center text-white font-display font-bold text-[10px] sm:text-xs leading-tight text-center shadow-lg border-4 border-cream z-10 relative px-1">
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

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Continue the <span className="text-gold italic">Story</span>
            </h2>
            <p className="font-body text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              Help us preserve this heritage and honor the veterans who carried
              it forward. Your support makes a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-involved">
                <Button className="bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-6 text-lg shadow-xl transition-all duration-300 hover:-translate-y-1">
                  Get Involved
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
