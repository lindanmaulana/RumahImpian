import HeaderNavigasi from "../../Components/Fragments/Home/HeaderNavigasi";
import HeaderSignUp from "../../Components/Fragments/Home/HeaderSignUp";
import HeaderHamburger from "../../Components/Fragments/Home/HeaderHamburger";
import { useSelector } from "react-redux";

const HeaderPages = (props) => {
  const { bannerRef, layananRef, fiturRef, kontakRef } = props;
  const selector = useSelector((state) => state.cart);

  return (
    <nav className="absolute top-0 w-full py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <button className="flex gap-x-2">
            <img src="/logo/rumahImpian.svg" alt="Rumah Impian" />{" "}
            <span className="text-sm md:text-xl text-secondary">
              Rumah Impian
            </span>
          </button>

          <HeaderNavigasi
            flexDirection="flex-row"
            bannerRef={bannerRef}
            layananRef={layananRef}
            fiturRef={fiturRef}
            kontakRef={kontakRef}
          />

          {/* <HeaderHamburger /> */}

          {/* <div
            className={`absolute top-20 right-5 ${
              selector.stateSection.heroSection
                ? "bg-slate-800 opacity-100 translate-x-0 text-red-500"
                : " text-blue-700 translate-x-full opacity-0"
            }`}
          >
            <div className="flex flex-col">
              <button>Beranda</button>
              <button>Layanan</button>
              <button>Fitur</button>
              <button>Kontak</button>
              <HeaderSignUp />
            </div>
          </div> */}

          <HeaderSignUp />
        </div>
      </div>
    </nav>
  );
};

export default HeaderPages;
