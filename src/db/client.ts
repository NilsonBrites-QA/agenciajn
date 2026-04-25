export type AppRuntimeEnv = {
  DB: unknown;
  KV: unknown;
  R2: unknown;
};

export function getBindings(env: unknown): AppRuntimeEnv {
  if (typeof env !== "object" || env === null) {
    throw new Error("Cloudflare bindings nao encontrados no ambiente.");
  }

  const parsedEnv = env as Partial<AppRuntimeEnv>;
  if (!parsedEnv.DB || !parsedEnv.KV || !parsedEnv.R2) {
    throw new Error("Bindings obrigatorios (DB, KV, R2) nao estao disponiveis.");
  }

  return parsedEnv as AppRuntimeEnv;
}
