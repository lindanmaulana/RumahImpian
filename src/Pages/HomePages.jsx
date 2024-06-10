import { Fragment, useRef } from "react";
import HeaderPages from "./Home/HeaderPages";
import HeroSection from "./Home/HeroSection";
import LayananPages from "./Home/LayananPages";
import RekomendasiRumah from "./Home/RekomendasiRumah";
import TemukanRumahPages from "./Home/TemukanRumahPages";
import FiturRumahPages from "./Home/FiturRumahPages";
import KonsultasiRumahPages from "./Home/KonsultasiRumahPages";

const HomePages = () => {
  const bannerRef = useRef(null);
  const layananRef = useRef(null);
  const rekomendasiRef = useRef(null);
  const fiturRef = useRef(null);
  const kontakRef = useRef(null);

  const handleScrollSection = (params) => {
    if(params.current) {
      params.current.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <Fragment>
      <header>
        <HeaderPages
          bannerRef={bannerRef}
          layananRef={layananRef}
          fiturRef={fiturRef}
          kontakRef={kontakRef}
        />
      </header>

      <main>
        <HeroSection ref={bannerRef} rekomendasiRef={rekomendasiRef} />

        <LayananPages ref={layananRef} />

        <TemukanRumahPages />

        <RekomendasiRumah ref={rekomendasiRef} />

        <FiturRumahPages ref={fiturRef} />

        <KonsultasiRumahPages ref={kontakRef} />

        <section className="py-section bg-hitam">
          <div className="container">
            <div className="flex justify-between">
              <button className="flex gap-x-2">
                <img src="/logo/rumahImpian.svg" alt="Rumah Impian" />{" "}
                <span className="text-xl text-secondary">Rumah Impian</span>
              </button>
              <ul>
                <li className="flex text-secondary gap-x-6">
                  <button
                    onClick={() => handleScrollSection(bannerRef)}
                    className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
                  >
                    BERANDA
                  </button>
                  <button
                    onClick={() => handleScrollSection(layananRef)}
                    className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
                  >
                    LAYANAN
                  </button>
                  <button
                    onClick={() => handleScrollSection(fiturRef)}
                    className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
                  >
                    FITUR
                  </button>
                  <button
                    onClick={() => handleScrollSection(kontakRef)}
                    className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
                  >
                    KONTAK
                  </button>
                  <button
                    onClick={() => handleScrollSection(kontakRef)}
                    className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
                  >
                    MASUK
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default HomePages;
