import { ExternalLink } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const portfolioProjects = [
  { title: "IRPF Consultoria", url: "https://irpf.qaplay.com.br", context: "Posicionamento e conversao para consultoria fiscal" },
  { title: "Leste Barbearia", url: "https://lestebarbearia.agenciajn.com.br", context: "Reserva de horarios e reputacao local" },
  { title: "ContentStory", url: "https://www.contentstory.com.br", context: "Narrativa digital para servicos de conteudo" },
  { title: "QAPlay", url: "https://qaplay.com.br", context: "Escala de produto educacional com foco em clareza" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Projetos reais que mostram consistencia em estrategia, design e resultado."
          description="Uma selecao de trabalhos que traduzem posicionamento forte e execucao com foco em performance comercial."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {portfolioProjects.map((project) => (
            <article key={project.title} className="surface-card group p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.17em] text-[var(--color-brand)]">Projeto em destaque</p>
              <h3 className="mt-4 font-[var(--font-geist)] text-2xl font-bold tracking-tight">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-muted)]">{project.context}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir projeto ${project.title} em nova aba`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-ink)] hover:text-[var(--color-brand)]"
              >
                Ver projeto ao vivo
                <ExternalLink size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
              </a>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
