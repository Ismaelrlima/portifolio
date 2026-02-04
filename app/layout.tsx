import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
