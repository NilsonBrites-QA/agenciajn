// Uses client rendering for card reveal and hover motion.
"use client";

import { motion } from "framer-motion";
import { Brush, Search, Smartphone, TrendingUp } from "lucide-react";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const services = [
  {
    icon: Smartphone,
    title: "Criacao de Sites",
    description: "Experiencias orientadas a conversao, com navegacao clara e desempenho premium em todos os dispositivos.",
  },
  {
    icon: Search,
    title: "SEO Estrategico",
    description: "Camada tecnica e editorial para aumentar visibilidade, autoridade e oportunidades de venda no Google.",
  },
  {
    icon: TrendingUp,
    title: "Redes Sociais",
    description: "Calendario e posicionamento para fortalecer marca, gerar demanda e manter consistencia na comunicacao.",
  },
  {
    icon: Brush,
    title: "Design Grafico",
    description: "Sistemas visuais com identidade forte para destacar seu negocio em pontos de contato online e offline.",
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Servicos"
          title="Entrega criativa com estrutura para escalar seu crescimento."
          description="Cada frente combina estrategia, execucao e acompanhamento para transformar visitas em oportunidades comerciais reais."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-12 grid gap-5 md:grid-cols-2"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="surface-card p-7"
            >
              <div className="inline-flex rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-3 text-[var(--color-brand)]">
                <service.icon size={22} aria-hidden="true" />
              </div>
              <h3 className="mt-5 font-[var(--font-geist)] text-2xl font-bold tracking-tight text-[var(--color-ink)]">{service.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--color-ink-muted)]">{service.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
