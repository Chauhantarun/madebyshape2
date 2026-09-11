export default function ArrowButton({ children, dark = false, href = '#contact', className = '' }) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 rounded-full px-5 py-3 text-[13px] font-medium transition-transform duration-300 hover:-translate-y-0.5 ${
        dark ? 'bg-black text-white' : 'bg-lime text-black'
      } ${className}`}
    >
      <span>{children}</span>
      <span className="grid h-5 w-5 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45">↗</span>
    </a>
  )
}
