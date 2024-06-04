const HomePages = () => {
  return (
    <>
      <header>
        <nav className="absolute top-0 w-full py-12">
          <div className="container">
            <div className="flex items-center justify-between">
              <button className="flex gap-x-2">
                <img src="/public/logo/rumahImpian.svg" alt="Rumah Impian" />{" "}
                <span className="text-xl text-secondary">Rumah Impian</span>
              </button>

              <ul>
                <li className="flex text-secondary gap-x-6">
                  <a href="" className="text-base">
                    BERANDA
                  </a>
                  <a href="" className="text-base">
                    LAYANAN
                  </a>
                  <a href="" className="text-base">
                    FITUR
                  </a>
                  <a href="" className="text-base">
                    KONTAK
                  </a>
                </li>
              </ul>

              <div className="flex">
                <button className="px-6 py-1 text-base text-secondary">
                  DAFTAR
                </button>
                <button className="px-6 py-1 text-base bg-secondary text-premier">
                  MASUK
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <section className="bg-gradient-to-br from-premier from-10% to-black/90 to-100%">
          <div className="container">
            <div className="flex items-center justify-start w-full h-screen">
              <img
                src="/public/img/layer/layer-hero.png"
                alt="layer"
                className="absolute top-0 left-0 z-10 w-1/3 h-full"
              />
              <img
                src="/public/img/bg/hero-section.png"
                alt="rumah impian"
                className="absolute bottom-0 right-0 z-10 w-1/2 h-5/6"
              />
              <div className="max-w-xl ">
                <h2 className="text-[52px] font-bold leading-[72px] text-secondary mb-[18px]">
                  Membantu Temukan Rumah Impian.
                </h2>
                <p className="max-w-md text-base text-secondary">
                  Rumah Impian hadir untuk temukan rumah terbaik untukmu, untuk
                  di jual ataupun di sewa dengan sumber terpercaya.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomePages;
