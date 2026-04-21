import { Link } from "react-router-dom";
import { Server, Network, ShieldCheck, Activity, Layers, ArrowRight, CheckCircle2 } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeader } from "@/components/SectionHeader";
import netImg from "@/assets/enterprise-network.jpg";

const pillars = [
  { icon: Server, title: "Data centers", desc: "Turnkey server room and data center build-outs with redundant power, cooling and monitoring." },
  { icon: Network, title: "Network architecture", desc: "Resilient, multi-vendor network design from edge to core — built to scale." },
  { icon: ShieldCheck, title: "Security solutions", desc: "Next-gen firewalls, endpoint protection, and zero-trust frameworks." },
];

const outcomes = [
  "Lower total cost of ownership",
  "99.99% measured uptime",
  "Faster deployment cycles",
  "Single point of accountability",
  "Predictable monthly OPEX",
  "Audit-ready compliance posture",
];

const Enterprise = () => {
  return (
    <Layout>
      <SEO
        title="Enterprise IT Solutions — ProE"
        description="Data centers, network architecture and enterprise security. ProE helps businesses scale with reliable, secure infrastructure."
        path="/enterprise"
      />

      <section className="bg-gradient-hero pt-20 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center animate-fade-in">
          <div>
            <p className="eyebrow mb-5">Enterprise</p>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tighter leading-[0.95] text-balance">
              Infrastructure that <span className="text-muted-foreground">scales with you.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">
              We architect, deploy and manage the systems that keep modern businesses running — quietly, reliably, and securely.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link to="/contact" className="px-7 py-3.5 bg-primary text-primary-foreground rounded-full font-medium inline-flex items-center gap-2">
                Talk to an architect <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-square md:aspect-auto md:h-[460px] bg-secondary">
            <img src={netImg} alt="Enterprise network architecture" width={1400} height={900} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader eyebrow="Three pillars" title="The foundation of your enterprise IT." />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {pillars.map(({ icon: IconComponent, title, desc }) => (
              <div key={title} className="card-precision p-10 bg-primary text-primary-foreground">
                <div className="size-12 rounded-xl bg-background/20 mb-8 flex items-center justify-center">
                  <IconComponent className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-5">How we help you scale</p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
                We remove the friction between your business and its technology.
              </h2>
              <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
                Most IT problems aren't technical — they're organizational. We bring clarity, governance, and a single point of accountability so your teams can focus on growth.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {outcomes.map((o) => (
                <div key={o} className="flex items-start gap-3 p-5 bg-background rounded-2xl border border-border">
                  <CheckCircle2 className="size-5 text-brand-blue shrink-0 mt-0.5" />
                  <span className="text-sm font-medium">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-3xl overflow-hidden">
            {[
              { k: "4,800+", v: "Managed endpoints" },
              { k: "12ms", v: "Avg. response latency" },
              { k: "142", v: "Active deployments" },
              { k: "ISO-27001", v: "Aligned" },
            ].map((s) => (
              <div key={s.v} className="bg-background p-8 md:p-10">
                <p className="text-3xl md:text-4xl font-semibold tracking-tighter mb-2 tabular-nums">{s.k}</p>
                <p className="eyebrow">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Enterprise;
