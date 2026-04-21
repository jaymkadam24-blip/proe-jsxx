import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phone = "919004827080";
  const message = encodeURIComponent("Hi ProE, I'd like to know more about your IT and Apple services.");
  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-[hsl(142_70%_45%)] text-white shadow-precision flex items-center justify-center hover:scale-110 transition-transform animate-pulse-soft"
    >
      <MessageCircle className="size-6" fill="currentColor" />
    </a>
  );
};
