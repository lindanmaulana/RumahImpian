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
        <HeroSection ref={bannerRef} />

        <LayananPages ref={layananRef} />

        <TemukanRumahPages />

        <RekomendasiRumah ref={rekomendasiRef} />

        <FiturRumahPages ref={fiturRef} />

        <KonsultasiRumahPages ref={kontakRef}/>
      </main>
    </Fragment>
  );
};

export default HomePages;
