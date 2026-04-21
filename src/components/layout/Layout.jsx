import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppButton } from "./WhatsAppButton";

export const Layout = ({ children }) => {
  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <Header />
      <main className="flex-1 pt-14">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
