import Container from "./Container";
import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} {profile.name}. Todos os direitos reservados.
          </div>
          <div className="text-zinc-500">
            Construído com Next.js + Tailwind + Framer Motion
          </div>
        </div>
      </Container>
    </footer>
  );
}
