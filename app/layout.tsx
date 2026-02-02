import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ismael Lima | Portfólio",
  description: "Portfólio profissional de Ismael Lima — Dados, BI e Ciência de Dados.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Ismael Lima | Portfólio",
    description: "Dados, BI, ETL, Python, SQL, Power BI e Machine Learning aplicado ao negócio.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-black text-zinc-100 antialiased">
      <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
