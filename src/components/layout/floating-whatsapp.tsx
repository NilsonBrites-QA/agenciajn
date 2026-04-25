import { MessageCircleMore } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511940825120?text=Ola%2C%20vim%20do%20site%20da%20Agencia%20JN%20e%20quero%20falar%20sobre%20um%20projeto."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp da Agencia JN"
      className="fixed bottom-4 right-4 z-50 inline-flex items-center gap-2 rounded-full bg-[var(--color-brand)] px-4 py-3 text-sm font-semibold text-white shadow-[var(--shadow-elevated)] hover:scale-[1.02] hover:bg-[var(--color-brand-strong)] sm:bottom-6 sm:right-6"
    >
      <MessageCircleMore size={18} />
      WhatsApp
    </a>
  );
}
