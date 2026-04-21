import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  service: z.string().trim().max(100).optional(),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      service: String(fd.get("service") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    
    const { error: supabaseError } = await supabase.functions.invoke('submit-contact', {
      body: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message
      }
    });

    setSubmitting(false);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      toast.error("Failed to submit request. Please try again.");
      return;
    }

    toast.success("Thanks! We'll get back to you within an hour.");
    e.target.reset();
  };

  const phone = "919004827080";

  return (
    <Layout>
      <SEO
        title="Contact ProE — Request a Service"
        description="Get in touch with ProE in Mahim, Mumbai for Apple repair, IT services and enterprise infrastructure. Call, email, WhatsApp or visit us."
        path="/contact"
      />

      <section className="bg-gradient-hero pt-20 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 animate-fade-in">
          <p className="eyebrow mb-5">Contact</p>
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter leading-[0.95] max-w-4xl text-balance">
            Let's talk about <span className="text-muted-foreground">your IT.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Open Monday to Saturday, 10:00 am – 7:30 pm. For urgent issues, call us or chat on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-4">
            <a href="tel:+919004827080" className="card-precision p-6 flex items-start gap-4 block bg-primary text-primary-foreground">
              <div className="size-10 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                <Phone className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="eyebrow text-primary-foreground/60 mb-1">Call</p>
                <p className="font-medium">+91 9004 827 080</p>
                <p className="font-medium">+91 8828 137 080</p>
                <p className="text-sm text-primary-foreground/80 mt-1">Mon–Sat · 10:00 am – 7:30 pm</p>
              </div>
            </a>

            <a href="mailto:support@proe.co.in" className="card-precision p-6 flex items-start gap-4 block bg-primary text-primary-foreground">
              <div className="size-10 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                <Mail className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="eyebrow text-primary-foreground/60 mb-1">Email</p>
                <p className="font-medium">support@proe.co.in</p>
                <p className="font-medium">himanshu@proe.co.in</p>
              </div>
            </a>

            <a
              href={`https://wa.me/${phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-precision p-6 flex items-start gap-4 block bg-primary text-primary-foreground"
            >
              <div className="size-10 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                <MessageCircle className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="eyebrow text-primary-foreground/60 mb-1">WhatsApp</p>
                <p className="font-medium">Chat with us</p>
                <p className="text-sm text-primary-foreground/80 mt-1">Quickest response</p>
              </div>
            </a>

            <div className="card-precision p-6 flex items-start gap-4 bg-primary text-primary-foreground">
              <div className="size-10 rounded-xl bg-background/20 flex items-center justify-center shrink-0">
                <MapPin className="size-5 text-primary-foreground" />
              </div>
              <div>
                <p className="eyebrow text-primary-foreground/60 mb-1">Visit</p>
                <p className="font-medium">ProE · Prowesses Enterprises</p>
                <p className="text-sm text-primary-foreground/80 mt-1">003, Ground Floor, National Storage Building, Near J&J House, SB Marg, Mahim West, Mumbai, Maharashtra 400016</p>
              </div>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-3 card-precision p-8 md:p-10 space-y-5 bg-primary text-primary-foreground">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight">Request a service</h2>
              <p className="text-primary-foreground/70 mt-1 text-sm">Tell us what you need. We'll handle the rest.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-2 block">Name</label>
                <input
                  name="name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-primary-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-background/30 focus:border-background transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-2 block">Email</label>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={255}
                  className="w-full px-4 py-3 rounded-xl border border-primary-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-background/30 focus:border-background transition-all"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium mb-2 block">Phone</label>
                <input
                  name="phone"
                  required
                  maxLength={20}
                  className="w-full px-4 py-3 rounded-xl border border-primary-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-background/30 focus:border-background transition-all"
                  placeholder="+91 …"
                />
              </div>
              <div>
                <label className="text-xs font-medium mb-2 block">Service</label>
                <select
                  name="service"
                  className="w-full px-4 py-3 rounded-xl border border-primary-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-background/30 focus:border-background transition-all"
                >
                  <option value="">Select…</option>
                  <option>Apple device repair</option>
                  <option>AMC contract</option>
                  <option>Server / data center</option>
                  <option>Networking & security</option>
                  <option>Buy products</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs font-medium mb-2 block">Message</label>
              <textarea
                name="message"
                required
                maxLength={1000}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-primary-foreground/20 bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-background/30 focus:border-background transition-all resize-none"
                placeholder="Tell us briefly what you need…"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-7 py-3.5 bg-background text-foreground rounded-full font-medium inline-flex items-center gap-2 hover:scale-[1.02] transition-transform disabled:opacity-60"
            >
              {submitting ? "Sending…" : (<>Send request <Send className="size-4" /></>)}
            </button>
          </form>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl overflow-hidden border border-border h-[400px]">
            <iframe
              title="ProE office location"
              src="https://www.google.com/maps?q=National+Storage+Building+SB+Marg+Mahim+West+Mumbai+400016&output=embed"
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
