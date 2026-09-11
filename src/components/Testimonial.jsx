import { useRef, useState } from 'react'

export default function Testimonial() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

  return (
    <section className="pb-16 pt-0 md:pb-24">
      <div className="bg-black pb-28 pt-7 md:pb-36" />
      <div className="mx-auto -mt-24 max-w-[1500px] px-5 md:-mt-32 md:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-black shadow-soft">
          <video ref={videoRef} muted loop playsInline poster="/assets/testimonial.jpg" className="h-[360px] w-full object-cover sm:h-[460px] md:h-[540px]">
            <source src="/assets/hero-loop.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-black/5" />
          <div className="absolute left-6 top-6 max-w-[560px] md:left-10 md:top-10">
            <blockquote className="rounded-[14px] bg-white px-5 py-4 text-[30px] font-medium leading-[.95] tracking-[-0.045em] sm:text-[38px] md:text-[47px]">“ Shape created<br />something better than I ever<br />could have imagined</blockquote>
            <div className="mt-1 inline-flex rounded-b-[14px] bg-white px-5 py-3 text-[11px] leading-4">Hannah Wessel<br /><span className="ml-1 text-black/55">Co-Founder, Stoneletters</span></div>
          </div>
          <button onClick={toggle} className="absolute bottom-7 left-7 grid h-14 w-14 place-items-center rounded-full bg-lime text-xl md:bottom-10 md:left-10" aria-label="Play testimonial video">
            {playing ? 'Ⅱ' : '▶'}
          </button>
          <div className="absolute bottom-7 right-7 flex gap-3 md:bottom-10 md:right-10">
            <button onClick={toggle} className="rounded-full bg-lime px-5 py-3 text-[12px] font-medium">{playing ? 'Pause video' : 'Play video'} ↗</button>
            <a href="#contact" className="hidden rounded-full bg-black px-5 py-3 text-[12px] font-medium text-white sm:inline-flex">View more testimonials ↗</a>
          </div>
        </div>
      </div>
    </section>
  )
}
