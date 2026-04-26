import { Link } from "react-router-dom";
import { Smartphone, Laptop, Monitor, BadgeCheck, ShieldCheck, RefreshCw, ArrowRight } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { SectionHeader } from "@/components/SectionHeader";
import productsImg from "@/assets/products-apple.jpg";
import { usePageLoader } from "@/hooks/usePageLoader";
import { ProductsSkeleton } from "@/components/skeletons/PageSkeletons";

import iphoneImg from "@/assets/product-iphone.jpg";
import macbookImg from "@/assets/product-macbook.jpg";
import imacImg from "@/assets/product-imac.jpg";

const products = [
  { icon: Smartphone, name: "iPhone", desc: "Latest iPhone models with full warranty and same-day setup.", tag: "Latest", image: iphoneImg },
  { icon: Laptop, name: "MacBook Pro & Air", desc: "Configured to your workflow, deployed pre-imaged.", tag: "Best Seller", image: macbookImg },
  { icon: Monitor, name: "iMac & Mac mini", desc: "Desktop power for studios, agencies, and pro users.", tag: "Pro", image: imacImg },
];

const refurbished = [
  { name: "Refurbished MacBook Pro", spec: "M-series · 16GB · 512GB", price: "From ₹89,000" },
  { name: "Refurbished iMac", spec: "24-inch · M-series", price: "From ₹1,12,000" },
  { name: "Refurbished iPhone", spec: "Excellent condition", price: "From ₹39,000" },
];

const guarantees = [
  { icon: BadgeCheck, title: "Quality assured", desc: "Every device passes a 40-point inspection before sale." },
  { icon: ShieldCheck, title: "Warranty included", desc: "6-month minimum warranty on all refurbished hardware." },
  { icon: RefreshCw, title: "Easy upgrades", desc: "Trade in your old device for credit toward your next." },
];

const Products = () => {
  const loading = usePageLoader(700);
  if (loading) return <ProductsSkeleton />;
  return (
    <Layout>
      <SEO
        title="Apple Products & Refurbished Devices — ProE"
        description="Buy iPhone, MacBook, iMac, and certified refurbished Apple devices from ProE. Quality assured, warranty included."
        path="/products"
      />

      <section className="bg-gradient-hero pt-20 md:pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 animate-fade-in">
          <p className="eyebrow mb-4 md:mb-5">Products</p>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold tracking-tighter leading-[1] md:leading-[0.95] max-w-4xl text-balance">
            Apple, made <span className="text-muted-foreground">accessible.</span>
          </h1>
          <p className="mt-4 md:mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            New, refurbished, and rented — find the right Apple hardware for your team without compromising on quality.
          </p>
        </div>
        <div className="px-4 sm:px-6 mt-10 md:mt-12">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-white border border-border shadow-sm">
              <img src={productsImg} alt="Apple products lineup" width={1400} height={900} loading="eager" className="w-full h-auto object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="New devices" title="The Apple lineup, professionally deployed." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {products.map(({ icon: IconComponent, name, desc, tag, image }) => (
              <div key={name} className="card-precision p-0 flex flex-col min-h-[420px] md:min-h-[520px] bg-primary text-primary-foreground overflow-hidden">
                <div className="p-3 md:p-4 flex-1 flex flex-col">
                  <div className="relative h-48 md:h-64 bg-background/10 rounded-[1.5rem] md:rounded-[2.5rem] p-5 md:p-8 flex items-end justify-center group overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="max-h-[90%] w-auto object-contain transition-transform duration-500 group-hover:scale-110 translate-y-4 rounded-[1.5rem] md:rounded-[2rem]"
                    />
                    <div className="absolute top-4 md:top-6 left-4 md:left-6 size-9 md:size-10 rounded-xl bg-background/20 flex items-center justify-center">
                      <IconComponent className="size-4 md:size-5 text-primary-foreground" />
                    </div>
                    <span className="absolute top-4 md:top-6 right-4 md:right-6 text-[10px] font-bold uppercase tracking-widest text-primary-foreground bg-background/20 px-2.5 py-1 rounded-full">{tag}</span>
                  </div>
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col flex-1">
                    <h3 className="text-base md:text-xl font-semibold mb-2 md:mb-3">{name}</h3>
                    <p className="text-primary-foreground/80 leading-relaxed mb-auto text-xs md:text-sm">{desc}</p>
                    <Link to="/contact" className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-primary-foreground/20 text-[13px] font-medium flex items-center justify-between">
                      Inquire <ArrowRight className="size-4 text-primary-foreground" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader eyebrow="Refurbished" title="Premium quality. Honest prices." subtitle="Certified refurbished Apple devices, restored to factory standards by our in-house engineers." />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mb-12 md:mb-16">
            {refurbished.map((r) => (
              <div key={r.name} className="card-precision p-6 md:p-8 bg-primary text-primary-foreground">
                <p className="eyebrow text-primary-foreground/60 mb-3">Certified</p>
                <h3 className="text-base md:text-lg font-semibold mb-1">{r.name}</h3>
                <p className="text-sm text-primary-foreground/80 mb-4 md:mb-6">{r.spec}</p>
                <p className="text-xl md:text-2xl font-semibold tracking-tight">{r.price}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {guarantees.map(({ icon: IconComponent, title, desc }) => (
              <div key={title} className="flex gap-4">
                <div className="size-10 rounded-xl bg-background border border-border flex items-center justify-center shrink-0">
                  <IconComponent className="size-5 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
