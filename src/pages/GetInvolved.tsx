import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import SectionReveal from "@/components/SectionReveal";
import ScrollDivider from "@/components/ScrollDivider";
import { toast } from "sonner";

const involvementAreas = [
  "Parade Volunteer",
  "Food & Cultural Experience",
  "Fundraising",
  "Story Collections",
  "Veteran Participation in 4th of July Parade",
  "Float Construction",
  "Property & Development Support (Senora Street / Granite Creek Park)",
];

const meetings = [
  {
    label: "General Meeting",
    schedule: "Check back for updated meeting times",
    location: "Prescott, AZ",
  },
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
              Join the{" "}
              <span className="text-gold italic">Society</span>
            </h1>
            <p className="font-body text-white/70 text-lg sm:text-xl max-w-2xl mx-auto">
              Whether you volunteer, share stories, or support our events —
              there's a place for you in preserving Prescott's heritage.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-20 sm:py-28 bg-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-charcoal mb-3">
              Volunteer <span className="text-terracotta italic">Form</span>
            </h2>
            <p className="font-body text-charcoal/60 text-lg mb-10">
              Tell us about yourself and how you'd like to get involved. We'll
              be in touch!
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl p-6 sm:p-10 border border-gold/15 shadow-sm space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name" className="font-body text-charcoal mb-1.5 block">
                    Name <span className="text-terracotta">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="rounded-xl border-gold/30 focus:border-terracotta focus:ring-terracotta font-body"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="font-body text-charcoal mb-1.5 block">
                    Email <span className="text-terracotta">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="rounded-xl border-gold/30 focus:border-terracotta focus:ring-terracotta font-body"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="phone" className="font-body text-charcoal mb-1.5 block">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="rounded-xl border-gold/30 focus:border-terracotta focus:ring-terracotta font-body"
                />
              </div>

              <div>
                <Label className="font-body text-charcoal mb-3 block">
                  Areas of Interest
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {involvementAreas.map((area) => (
                    <label
                      key={area}
                      className="flex items-start gap-3 p-3 rounded-xl border border-gold/15 hover:border-gold/40 transition-colors cursor-pointer"
                    >
                      <Checkbox
                        checked={selectedAreas.includes(area)}
                        onCheckedChange={() => toggleArea(area)}
                        className="mt-0.5 border-gold/40 data-[state=checked]:bg-terracotta data-[state=checked]:border-terracotta"
                      />
                      <span className="font-body text-sm text-charcoal/70 leading-snug">
                        {area}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="message" className="font-body text-charcoal mb-1.5 block">
                  Message / Notes
                </Label>
                <Textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about yourself, your interests, or any questions..."
                  rows={4}
                  className="rounded-xl border-gold/30 focus:border-terracotta focus:ring-terracotta font-body resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-terracotta hover:bg-terracotta-600 text-white font-body rounded-xl py-6 text-lg shadow-lg shadow-terracotta/20 transition-all duration-300 hover:-translate-y-0.5"
              >
                Submit Interest
              </Button>
            </form>
          </SectionReveal>
        </div>
      </section>

      <ScrollDivider />

      {/* Meeting Schedule & Contact */}
      <section className="py-20 sm:py-28 bg-sand/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Meeting Schedule */}
            <SectionReveal direction="left">
              <div className="bg-white rounded-2xl p-8 border border-gold/15 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-charcoal">
                    Meeting Schedule
                  </h2>
                </div>

                <div className="space-y-4">
                  {meetings.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl bg-sand/50 border border-gold/10"
                    >
                      <h3 className="font-body font-semibold text-charcoal mb-1">
                        {m.label}
                      </h3>
                      <p className="font-body text-terracotta font-medium text-sm">
                        {m.schedule}
                      </p>
                      <p className="font-body text-charcoal/50 text-sm flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {m.location}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="font-body text-charcoal/40 text-sm mt-6">
                  Check back for updated meeting times. We post updates on our
                  events page and via email.
                </p>
              </div>
            </SectionReveal>

            {/* Contact Info */}
            <SectionReveal direction="right">
              <div className="bg-white rounded-2xl p-8 border border-gold/15 shadow-sm h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-terracotta/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-terracotta" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-charcoal">
                    Contact Us
                  </h2>
                </div>

                <div className="space-y-6">
                  <a
                    href="mailto:info.1888society@gmail.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-terracotta/5 flex items-center justify-center flex-shrink-0 group-hover:bg-terracotta/10 transition-colors">
                      <Mail className="w-5 h-5 text-terracotta" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-charcoal/50 mb-0.5">Email</p>
                      <p className="font-body text-charcoal font-medium group-hover:text-terracotta transition-colors">
                        info.1888society@gmail.com
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-terracotta/5 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-terracotta" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-charcoal/50 mb-0.5">Location</p>
                      <p className="font-body text-charcoal font-medium">
                        Prescott, Arizona
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-terracotta/5 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-terracotta" />
                    </div>
                    <div>
                      <p className="font-body text-sm text-charcoal/50 mb-0.5">Phone</p>
                      <p className="font-body text-charcoal font-medium">
                        Coming soon
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
