import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 frosted-nav">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo className="h-9" />
          <nav className="hidden md:flex gap-7 text-[13px] font-medium">
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
                  <span className="absolute -bottom-[21px] left-1/2 -translate-x-1/2 size-1.5 bg-primary rounded-full" />
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="text-[13px] font-medium px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Book a Service
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `text-base py-1 ${isActive ? "text-primary font-bold underline underline-offset-4 decoration-2" : "text-muted-foreground"}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
