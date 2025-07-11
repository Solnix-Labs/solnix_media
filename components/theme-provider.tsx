"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps): React.ReactElement {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
} 