import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import { Footer } from "@/lib/Footer";
import { Header } from "@/lib/Header";

import '@mantine/core/styles.css';
import './global.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viapave Construtora",
  description: "Terraplanagem | Serviços de Engenharia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
