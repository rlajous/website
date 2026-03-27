"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

/**
 * Client-side wrapper around the `next-themes` ThemeProvider.
 *
 * Extracted into a separate client component because `next-themes` requires
 * client-side rendering for hydration, and the root layout is a server component.
 *
 * @param props - All props are forwarded to `NextThemesProvider` (attribute, defaultTheme, etc.).
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
