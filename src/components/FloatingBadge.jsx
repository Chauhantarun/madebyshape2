export default function FloatingBadge() {
  return (
    <a href="#contact" className="fixed bottom-5 right-5 z-40 hidden h-[72px] w-[72px] place-items-center rounded-full bg-lime text-center text-[8px] font-semibold leading-tight shadow-soft md:grid">
      <span className="text-[26px] leading-none">◉◉</span>
      <span className="absolute inset-1 animate-[spin_18s_linear_infinite] rounded-full border border-black/25" />
    </a>
  )
}
