"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <ClerkProvider
      appearance={{
        baseTheme: theme === "dark" ? dark : undefined,
        variables: {
          colorPrimary: "#3B82F6",
          colorBackground: "#ffffff",
          colorInputBackground: "#ffffff",
          colorInputText: "#1f2937",
        },
        elements: {
          formButtonPrimary: "bg-blue-600 hover:bg-blue-700 transition-colors",
          card: "shadow-xl border border-gray-200",
        },
      }}
    >
      {children}
    </ClerkProvider>
  );
}