import type { Metadata } from "next";
import { Anybody, Archivo_Narrow, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ScrollProgressBar from "./components/ScrollProgressBar";

const anybody = Anybody({
  variable: "--font-anybody",
  subsets: ["latin"],
  weight: ["900", "800"],
});

const archivoNarrow = Archivo_Narrow({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Fairuz - Portfolio",
  description: "Personal Portfolio in Heavy Ink Brutalism Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anybody.variable} ${archivoNarrow.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false} themes={['light', 'noir']}>
          <ScrollProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
