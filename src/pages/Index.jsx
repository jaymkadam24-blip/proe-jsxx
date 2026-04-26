import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Server, Shield, Wrench, Network, HardDrive, Star, CheckCircle2, Smartphone } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeader } from "@/components/SectionHeader";
import heroImg from "@/assets/hero-infrastructure.jpg";
import { usePageLoader } from "@/hooks/usePageLoader";
import { IndexSkeleton } from "@/components/skeletons/PageSkeletons";

const services = [
  { icon: Smartphone, no: "01", title: "Apple Device Services", desc: "Expert repair and AMC for iPhone, MacBook, iMac and the entire Apple ecosystem." },
  { icon: Server, no: "02", title: "IT & Infrastructure", desc: "End-to-end server, storage, UPS and data center room setup engineered for uptime." },
  { icon: Network, no: "03", title: "Networking & Security", desc: "Firewall, switching, routing, wireless and active/passive network design." },
];

const whyUs = [
  { title: "Certified experts", desc: "Apple-trained engineers and certified network architects on every project." },
  { title: "Fast service", desc: "Same-day response for critical incidents. SLA-backed turnaround on repairs." },
  { title: "End-to-end solutions", desc: "From a single iPhone screen to a full data center — one trusted partner." },
];

const featured = [
  { icon: Wrench, title: "Apple & Laptop Repair", desc: "Component-level repair with genuine parts." },
  { icon: HardDrive, title: "Data Backup & Recovery", desc: "Automated backups and emergency recovery." },
  { icon: Shield, title: "Firewall & Security", desc: "Enterprise-grade perimeter protection." },
  { icon: Server, title: "Server Room Setup", desc: "Racks, cooling, cabling — turnkey." },
];

const testimonials = [
  { name: "Shivani Meher", role: "iPhone repair customer", quote: "I had my iPhone's back glass repaired at ProE and I am extremely satisfied. They restored it to original condition flawlessly. The service was impressively quick and the staff was very supportive throughout." },
  { name: "Atharva Pardeshi", role: "Apple ecosystem user", quote: "A fantastic organization! Great customer support from beginning to end. The team are really knowledgeable and go the extra mile. Highly recommended for Apple ecosystem users." },
  { name: "Trusted since 2018", role: "40+ years combined experience", quote: "From a single iPhone screen to a full data centre — ProE's in-house team delivers genuine parts, certified diagnosis, and a solid warranty for peace of mind." },
];

const Index = () => {
  const loading = usePageLoader(700);
  if (loading) return <IndexSkeleton />;
  return (
    <Layout>
      <SEO
        title="ProE — Complete IT & Apple Solutions Under One Roof"
        description="Advanced IT services, Apple device repair, enterprise infrastructure and managed networking. Certified experts. Fast service. End-to-end solutions."
        path="/"
      />

      {/* HERO */}
      <section className="bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-20 pb-12 md:pt-32 md:pb-24">
          <div className="max-w-[860px] animate-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-[11px] sm:text-[12px] font-medium mb-6 md:mb-8">
              <span className="size-1.5 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-muted-foreground tracking-wide uppercase">Prowesses Enterprises · Trusted since 2018</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tighter leading-[1] md:leading-[0.95] mb-6 md:mb-8 text-balance">
              Rising to new horizons.{" "}
              <span className="text-muted-foreground">Complete IT & Apple solutions under one roof.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-[620px] leading-relaxed mb-8 md:mb-10 text-pretty">
              Certified Apple device repair, enterprise infrastructure, and managed networking — delivered by an in-house team with 40+ years of combined experience.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-6 sm:px-7 py-3 sm:py-3.5 bg-primary text-primary-foreground rounded-full font-medium text-sm sm:text-base hover:scale-[1.02] transition-transform inline-flex items-center gap-2"
              >
                Book a Service <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Visual Anchor */}
        <div className="px-4 sm:px-6 pb-12 md:pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#f2f2f2] aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] shadow-glass border border-border">
              <img
                src={heroImg}
                alt="ProE Apple device ecosystem and IT solutions"
                width={1600}
                height={900}
                className="w-full h-full object-contain p-3 sm:p-6 md:p-12"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 right-4 sm:right-6 md:right-10 flex justify-between items-end">
                <div className="flex gap-6 sm:gap-10 md:gap-20">
                  <div>
                    <p className="eyebrow mb-1">Uptime</p>
                    <p className="text-base sm:text-xl md:text-2xl font-medium tabular-nums">99.99%</p>
                  </div>
                  <div>
                    <p className="eyebrow mb-1">Response</p>
                    <p className="text-base sm:text-xl md:text-2xl font-medium tabular-nums">&lt; 1hr</p>
                  </div>
                </div>
                <div className="hidden md:block text-[11px] text-muted-foreground text-mono tracking-tighter">
                  REF_ID: 0092-A // SYSTEM_ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="What we do"
            title="Engineered for clarity. Built for performance."
            subtitle="We treat your digital environment with the same precision of a high-end timepiece — every component matters."
            ctaLabel="Explore all services"
            ctaHref="/services"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {services.map(({ icon: IconComponent, no, title, desc }) => (
              <Link
                key={no}
                to={`/services#service-${no}`}
                className="card-precision p-7 md:p-10 flex flex-col min-h-[280px] md:min-h-[360px] bg-primary text-primary-foreground outline-none"
              >
                <div className="size-10 md:size-12 rounded-xl bg-background/20 mb-6 md:mb-8 flex items-center justify-center">
                  <IconComponent className="size-5 text-primary-foreground" />
                </div>
                <p className="eyebrow text-primary-foreground/60 mb-3">{no}</p>
                <h3 className="text-lg md:text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm md:text-base text-primary-foreground/80 leading-relaxed mb-auto">{desc}</p>
                <div className="mt-6 md:mt-8 pt-5 md:pt-6 border-t border-primary-foreground/20 text-[13px] font-medium flex items-center justify-between group">
                  <span>Learn more</span>
                  <ArrowRight className="size-4 text-primary-foreground transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Why ProE" title="The dependable choice for businesses that can't afford downtime." />
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border border border-border rounded-3xl overflow-hidden">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-background p-7 md:p-10">
                <CheckCircle2 className="size-6 text-brand-blue mb-4 md:mb-6" />
                <h3 className="text-base md:text-lg font-semibold mb-2">{w.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Featured" title="Services in demand" ctaLabel="See all" ctaHref="/services" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
            {featured.map(({ icon: IconComponent, title, desc }) => (
              <div key={title} className="card-precision p-5 sm:p-6 md:p-8 bg-primary text-primary-foreground">
                <div className="size-9 md:size-10 rounded-xl bg-background/20 mb-4 md:mb-6 flex items-center justify-center w-fit">
                  <IconComponent className="size-4 md:size-5 text-primary-foreground" />
                </div>
                <h3 className="text-sm md:text-base font-semibold mb-1.5 md:mb-2">{title}</h3>
                <p className="text-xs md:text-sm text-primary-foreground/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 md:py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Trusted by" title="Teams that demand reliability." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-precision p-6 md:p-8 flex flex-col">
                <div className="flex gap-1 mb-4 md:mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-4 fill-brand-blue text-brand-blue" />
                  ))}
                </div>
                <blockquote className="text-sm md:text-base leading-relaxed text-foreground/90 mb-5 md:mb-6 flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl md:rounded-3xl bg-primary text-primary-foreground p-7 sm:p-10 md:p-16 lg:p-20 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <p className="eyebrow text-primary-foreground/60 mb-4 md:mb-5">One partner. Every problem.</p>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold tracking-tight leading-[1.1] md:leading-[1.05] mb-4 md:mb-6 text-balance">
                From device repair to full-scale IT infrastructure — ProE handles everything.
              </h2>
              <p className="text-primary-foreground/70 text-base md:text-lg mb-7 md:mb-10 leading-relaxed max-w-xl">
                Talk to our team about your next deployment, repair, or support contract.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+919004827080"
                  className="px-5 sm:px-7 py-3 sm:py-3.5 bg-background text-foreground rounded-full font-medium text-sm sm:text-base hover:scale-[1.02] transition-transform inline-flex items-center gap-2"
                >
                  Call +91 9004 827 080 <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 size-[300px] md:size-[400px] rounded-full bg-brand-blue/20 blur-3xl" />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
