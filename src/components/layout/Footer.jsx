import { Link } from "react-router-dom";
import { Logo } from "@/components/Logo";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        {/* On mobile: brand takes full row, then 2 nav columns below */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          <div className="col-span-2 md:col-span-2">
            <Logo className="h-8 md:h-9 mb-4" asLink={false} />
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed italic">
              Rising to new horizons.
            </p>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed mt-2">
              From device repair to full-scale IT infrastructure — ProE handles everything.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-3 md:mb-4">Explore</p>
            <ul className="space-y-2 md:space-y-2.5 text-sm">
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Services</Link></li>
              <li><Link to="/products" className="hover:text-brand-blue transition-colors">Products</Link></li>
              <li><Link to="/enterprise" className="hover:text-brand-blue transition-colors">Enterprise</Link></li>
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow mb-3 md:mb-4">Connect</p>
            <ul className="space-y-2 md:space-y-2.5 text-sm">
              <li><a href="tel:+919004827080" className="hover:text-brand-blue transition-colors">+91 9004 827 080</a></li>
              <li><a href="tel:+918828137080" className="hover:text-brand-blue transition-colors">+91 8828 137 080</a></li>
              <li><a href="mailto:support@proe.co.in" className="hover:text-brand-blue transition-colors break-all">support@proe.co.in</a></li>
              <li><Link to="/contact" className="hover:text-brand-blue transition-colors">Contact us</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-12 pt-6 md:pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 md:gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Prowesses Enterprises (ProE). All rights reserved.</p>
          <p className="text-xs text-muted-foreground text-mono tracking-widest">RISING_TO_NEW_HORIZONS · SINCE_2018</p>
        </div>
      </div>
    </footer>
  );
};
