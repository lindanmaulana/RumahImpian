import HeaderPages from "./Home/HeaderPages";
import HeroSection from "./Home/HeroSection";
import LayananPages from "./Home/LayananPages";
import RekomendasiRumah from "./Home/RekomendasiRumah";
import TemukanRumahPages from "./Home/TemukanRumahPages";

const HomePages = () => {
  return (
    <>
      <header>
        <HeaderPages />
      </header>

      <main>
        <HeroSection />

        <LayananPages />

        <TemukanRumahPages />
    
        <RekomendasiRumah />
      </main>
    </>
  );
};

export default HomePages;
