import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--color-border)] py-10">
      <Container className="flex flex-col gap-4 text-sm text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Agencia JN. Crescimento digital com consistencia.</p>
        <p>Sites, SEO, redes sociais e design grafico para negocios B2B.</p>
      </Container>
    </footer>
  );
}
