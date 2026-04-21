import { Link } from "react-router-dom";

/**
 * ProE brand logo — recreated from the official brand book.
 * "PRO" wordmark + amber lowercase "e" with registered trademark.
 */
export const Logo = ({ variant = "dark", className = "", asLink = true }) => {
  const proColor = variant === "light" ? "#FFFFFF" : "hsl(var(--foreground))";
  const eColor = "#FAA71D";

  const svg = (
    <svg
      viewBox="0 0 220 80"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-8 w-auto ${className}`}
      role="img"
      aria-label="ProE — Rising to new horizons"
    >
      <text
        x="0"
        y="60"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="68"
        letterSpacing="-3"
        fill={proColor}
      >
        PRO
      </text>
      <text
        x="148"
        y="60"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="68"
        letterSpacing="-3"
        fill={eColor}
      >
        e
      </text>
      <text
        x="195"
        y="28"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="500"
        fontSize="14"
        fill={eColor}
      >
        ®
      </text>
    </svg>
  );

  if (!asLink) return svg;

  return (
    <Link to="/" aria-label="ProE home" className="inline-flex items-center">
      {svg}
    </Link>
  );
};
