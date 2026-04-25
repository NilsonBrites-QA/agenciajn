// Uses client rendering para animações de entrada com Framer Motion.
"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

const services = [
  {
    num: "01",
    title: "Criação de Sites",
    description:
      "Experiências orientadas a conversão, com navegação clara e desempenho premium em todos os dispositivos.",
    tags: ["Next.js", "Performance", "Acessibilidade"],
  },
  {
    num: "02",
    title: "SEO Estratégico",
    description:
      "Camada técnica e editorial que aumenta visibilidade, autoridade e oportunidades de venda no Google.",
    tags: ["Técnico", "Conteúdo", "Core Web Vitals"],
  },
  {
    num: "03",
    title: "Redes Sociais",
    description:
      "Calendário e posicionamento para fortalecer marca, gerar demanda e manter consistência na comunicação.",
    tags: ["Instagram", "LinkedIn", "Planejamento"],
  },
  {
    num: "04",
    title: "Design Gráfico",
    description:
      "Sistemas visuais com identidade forte para destacar seu negócio em todos os pontos de contato.",
    tags: ["Identidade Visual", "UI/UX", "Materiais"],
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 sm:py-32" style={{ background: "var(--color-bg-alt)" }}>
      <Container>
        {/* Cabeçalho editorial */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]">
              Serviços
            </p>
            <h2 className="mt-4 font-[var(--font-geist)] text-3xl font-extrabold tracking-tight text-[var(--color-ink)] sm:text-4xl">
              Entrega criativa com estrutura para escalar.
            </h2>
          </div>
          <p className="max-w-sm text-[var(--color-ink-muted)] sm:text-right">
            Cada frente combina estratégia, execução e acompanhamento.
          </p>
        </div>

        {/* Lista editorial numerada */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 divide-y divide-[var(--color-border)]"
        >
          {services.map((service) => (
            <motion.article
              key={service.num}
              variants={fadeUp}
              className="group flex flex-col gap-4 py-8 sm:flex-row sm:items-start sm:gap-12"
            >
              {/* Número */}
              <span className="font-[var(--font-geist)] text-sm font-bold tabular-nums text-[var(--color-ink-faint)] group-hover:text-[var(--color-brand)] transition-colors sm:w-10 sm:shrink-0 sm:pt-1">
                {service.num}
              </span>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="font-[var(--font-geist)] text-xl font-bold tracking-tight text-[var(--color-ink)] group-hover:text-[var(--color-brand)] transition-colors">
                  {service.title}
                </h3>
                <p className="mt-2 text-[var(--color-ink-muted)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 sm:w-64 sm:shrink-0 sm:justify-end">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-[var(--color-border)] px-2.5 py-1 text-xs font-medium text-[var(--color-ink-muted)]"
                    style={{ background: "var(--color-surface)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
