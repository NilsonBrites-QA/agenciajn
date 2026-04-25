// Uses client rendering for entrance and hover animations with Framer Motion.
"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/ui/container";

export function HeroSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-10 lg:grid-cols-12"
        >
          <div className="space-y-8 lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand)]"
            >
              Estrategia Digital de Alta Conversao
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[var(--font-geist)] text-4xl font-extrabold leading-[1.02] tracking-tight text-[var(--color-ink)] sm:text-5xl lg:text-6xl"
            >
              Cresca com um site que transmite autoridade desde o primeiro segundo.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl text-lg leading-relaxed text-[var(--color-ink-muted)]"
            >
              Planejamos, desenhamos e evoluimos experiencias digitais para gerar leads qualificados em criacao de sites,
              SEO, redes sociais e design grafico.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contato"
                aria-label="Ir para formulario de contato"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-base font-semibold text-white hover:scale-[1.02] hover:bg-[var(--color-brand-strong)]"
              >
                Solicitar proposta
              </a>
              <a
                href="#servicos"
                aria-label="Ir para secao de servicos"
                className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3.5 text-base font-semibold text-[var(--color-ink)] hover:scale-[1.02] hover:border-[var(--color-brand)]"
              >
                Conhecer servicos
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="surface-card relative overflow-hidden p-7 sm:p-9">
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[var(--color-brand)]/20 blur-2xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">Impacto comprovado</p>
              <div className="mt-7 grid gap-6 sm:grid-cols-2">
                <article>
                  <p className="font-[var(--font-geist)] text-4xl font-bold">+240%</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">Crescimento medio em leads apos reposicionamento digital</p>
                </article>
                <article>
                  <p className="font-[var(--font-geist)] text-4xl font-bold">1.2s</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">Meta de FCP mobile para paginas publicas</p>
                </article>
                <article>
                  <p className="font-[var(--font-geist)] text-4xl font-bold">100%</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">Projetos planejados para performance e SEO tecnico</p>
                </article>
                <article>
                  <p className="font-[var(--font-geist)] text-4xl font-bold">4x</p>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">Mais eficiencia no time comercial com fluxos digitais</p>
                </article>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
