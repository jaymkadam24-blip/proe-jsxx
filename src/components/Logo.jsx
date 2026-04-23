import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

/**
 * ProE brand logo — Image-based implementation using the official brand asset.
 */
export const Logo = ({
  className = "",
  asLink = true,
}) => {
  const logo = (
    <img
      src={logoImage}
      alt="ProE — Prowess Enterprises"
      className={`h-10 w-auto object-contain ${className}`}
    />
  );

  if (!asLink) return logo;

  return (
    <Link to="/" aria-label="ProE home" className="inline-flex items-center">
      {logo}
    </Link>
  );
};


