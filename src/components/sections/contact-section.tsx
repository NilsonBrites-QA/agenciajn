// Uses client rendering for form state handling and inline validation.
"use client";

import { useMemo, useState } from "react";
import { z } from "zod";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const contactSchema = z.object({
  name: z.string().min(2, "Informe seu nome completo"),
  company: z.string().optional(),
  email: z.email("Formato de e-mail incorreto. Use: nome@empresa.com"),
  phone: z
    .string()
    .refine((value) => value.replace(/\D/g, "").length >= 11, "Insira um numero de WhatsApp valido com DDD"),
  need: z.string().min(10, "Conte em poucas linhas o que voce precisa"),
});

type FormValues = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  need: "",
};

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitFeedback, setSubmitFeedback] = useState<string>("");

  const canSubmit = useMemo(
    () => Object.values(values).some((entry) => entry.trim().length > 0),
    [values],
  );

  function handleChange(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function handleBlur(field: keyof FormValues) {
    const result = contactSchema.safeParse(values);
    if (result.success) {
      setErrors((current) => ({ ...current, [field]: undefined }));
      return;
    }

    const fieldError = result.error.issues.find((issue) => issue.path[0] === field);
    setErrors((current) => ({ ...current, [field]: fieldError?.message }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitFeedback("");

    const result = contactSchema.safeParse(values);
    if (!result.success) {
      const nextErrors: FormErrors = {};
      result.error.issues.forEach((issue) => {
        const key = issue.path[0] as keyof FormValues;
        nextErrors[key] = issue.message;
      });
      setErrors(nextErrors);
      return;
    }

    setErrors({});
    setSubmitFeedback("Recebemos sua mensagem, logo entraremos em contato!");
    setValues(initialValues);
  }

  return (
    <section id="contato" className="py-24 sm:py-32">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Contato"
              title="Vamos desenhar o proximo passo digital da sua empresa."
              description="Preencha o formulario e receba um plano objetivo para acelerar sua presenca digital com foco em receita."
            />
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="surface-card space-y-5 p-6 sm:p-8" aria-label="Formulario de contato">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
                  Nome
                  <input
                    aria-label="Nome"
                    value={values.name}
                    onChange={(event) => handleChange("name", event.target.value)}
                    onBlur={() => handleBlur("name")}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20"
                  />
                  {errors.name ? <span className="block text-xs text-red-600">{errors.name}</span> : null}
                </label>

                <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
                  Empresa
                  <input
                    aria-label="Empresa"
                    value={values.company}
                    onChange={(event) => handleChange("company", event.target.value)}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20"
                  />
                </label>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
                  E-mail
                  <input
                    aria-label="E-mail"
                    value={values.email}
                    onChange={(event) => handleChange("email", event.target.value)}
                    onBlur={() => handleBlur("email")}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20"
                  />
                  {errors.email ? <span className="block text-xs text-red-600">{errors.email}</span> : null}
                </label>

                <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
                  WhatsApp
                  <input
                    aria-label="WhatsApp"
                    value={values.phone}
                    onChange={(event) => handleChange("phone", event.target.value)}
                    onBlur={() => handleBlur("phone")}
                    className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20"
                  />
                  {errors.phone ? <span className="block text-xs text-red-600">{errors.phone}</span> : null}
                </label>
              </div>

              <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
                Necessidade
                <textarea
                  aria-label="Necessidade"
                  value={values.need}
                  onChange={(event) => handleChange("need", event.target.value)}
                  onBlur={() => handleBlur("need")}
                  className="min-h-32 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm outline-none focus:border-[var(--color-brand)] focus:ring-2 focus:ring-[var(--color-brand)]/20"
                />
                {errors.need ? <span className="block text-xs text-red-600">{errors.need}</span> : null}
              </label>

              <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-[var(--color-bg)] px-4 py-3 text-sm text-[var(--color-ink-muted)]">
                <span data-testid="turnstile-widget" aria-label="Cloudflare Turnstile">
                  Turnstile sera conectado nesta secao.
                </span>
              </div>

              <button
                type="submit"
                aria-label="Enviar formulario de contato"
                disabled={!canSubmit}
                className="inline-flex w-full items-center justify-center rounded-full bg-[var(--color-brand)] px-6 py-3.5 text-base font-semibold text-white hover:scale-[1.02] hover:bg-[var(--color-brand-strong)] disabled:cursor-not-allowed disabled:opacity-50"
              >
                Quero receber uma proposta
              </button>

              {submitFeedback ? <p className="text-sm font-medium text-emerald-700">{submitFeedback}</p> : null}
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
