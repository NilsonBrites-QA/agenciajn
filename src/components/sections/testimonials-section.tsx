import { Container } from "@/components/ui/container";

const testimonials = [
  {
    quote: "O novo posicionamento trouxe clareza para nossa oferta e aumentou contatos qualificados de forma consistente.",
    author: "Gestao IRPF Consultoria",
  },
  {
    quote: "Finalmente temos um site que representa nossa marca e transforma visitas em pedidos de atendimento.",
    author: "Direcao Leste Barbearia",
  },
  {
    quote: "Design e estrategia caminharam juntos. O resultado foi mais autoridade e muito mais previsibilidade comercial.",
    author: "Time ContentStory",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div className="surface-card p-8 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.19em] text-[var(--color-brand)]">Credibilidade</p>
          <h2 className="mt-4 font-[var(--font-geist)] text-3xl font-extrabold tracking-tight sm:text-4xl">
            Relacao de longo prazo com foco em resultado mensuravel.
          </h2>

          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <li key={item.author} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6">
                <blockquote className="text-sm leading-relaxed text-[var(--color-ink-muted)]">“{item.quote}”</blockquote>
                <p className="mt-4 text-sm font-semibold text-[var(--color-ink)]">{item.author}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
