import { Container } from "@/components/ui/container";

const highlights = [
  { title: "Arquitetura orientada a SEO", value: "Core Web Vitals", text: "Estrutura tecnica para descoberta organica e indexacao consistente." },
  { title: "Execucao estrategica", value: "Roadmap por fases", text: "Entrega incremental sem remendos para acelerar conversao com qualidade." },
  { title: "Ecossistema Cloudflare", value: "Edge-first", text: "Baixa latencia, seguranca e operacao simplificada para crescer com previsibilidade." },
];

export function ProofSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <ul className="grid gap-5 md:grid-cols-3" aria-label="Diferenciais da Agencia JN">
          {highlights.map((item) => (
            <li key={item.title} className="surface-card p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">{item.value}</p>
              <h3 className="mt-3 font-[var(--font-geist)] text-2xl font-bold tracking-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{item.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
