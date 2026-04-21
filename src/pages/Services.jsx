import { Link } from "react-router-dom";
import { Smartphone, Laptop, Repeat, Server, HardDrive, Cable, Power, Shield, Wifi, Network, Database, Printer, Camera, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeader } from "@/components/SectionHeader";

const categories = [
  {
    no: "01",
    title: "Device & Apple Services",
    desc: "Certified service for the Apple ecosystem and beyond.",
    items: [
      { icon: Smartphone, name: "Apple device repair", desc: "iPhone, MacBook, iMac — component-level diagnostics and repair." },
      { icon: Laptop, name: "Laptop repair", desc: "Windows and Mac laptop service with genuine spares." },
      { icon: Repeat, name: "AMC (Mac & Windows)", desc: "Annual maintenance contracts with priority response." },
      { icon: Laptop, name: "Mac renting", desc: "Short and long-term rental of MacBook and iMac fleets." },
    ],
  },
  {
    no: "02",
    title: "IT & Infrastructure",
    desc: "Foundational systems engineered for uptime.",
    items: [
      { icon: Server, name: "Server, storage & management", desc: "Procurement, deployment and managed services." },
      { icon: Database, name: "Data center / server room setup", desc: "Turnkey rooms with cooling, cabling and monitoring." },
      { icon: Power, name: "UPS & racks", desc: "Power protection and structured rack systems." },
      { icon: Cable, name: "KVM switches", desc: "Centralized control of multiple servers." },
    ],
  },
  {
    no: "03",
    title: "Networking & Security",
    desc: "Resilient networks with security baked in.",
    items: [
      { icon: Shield, name: "Firewall & network security", desc: "Next-gen firewalls and threat prevention." },
      { icon: Network, name: "Switching & routing", desc: "Enterprise switching, routing and SD-WAN." },
      { icon: Wifi, name: "Wireless networks", desc: "Site-survey-driven Wi-Fi 6/6E deployments." },
      { icon: Cable, name: "Active/passive design", desc: "Structured cabling and active layer architecture." },
    ],
  },
  {
    no: "04",
    title: "Other Solutions",
    desc: "Complete coverage across your IT estate.",
    items: [
      { icon: HardDrive, name: "Data backup & recovery", desc: "Automated backups with rapid recovery SLAs." },
      { icon: Printer, name: "Printer sales & repair", desc: "Multi-brand sales, service and consumables." },
      { icon: Camera, name: "CCTV / IP surveillance", desc: "Design, install and remote-view setup." },
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      <SEO
        title="IT & Apple Services — ProE"
        description="Apple device repair, AMC, server room setup, networking, firewalls, data backup, CCTV and more. End-to-end IT services from ProE."
        path="/services"
      />

      <section className="bg-gradient-hero pt-20 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 animate-fade-in">
          <p className="eyebrow mb-5">Services</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] max-w-4xl text-balance">
            Every IT service you need. <span className="text-muted-foreground">From one team.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Organized, transparent, and engineered for businesses that value reliability over jargon.
          </p>
        </div>
      </section>

      {categories.map((cat, idx) => (
        <section
          key={cat.no}
          id={`service-${cat.no}`}
          className={`py-20 md:py-28 scroll-mt-20 ${idx % 2 === 1 ? "bg-secondary/40 border-y border-border" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline gap-6 mb-12">
              <span className="text-mono text-sm text-brand-blue">{cat.no}</span>
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{cat.title}</h2>
                <p className="text-muted-foreground mt-2">{cat.desc}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {cat.items.map(({ icon: IconComponent, name, desc }) => (
                <div key={name} className="card-precision p-7 bg-primary text-primary-foreground">
                  <div className="size-10 rounded-xl bg-background/20 flex items-center justify-center mb-6">
                    <IconComponent className="size-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{name}</h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
                Not sure where to start? Tell us your problem.
              </h2>
              <p className="text-primary-foreground/70 mt-3">We'll respond within an hour with a clear plan.</p>
            </div>
            <Link to="/contact" className="px-7 py-3.5 bg-background text-foreground rounded-full font-medium inline-flex items-center gap-2 whitespace-nowrap">
              Request a Service <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
