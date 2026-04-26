import { Link } from "react-router-dom";
import { Compass, Eye, Users, ArrowRight, Sparkles, ShieldCheck, HandshakeIcon, HeartHandshake } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import clientsImg from "@/assets/clients-grid.png";
import { usePageLoader } from "@/hooks/usePageLoader";
import { AboutSkeleton } from "@/components/skeletons/PageSkeletons";

const pillars = [
  { icon: Compass, title: "Mission", desc: "To provide quick diagnosis with genuine alternative parts that save your valuable time — delivered with a friendly approach. We think, we work and we grow  team." },
  { icon: Eye, title: "Vision", desc: "To be Mumbai's most trusted service provider for Apple products — delivering enhanced efficiency through economic, reliable solutions." },
  { icon: Users, title: "Team", desc: "An in-house team of certified, trained and experienced technicians with 40+ years of combined expertise across the Apple ecosystem and IT infrastructure." },
];

const aces = [
  { letter: "A", icon: Sparkles, title: "Adaptation", desc: "Embracing ideas that fuse creativity and technology — constantly adapting to the evolving needs of our customers and the tech industry." },
  { letter: "C", icon: ShieldCheck, title: "Confidence", desc: "A team of confident, experienced professionals who bring their expertise to every interaction, ensuring reliability and trust." },
  { letter: "E", icon: HandshakeIcon, title: "Entrust", desc: "We entrust passionate, trustworthy team members with responsibility — fostering a sense of ownership and commitment." },
  { letter: "S", icon: HeartHandshake, title: "Satisfaction", desc: "Customer satisfaction sits at the core of everything we do — driving us to understand needs and exceed expectations." },
];

const About = () => {
  const loading = usePageLoader(700);
  if (loading) return <AboutSkeleton />;
  return (
    <Layout>
      <SEO
        title="About ProE — Prowesses Enterprises | Trusted since 2018"
        description="ProE (Prowesses Enterprises) is Mumbai's trusted Apple and IT service partner since 2018. Certified team, genuine parts, 40+ years combined experience."
        path="/about"
      />

      <section className="bg-gradient-hero pt-20 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 animate-fade-in">
          <p className="eyebrow mb-5">About ProE · Prowesses Enterprises</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] max-w-4xl text-balance">
            Rising to <span className="text-brand-blue">new horizons.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed">
            Established on January 1, 2018, Prowesses Enterprises — known as ProE — provides comprehensive device repair services for Apple products, laptops and enterprise IT. With a dedicated in-house team boasting 40+ years of combined experience, ProE is synonymous with excellence in repairs, sales and customer satisfaction.
          </p>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
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
          <div className="mb-16 max-w-2xl">
            <p className="eyebrow mb-5">Our values · ACES</p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
              Four principles that shape every repair, every install, every call.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {aces.map(({ letter, icon: IconComponent, title, desc }) => (
              <div key={letter} className="card-precision p-8 bg-primary text-primary-foreground">
                <div className="flex items-center gap-3 mb-6">
                  <div className="size-10 rounded-xl bg-background/20 text-primary-foreground font-bold flex items-center justify-center text-lg">
                    {letter}
                  </div>
                  <IconComponent className="size-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="eyebrow mb-5">Our story</p>
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-balance">
                Since 2018, solving real tech problems in Mumbai.
              </h2>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
              <p>
                ProE stands out with a certified, trained, dedicated and trustworthy team — guaranteeing expert diagnosis and quick, quality repairs by seasoned product experts.
              </p>
              <p>
                Our commitment to reliability is reflected in genuine parts at a lower cost, coupled with a solid warranty for added peace of mind. From a single iPhone screen to a full data centre build-out — one trusted partner.
              </p>
              <p className="text-foreground font-medium">
                From device repair to full-scale IT infrastructure — ProE handles everything.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="eyebrow mb-5">Our legacy</p>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] mb-12">
            Trusted by industry leaders.
          </h2>
          <div className="rounded-3xl overflow-hidden border border-border bg-background p-8 md:p-12 shadow-glass">
            <img
              src={clientsImg}
              alt="ProE client portfolio - industry leading companies"
              width={1200}
              height={800}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-32 mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl bg-primary text-primary-foreground p-10 md:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
              Ready to work with a team that picks up the phone?
            </h2>
            <Link to="/contact" className="px-7 py-3.5 bg-background text-foreground rounded-full font-medium inline-flex items-center gap-2 whitespace-nowrap">
              Get in touch <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
