
const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-premier from-10% to-black/90 to-100%">
          <div className="container">
            <div className="flex items-center justify-start w-full h-screen pt-10">
              <img
                src="/public/img/layer/layer-hero.png"
                alt="layer"
                className="absolute top-0 left-0 z-10 h-full max-w-1/2"
              />
              <img
                src="/public/img/bg/hero-section.png"
                alt="rumah impian"
                className="absolute bottom-0 right-0 z-10 max-w-1/2 h-5/6"
              />
              <div className="z-20 max-w-xl">
                <h2 className="text-[52px] font-bold leading-[72px] text-secondary mb-[18px]">
                  Membantu Temukan Rumah Impian.
                </h2>
                <p className="max-w-md mb-12 text-base text-secondary">
                  Rumah Impian hadir untuk temukan rumah terbaik untukmu, untuk
                  di jual ataupun di sewa dengan sumber terpercaya.
                </p>
                <div className="flex items-center justify-start gap-x-3.5">
                  <button className="px-8 py-4 text-base font-bold text-premier bg-secondary">
                    Temukan Rumah
                  </button>
                  <span className="text-3xl text-secondary">❯</span>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection
