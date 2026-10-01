// Helper reutilizable t(key) sobre el diccionario de `ui.ts`.
// Sin dependencias externas.

import { ui, defaultLang, type Lang, type UITexts } from "./ui";

type DotKey<T, Prefix extends string = ""> = {
  [K in keyof T]: T[K] extends string
    ? `${Prefix}${K & string}`
    : T[K] extends readonly unknown[]
      ? never
      : T[K] extends object
        ? DotKey<T[K], `${Prefix}${K & string}.`>
        : never;
}[keyof T];

export type TranslationKey = DotKey<UITexts>;

function getByPath(obj: unknown, path: string): unknown {
  return path
    .split(".")
    .reduce<unknown>(
      (acc, part) =>
        typeof acc === "object" && acc !== null
          ? (acc as Record<string, unknown>)[part]
          : undefined,
      obj,
    );
}

export function useTranslations(lang: Lang) {
  const dict = ui[lang] ?? ui[defaultLang];
  const fallback = ui[defaultLang];

  return function t(key: TranslationKey): string {
    const value = getByPath(dict, key) ?? getByPath(fallback, key);
    return typeof value === "string" ? value : key;
  };
}

export type { Lang };
