import { SkeletonBlock } from "./SkeletonBlock";
import { Layout } from "@/components/layout/Layout";

/* ──────────────────────────────────────────────
   Shared hero skeleton (eyebrow + h1 + subtitle)
   ────────────────────────────────────────────── */
function HeroSkeleton({ wide = false }) {
  return (
    <section className="bg-gradient-hero pt-20 md:pt-28 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <SkeletonBlock className="h-3 w-20 rounded-full mb-6" />
        <SkeletonBlock className={`h-14 md:h-20 ${wide ? "w-full max-w-3xl" : "w-3/4 max-w-2xl"} rounded-2xl mb-4`} />
        <SkeletonBlock className="h-8 w-1/2 rounded-xl mb-6" />
        <SkeletonBlock className="h-5 w-full max-w-xl rounded-lg mb-2" />
        <SkeletonBlock className="h-5 w-3/4 max-w-lg rounded-lg mb-8" />
        <SkeletonBlock className="h-12 w-40 rounded-full" />
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────
   Card grid skeleton (n cards in a row)
   ────────────────────────────────────────────── */
function CardGridSkeleton({ count = 3, tall = false }) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${count} gap-5`}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={`skeleton-card ${tall ? "min-h-[360px]" : "min-h-[200px]"} rounded-3xl p-8 flex flex-col gap-4`}>
          <SkeletonBlock className="size-12 rounded-xl" />
          <SkeletonBlock className="h-3 w-12 rounded-full" />
          <SkeletonBlock className="h-5 w-3/4 rounded-lg" />
          <SkeletonBlock className="h-4 w-full rounded-md" />
          <SkeletonBlock className="h-4 w-5/6 rounded-md" />
        </div>
      ))}
    </div>
  );
}

/* ──────────────────────────────────────────────
   Section header skeleton
   ────────────────────────────────────────────── */
function SectionHeaderSkeleton() {
  return (
    <div className="mb-12">
      <SkeletonBlock className="h-3 w-16 rounded-full mb-4" />
      <SkeletonBlock className="h-10 w-2/3 rounded-xl mb-3" />
      <SkeletonBlock className="h-5 w-1/2 rounded-lg" />
    </div>
  );
}

/* ══════════════════════════════════════════════
   PAGE SKELETONS
   ══════════════════════════════════════════════ */

/** INDEX (Home) */
export function IndexSkeleton() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-32 md:pb-24">
          <SkeletonBlock className="h-3 w-52 rounded-full mb-8" />
          <SkeletonBlock className="h-20 md:h-28 w-full max-w-3xl rounded-2xl mb-4" />
          <SkeletonBlock className="h-12 w-2/3 rounded-xl mb-6" />
          <SkeletonBlock className="h-5 w-full max-w-xl rounded-lg mb-2" />
          <SkeletonBlock className="h-5 w-3/4 rounded-lg mb-10" />
          <SkeletonBlock className="h-12 w-40 rounded-full" />
        </div>
        {/* Hero image placeholder */}
        <div className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <SkeletonBlock className="w-full rounded-3xl aspect-[21/9]" />
          </div>
        </div>
      </section>

      {/* Service highlights */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={3} tall />
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
            {[0, 1, 2].map((i) => (
              <div key={i} className="bg-background p-10 flex flex-col gap-4">
                <SkeletonBlock className="size-6 rounded-full" />
                <SkeletonBlock className="h-5 w-1/2 rounded-lg" />
                <SkeletonBlock className="h-4 w-full rounded-md" />
                <SkeletonBlock className="h-4 w-4/5 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="skeleton-card rounded-3xl p-8 flex flex-col gap-4 min-h-[180px]">
                <SkeletonBlock className="size-10 rounded-xl" />
                <SkeletonBlock className="h-4 w-3/4 rounded-lg" />
                <SkeletonBlock className="h-3 w-full rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="skeleton-card rounded-3xl p-8 flex flex-col gap-4 min-h-[220px]">
                <SkeletonBlock className="h-4 w-24 rounded-full" />
                <SkeletonBlock className="h-4 w-full rounded-md" />
                <SkeletonBlock className="h-4 w-5/6 rounded-md" />
                <SkeletonBlock className="h-4 w-4/5 rounded-md" />
                <div className="mt-auto flex flex-col gap-2">
                  <SkeletonBlock className="h-3 w-28 rounded-md" />
                  <SkeletonBlock className="h-3 w-20 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/** PRODUCTS */
export function ProductsSkeleton() {
  return (
    <Layout>
      <section className="bg-gradient-hero pt-20 md:pt-28 pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <SkeletonBlock className="h-3 w-16 rounded-full mb-6" />
          <SkeletonBlock className="h-16 md:h-24 w-3/4 max-w-2xl rounded-2xl mb-4" />
          <SkeletonBlock className="h-5 w-full max-w-xl rounded-lg mb-2" />
          <SkeletonBlock className="h-5 w-2/3 rounded-lg" />
        </div>
        <div className="px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <SkeletonBlock className="w-full rounded-[2.5rem] aspect-[16/7]" />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="skeleton-card rounded-3xl flex flex-col min-h-[520px] overflow-hidden">
                <SkeletonBlock className="w-full h-64 rounded-none" />
                <div className="p-8 flex flex-col gap-4 flex-1">
                  <SkeletonBlock className="h-5 w-1/2 rounded-lg" />
                  <SkeletonBlock className="h-4 w-full rounded-md" />
                  <SkeletonBlock className="h-4 w-4/5 rounded-md" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {[0, 1, 2].map((i) => (
              <div key={i} className="skeleton-card rounded-3xl p-8 flex flex-col gap-3 min-h-[180px]">
                <SkeletonBlock className="h-3 w-16 rounded-full" />
                <SkeletonBlock className="h-5 w-2/3 rounded-lg" />
                <SkeletonBlock className="h-4 w-1/2 rounded-md" />
                <SkeletonBlock className="h-8 w-1/3 rounded-xl mt-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/** SERVICES */
export function ServicesSkeleton() {
  return (
    <Layout>
      <HeroSkeleton />
      {[0, 1, 2, 3].map((i) => (
        <section
          key={i}
          className={`py-20 md:py-28 ${i % 2 === 1 ? "bg-secondary/40 border-y border-border" : ""}`}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-baseline gap-6 mb-12">
              <SkeletonBlock className="h-4 w-8 rounded-md" />
              <div className="flex flex-col gap-3 flex-1">
                <SkeletonBlock className="h-8 w-1/2 rounded-xl" />
                <SkeletonBlock className="h-4 w-1/3 rounded-md" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[0, 1, 2, 3].map((j) => (
                <div key={j} className="skeleton-card rounded-3xl p-7 flex flex-col gap-4 min-h-[160px]">
                  <SkeletonBlock className="size-10 rounded-xl" />
                  <SkeletonBlock className="h-4 w-3/4 rounded-lg" />
                  <SkeletonBlock className="h-3 w-full rounded-md" />
                  <SkeletonBlock className="h-3 w-4/5 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
}

/** ENTERPRISE */
export function EnterpriseSkeleton() {
  return (
    <Layout>
      <section className="bg-gradient-hero pt-20 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-5">
            <SkeletonBlock className="h-3 w-20 rounded-full" />
            <SkeletonBlock className="h-16 md:h-20 w-full rounded-2xl" />
            <SkeletonBlock className="h-5 w-full max-w-sm rounded-lg" />
            <SkeletonBlock className="h-5 w-3/4 rounded-lg" />
            <SkeletonBlock className="h-12 w-48 rounded-full mt-4" />
          </div>
          <SkeletonBlock className="w-full rounded-3xl aspect-square md:h-[460px] md:aspect-auto" />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <CardGridSkeleton count={3} tall />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-5">
              <SkeletonBlock className="h-3 w-24 rounded-full" />
              <SkeletonBlock className="h-12 w-full rounded-xl" />
              <SkeletonBlock className="h-12 w-3/4 rounded-xl" />
              <SkeletonBlock className="h-5 w-full rounded-lg" />
              <SkeletonBlock className="h-5 w-5/6 rounded-lg" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-3 p-5 bg-background rounded-2xl border border-border">
                  <SkeletonBlock className="size-5 rounded-full shrink-0" />
                  <SkeletonBlock className="h-4 flex-1 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border rounded-3xl overflow-hidden">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-background p-8 md:p-10 flex flex-col gap-3">
                <SkeletonBlock className="h-10 w-24 rounded-xl" />
                <SkeletonBlock className="h-3 w-20 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}

/** ABOUT */
export function AboutSkeleton() {
  return (
    <Layout>
      <section className="bg-gradient-hero pt-20 md:pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-5">
          <SkeletonBlock className="h-3 w-40 rounded-full" />
          <SkeletonBlock className="h-16 md:h-24 w-3/4 max-w-2xl rounded-2xl" />
          <SkeletonBlock className="h-5 w-full max-w-2xl rounded-lg" />
          <SkeletonBlock className="h-5 w-5/6 max-w-xl rounded-lg" />
          <SkeletonBlock className="h-5 w-4/6 max-w-lg rounded-lg" />
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <CardGridSkeleton count={3} tall />
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeaderSkeleton />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="skeleton-card rounded-3xl p-8 flex flex-col gap-4 min-h-[200px]">
                <div className="flex items-center gap-3">
                  <SkeletonBlock className="size-10 rounded-xl" />
                  <SkeletonBlock className="size-5 rounded-md" />
                </div>
                <SkeletonBlock className="h-5 w-2/3 rounded-lg" />
                <SkeletonBlock className="h-4 w-full rounded-md" />
                <SkeletonBlock className="h-4 w-4/5 rounded-md" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="flex flex-col gap-4">
              <SkeletonBlock className="h-3 w-20 rounded-full" />
              <SkeletonBlock className="h-12 w-full rounded-xl" />
              <SkeletonBlock className="h-12 w-3/4 rounded-xl" />
            </div>
            <div className="flex flex-col gap-4">
              <SkeletonBlock className="h-5 w-full rounded-lg" />
              <SkeletonBlock className="h-5 w-5/6 rounded-lg" />
              <SkeletonBlock className="h-5 w-full rounded-lg" />
              <SkeletonBlock className="h-5 w-4/5 rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-secondary/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <SkeletonBlock className="h-3 w-20 rounded-full" />
          <SkeletonBlock className="h-10 w-64 rounded-xl" />
          <SkeletonBlock className="w-full rounded-3xl aspect-[16/7]" />
        </div>
      </section>
    </Layout>
  );
}

/** CONTACT */
export function ContactSkeleton() {
  return (
    <Layout>
      <section className="bg-gradient-hero pt-20 md:pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-5">
          <SkeletonBlock className="h-3 w-16 rounded-full" />
          <SkeletonBlock className="h-16 md:h-24 w-3/4 max-w-2xl rounded-2xl" />
          <SkeletonBlock className="h-5 w-full max-w-xl rounded-lg" />
          <SkeletonBlock className="h-5 w-2/3 rounded-lg" />
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8">
          {/* Contact info cards */}
          <div className="md:col-span-2 space-y-4">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="skeleton-card rounded-3xl p-6 flex items-start gap-4 min-h-[100px]">
                <SkeletonBlock className="size-10 rounded-xl shrink-0" />
                <div className="flex flex-col gap-3 flex-1">
                  <SkeletonBlock className="h-3 w-12 rounded-full" />
                  <SkeletonBlock className="h-4 w-3/4 rounded-md" />
                  <SkeletonBlock className="h-4 w-1/2 rounded-md" />
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="md:col-span-3 skeleton-card rounded-3xl p-8 md:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <SkeletonBlock className="h-7 w-48 rounded-lg" />
              <SkeletonBlock className="h-4 w-64 rounded-md" />
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <SkeletonBlock className="h-3 w-12 rounded-md" />
                <SkeletonBlock className="h-12 w-full rounded-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <SkeletonBlock className="h-3 w-12 rounded-md" />
                <SkeletonBlock className="h-12 w-full rounded-xl" />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <SkeletonBlock className="h-3 w-12 rounded-md" />
                <SkeletonBlock className="h-12 w-full rounded-xl" />
              </div>
              <div className="flex flex-col gap-2">
                <SkeletonBlock className="h-3 w-14 rounded-md" />
                <SkeletonBlock className="h-12 w-full rounded-xl" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <SkeletonBlock className="h-3 w-16 rounded-md" />
              <SkeletonBlock className="h-32 w-full rounded-xl" />
            </div>
            <SkeletonBlock className="h-12 w-40 rounded-full" />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <SkeletonBlock className="w-full rounded-3xl h-[400px]" />
        </div>
      </section>
    </Layout>
  );
}
