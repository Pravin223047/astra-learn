import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import React from "react";
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astra Learn",
  description: "AI-Powered Learning & Interview Preparation platform",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!} >
      <html lang="en" suppressHydrationWarning>
        <body className={`${monaSans.variable} antialiased`} suppressHydrationWarning>
          <Toaster />
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <SignedIn>
              {children}
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );

}
