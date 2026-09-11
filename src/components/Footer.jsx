import ArrowButton from './ArrowButton'

export default function Footer() {
  return (
    <footer id="contact" className="px-3 pb-3 md:px-5 md:pb-5">
      <div className="mx-auto max-w-[1500px] rounded-[28px] bg-black px-6 py-10 text-white md:px-10 md:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.8fr_.8fr_1.2fr]">
          <div>
            <p className="text-[13px] text-white/65">Do you like<br />what you see?</p>
            <h2 className="mt-3 text-[46px] font-medium leading-[.95] tracking-[-0.055em]">Let's make<br />something good.</h2>
            <ArrowButton className="mt-6">Start a project</ArrowButton>
          </div>
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[.14em] text-white/45">Learn</p>
            <div className="flex flex-col gap-2 text-[13px] text-white/80">
              {['About', 'Culture', 'Testimonials', 'Processes', 'FAQs', 'Branding FAQs', 'Blog'].map((v) => <a href="#" key={v}>{v}</a>)}
            </div>
          </div>
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[.14em] text-white/45">Explore</p>
            <div className="flex flex-col gap-2 text-[13px] text-white/80">
              {['Home', 'Work', 'Services', 'Careers', 'Sectors', 'Contact'].map((v) => <a href="#" key={v}>{v}</a>)}
            </div>
          </div>
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[.14em] text-white/45">Get in touch</p>
            <p className="text-[16px] leading-7">01942 894 596<br />hello@madebyshape.co.uk</p>
            <p className="mt-5 text-[13px] leading-6 text-white/65">MadeByShape<br />1 Gibfield Park Avenue<br />Atherton Manchester<br />M46 0SU</p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© MadeByShape Ltd 2026 · Replica built from supplied reference</p>
          <p>Web Design Manchester · All Rights Reserved · Privacy Policy</p>
        </div>
      </div>
    </footer>
  )
}
