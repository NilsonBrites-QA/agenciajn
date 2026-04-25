import Link from "next/link";

import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { label: "Servicos", href: "#servicos" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-border)]/70 bg-[var(--color-bg)]/85 backdrop-blur-xl">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label="Ir para pagina inicial da Agencia JN" className="inline-flex items-center gap-2">
          <span className="rounded-full bg-[var(--color-brand)] px-2.5 py-1 text-xs font-semibold tracking-widest text-white">AJN</span>
          <span className="font-[var(--font-geist)] text-lg font-bold tracking-tight">Agencia JN</span>
        </Link>

        <nav aria-label="Navegacao principal" className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-semibold text-[var(--color-ink-muted)] hover:text-[var(--color-ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/5511940825120?text=Ola%2C%20vim%20do%20site%20da%20Agencia%20JN%20e%20quero%20um%20orcamento."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir conversa no WhatsApp"
            className="hidden rounded-full bg-[var(--color-brand)] px-5 py-2.5 text-sm font-semibold text-white hover:scale-[1.02] hover:bg-[var(--color-brand-strong)] sm:inline-flex"
          >
            Falar no WhatsApp
          </a>
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
