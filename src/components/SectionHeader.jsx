import { Link } from "react-router-dom";

export const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  align = "left",
  ctaLabel,
  ctaHref,
}) => {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  return (
    <div className={`flex flex-col md:flex-row ${align === "center" ? "items-center" : "md:items-end md:justify-between"} gap-6 mb-14`}>
      <div className={`max-w-2xl ${alignClass}`}>
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance leading-[1.05]">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed text-pretty">
            {subtitle}
          </p>
        )}
      </div>
      {ctaLabel && ctaHref && (
        <Link
          to={ctaHref}
          className="text-[13px] font-medium text-brand-blue flex items-center gap-2 group whitespace-nowrap"
        >
          {ctaLabel}
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      )}
    </div>
  );
};
