import ArrowButton from './ArrowButton'

export default function Sharing() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.25fr_1fr_.75fr] lg:items-start">
          <p className="text-[12px] font-medium">• Sharing the love</p>
          <h2 className="text-[42px] font-medium leading-[.98] tracking-[-0.055em] sm:text-[52px]">A web design agency in Manchester that cares about you and your brand, no matter the size or what industry your business is in.</h2>
          <div className="text-[14px] leading-6 text-black/75">
            <p>Born in 2010, MadeByShape is an Award-Winning Web Design Agency based in Manchester specialising in Web Design, Branding, eCommerce, Digital Marketing and Organic SEO.</p>
            <p className="mt-4">Our content management system of choice is Craft CMS, while we also build polished Shopify projects for ambitious brands.</p>
            <p className="mt-4">So, if you need a professional design agency to support your branding or website, get in touch with us today.</p>
            <ArrowButton className="mt-6">About Shape</ArrowButton>
          </div>
        </div>
      </div>
    </section>
  )
}
