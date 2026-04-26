import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/Logo";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/enterprise", label: "Enterprise" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 frosted-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Logo + desktop nav */}
        <div className="flex items-center gap-8">
          <Logo className="h-8 sm:h-9" />
          <nav className="hidden md:flex gap-6 text-[13px] font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative transition-colors hover:text-foreground py-2 ${
                    isActive ? "text-primary font-semibold" : "text-muted-foreground"
                  }`
                }
              >
                {item.label}
                {location.pathname === item.to && (
                  <span className="absolute -bottom-[1px] left-0 right-0 h-0.5 bg-primary rounded-full animate-in fade-in slide-in-from-bottom-1" />
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-[13px] font-medium px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book a Service
          </Link>
        </div>

        {/* Mobile: quick call + hamburger */}
        <div className="flex md:hidden items-center gap-1">
          <a
            href="tel:+919004827080"
            aria-label="Call ProE"
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Phone className="size-4" />
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="p-2 -mr-1 text-foreground"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="px-5 pt-4 pb-2 flex flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `py-3.5 text-base border-b border-border last:border-0 font-medium transition-colors ${
                    isActive ? "text-primary" : "text-muted-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            {/* Book a service CTA inside drawer */}
            <Link
              to="/contact"
              className="mt-4 mb-3 w-full text-center py-3 rounded-full bg-primary text-primary-foreground font-semibold text-sm"
            >
              Book a Service
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
