// Uses client rendering para animações de entrada com Framer Motion.
"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

const stats = [
  { value: "+240%", label: "Crescimento médio em leads" },
  { value: "< 1.2s", label: "FCP mobile" },
  { value: "100", label: "Lighthouse SEO & A11y" },
  { value: "4×", label: "Eficiência comercial" },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Faixa de acento sutil no topo — editorial */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, var(--color-border) 30%, var(--color-border) 70%, transparent)" }}
      />

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid items-center gap-14 lg:grid-cols-12"
        >
          {/* Copy — 7 colunas */}
          <div className="space-y-8 lg:col-span-7">
            <motion.p
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]"
            >
              Estratégia Digital · Resultados Mensuráveis
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-[var(--font-geist)] text-4xl font-extrabold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-[3.4rem]"
            >
              Sites que geram{" "}
              <span
                className="relative inline-block"
                style={{ color: "var(--color-brand)" }}
              >
                autoridade
              </span>{" "}
              desde o primeiro segundo.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg leading-relaxed text-[var(--color-ink-muted)]"
            >
              Planejamos, desenhamos e evoluímos experiências digitais para gerar
              leads qualificados — sites, SEO, redes sociais e design gráfico.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                aria-label="Solicitar proposta — ir para o formulário de contato"
                className="inline-flex items-center justify-center rounded-lg bg-[var(--color-brand)] px-7 py-3.5 text-base font-semibold text-white hover:scale-[1.02] hover:bg-[var(--color-brand-strong)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-brand)]"
              >
                Solicitar proposta
              </a>
              <a
                href="#servicos"
                aria-label="Ver seção de serviços"
                className="inline-flex items-center justify-center rounded-lg border border-[var(--color-border)] px-7 py-3.5 text-base font-semibold text-[var(--color-ink)] hover:scale-[1.02] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]"
              >
                Ver serviços
              </a>
            </motion.div>
          </div>

          {/* Painel de métricas — 5 colunas */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <div
              className="rounded-2xl border border-[var(--color-border)] p-8"
              style={{ background: "var(--color-surface-raised)", boxShadow: "var(--shadow-sm)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">
                Impacto comprovado
              </p>

              <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
                {stats.map((stat, i) => (
                  <article key={stat.label} className={i < 2 ? "pb-6 border-b border-[var(--color-border-light)]" : ""}>
                    <p className="font-[var(--font-geist)] text-[2.2rem] font-bold leading-none text-[var(--color-ink)]">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-[var(--color-ink-muted)]">
                      {stat.label}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-6 border-t border-[var(--color-border-light)] pt-5">
                <p className="text-xs text-[var(--color-ink-faint)]">
                  Métricas consolidadas de projetos ativos — sites, SEO e tráfego.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

