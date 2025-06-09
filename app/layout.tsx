import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ConvexClientProvider } from '@/lib/convex';
import { AuthProvider } from '@/lib/clerk';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TaskFlow - Modern Task Management',
  description: 'A modern task management application built with Next.js and Convex',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ConvexClientProvider>
              {children}
              <Toaster />
            </ConvexClientProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}