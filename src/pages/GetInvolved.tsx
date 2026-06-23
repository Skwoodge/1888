import { useState } from "react";
import { Mail, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";
import { toast } from "sonner";

const involvementAreas = [
  "Veteran / Service Member Marcher (4th of July Parade)",
  "Family Member Representing a Veteran",
  "Parade Volunteer",
  "Float Construction",
  "Fundraising & Sponsorship Outreach",
  "Story Collections — Veteran & Heritage Histories",
  "Food & Cultural Experience",
  "Property & Development Support (Senora Street / Granite Creek Park)",
];

export default function GetInvolved() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);

  const toggleArea = (area: string) => {
    setSelectedAreas((prev) =>
      prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in your name and email.");
      return;
    }

    const subject = encodeURIComponent(
      `Get Involved — ${name}`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nAreas of Interest:\n${selectedAreas.map((a) => `- ${a}`).join("\n")}\n\nMessage:\n${message}`
    );
    window.open(
      `mailto:info.1888society@gmail.com?subject=${subject}&body=${body}`,
      "_blank"
    );
    toast.success(
      "Your email client is opening! Thank you for your interest."
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-adobe to-charcoal" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(212,168,83,0.1),transparent_60%)]" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
          <SectionReveal>
            <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
              Make a Difference
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Get{" "}
              <span className="text-gold italic">Involved</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              Whether you're a veteran, a family member, or a community
              supporter — there's a place for you in the 1888 Americano Society.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Urgent: Parade Volunteer Call */}
      <section className="py-16 sm:py-20 bg-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="bg-terracotta/10 border-2 border-terracotta/30 rounded-3xl p-8 sm:p-10">
              <div className="flex items-start gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-terracotta shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                    All Veterans Welcome to March With Us
                  </h2>
                  <p className="font-body text-white/70 text-lg leading-relaxed">
                    We are honoring the <strong className="text-gold">Mexican heritage
                    of Prescott</strong> and the veterans who served our country.
                    All veterans — regardless of background — are invited to
                    march alongside us as we celebrate the contributions of
                    Americans with Mexican heritage to our community and our nation.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ml-12">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-body text-white/80 font-semibold mb-1">All Veterans Welcome</p>
                  <p className="font-body text-white/50 text-sm">March alongside us to honor Mexican heritage</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-body text-white/80 font-semibold mb-1">Family Members Welcome</p>
                  <p className="font-body text-white/50 text-sm">Represent a veteran who can't be there in person</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-body text-white/80 font-semibold mb-1">10×25 ft Arizona Flag</p>
                  <p className="font-body text-white/50 text-sm">To be carried by marchers during the parade</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="font-body text-terracotta font-bold mb-1">Deadline: June 24</p>
                  <p className="font-body text-white/50 text-sm">For custom shirt printing — sign up now</p>
                </div>
              </div>
              <div className="ml-12 mt-6">
                <a href="mailto:info.1888society@gmail.com?subject=Parade%20Volunteer%20Signup">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-500 text-charcoal font-body rounded-xl px-8 py-4 text-lg shadow-xl shadow-gold/20 transition-all duration-300 hover:-translate-y-1"
                  >
                    Sign Up to March
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Volunteer Form */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <SectionReveal direction="left">
              <div>
                <span className="inline-block text-gold font-body text-sm font-semibold tracking-widest uppercase mb-4">
                  Sign Up
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-6">
                  Join the{" "}
                  <span className="text-terracotta italic">Society</span>
                </h2>
                <p className="font-body text-charcoal/60 mb-8">
                  Fill out the form below and we'll be in touch. Whether you
                  want to march, volunteer, or support from behind the scenes
                  — we'd love to have you.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="border-gold/30 focus:border-terracotta"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="border-gold/30 focus:border-terracotta"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(xxx) xxx-xxxx"
                      className="border-gold/30 focus:border-terracotta"
                    />
                  </div>
                  <div className="space-y-3">
                    <Label>Areas of Interest</Label>
                    <div className="grid grid-cols-1 gap-3">
                      {involvementAreas.map((area) => (
                        <label
                          key={area}
                          className="flex items-start gap-3 cursor-pointer group"
                        >
                          <Checkbox
                            checked={selectedAreas.includes(area)}
                            onCheckedChange={() => toggleArea(area)}
                            className="mt-0.5 border-gold/40 data-[state=checked]:bg-terracotta data-[state=checked]:border-terracotta"
                          />
                          <span className="font-body text-sm text-charcoal/70 group-hover:text-charcoal transition-colors">
                            {area}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message / Notes</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about yourself, your veteran connection, or any questions..."
                      className="border-gold/30 focus:border-terracotta min-h-[120px]"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl px-8 py-4 text-lg shadow-xl shadow-terracotta/30 transition-all duration-300 hover:-translate-y-1"
                  >
                    Send via Email
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </SectionReveal>

            {/* Info */}
            <SectionReveal direction="right">
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-bold text-charcoal mb-4">
                    Contact Us
                  </h3>
                  <div className="space-y-4">
                    <a
                      href="mailto:info.1888society@gmail.com"
                      className="flex items-center gap-3 text-charcoal/70 hover:text-terracotta transition-colors"
                    >
                      <Mail className="w-5 h-5 text-terracotta" />
                      <span className="font-body">info.1888society@gmail.com</span>
                    </a>
                    <a
                      href="tel:+19287138216"
                      className="flex items-center gap-3 text-charcoal/70 hover:text-terracotta transition-colors"
                    >
                      <Phone className="w-5 h-5 text-terracotta" />
                      <span className="font-body">(928) 713-8216</span>
                    </a>
                  </div>
                </div>

                <div className="bg-sand/60 rounded-2xl p-6 border border-gold/20">
                  <h3 className="font-display text-xl font-bold text-charcoal mb-3">
                    What Happens Next?
                  </h3>
                  <ul className="space-y-3 font-body text-charcoal/60">
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta font-bold mt-1">1.</span>
                      <span>You reach out via form or email</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta font-bold mt-1">2.</span>
                      <span>We connect you with the right volunteer coordinator</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta font-bold mt-1">3.</span>
                      <span>You join us at the next meeting or event</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-terracotta font-bold mt-1">4.</span>
                      <span>Together, we preserve and celebrate our heritage</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-terracotta/5 rounded-2xl p-6 border border-terracotta/20">
                  <h3 className="font-display text-xl font-bold text-terracotta mb-3">
                    Our Mission
                  </h3>
                  <p className="font-body text-charcoal/60 leading-relaxed italic">
                    "The 1888 Americano Society recognizes, preserves, and
                    celebrates the rich cultural heritage of Americans with Mexican heritage
                    in Prescott, Arizona and the surrounding communities —
                    through heritage education, community celebrations, and
                    the recognition of those who served our country."
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
