export default function AiSection() {
  const chips = ['OpenAI', 'Claude', 'Google', 'Grok']
  return (
    <section id="blog" className="relative overflow-hidden py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-10">
        <div className="relative min-h-[420px]">
          <div className="mx-auto max-w-[760px] text-center">
            <p className="text-[12px] font-medium">Don't believe the hype?</p>
            <h2 className="mt-2 text-[52px] font-medium leading-[.9] tracking-[-0.065em] sm:text-[70px] md:text-[86px]">See what AI has<br />to say about us</h2>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {chips.map((chip) => <button key={chip} className="rounded-full bg-lime px-4 py-2 text-[11px] font-medium">◎ {chip}</button>)}
            </div>
          </div>

          <img src="/assets/studio-1.jpg" alt="studio" className="absolute left-[3%] top-2 hidden h-28 w-36 rotate-[-4deg] rounded-[14px] object-cover shadow-soft md:block" />
          <img src="/assets/studio-2.jpg" alt="studio" className="absolute right-[3%] top-24 hidden h-28 w-36 rotate-[5deg] rounded-[14px] object-cover shadow-soft md:block" />
          <img src="/assets/studio-3.jpg" alt="studio" className="absolute bottom-0 left-[14%] hidden h-24 w-32 rotate-[2deg] rounded-[14px] object-cover shadow-soft md:block" />
        </div>
      </div>
    </section>
  )
}
