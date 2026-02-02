export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass rounded-2xl shadow-glow">
      <div className="p-6 md:p-7">{children}</div>
    </div>
  );
}
