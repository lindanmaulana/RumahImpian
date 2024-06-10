import { Fragment, forwardRef, useEffect, useState } from "react";
import RekomendasiCard from "../../Components/Fragments/Home/RekomendasiCard";

const RekomendasiRumah = forwardRef((props, ref) => {
  // const ref = useRef(null)
  const [isLainnya, setIsLainnya] = useState(false)
  useEffect(() => {
    if (ref.current) {
      {
        ref.current.mode == "Property Baru" && "bg-banner";
      }
    }
  }, [ref]);

  const handleClickLainnya = () => {
    setIsLainnya(!isLainnya)
  }
  return (
    <section className="pb-12 pt-section" ref={ref}>
      <div className="container">
        <div className="text-center mb-11">
          <h2 className="text-5xl font-semibold text-premier">
            Rekomendasi Rumah Untuk Mu
          </h2>
        </div>
        <div className={`flex flex-wrap items-center justify-between py-4 pb-12 ga gap-y-8 p-x-4 h-auto transition-global  overflow-hidden`}>
          <RekomendasiCard
            src="rekomendasi-rumah1.png"
            price={200000000}
            jalan="Jl.Arya Kamuning No.2"
            mode="Sewa"
            jumlahKamarMandi="2"
            jumlahKamarTidur="4"
            luasRumah="380m"
          />
          <RekomendasiCard
            src="rekomendasi-rumah2.png"
            price={200000000}
            jalan="Jl.Soekarno Hatta No.1"
            mode="Sewa"
            jumlahKamarMandi="4"
            jumlahKamarTidur="2"
            luasRumah="360m"
          />
          <RekomendasiCard
            src="rekomendasi-rumah3.png"
            price={200000000}
            jalan="Jl.Soekarno Hatta No.1"
            mode="Property Baru"
            jumlahKamarMandi="4"
            jumlahKamarTidur="2"
            luasRumah="360m"
          />
          {isLainnya&& (
            <Fragment>
              <RekomendasiCard
                src="rekomendasi-rumah4.png"
                price={200000000}
                jalan="Jl.Soekarno Hatta No.1"
                mode="Jual"
                jumlahKamarMandi="4"
                jumlahKamarTidur="2"
                luasRumah="360m"
              />
              <RekomendasiCard
                src="rekomendasi-rumah5.png"
                price={200000000}
                jalan="Jl.Soekarno Hatta No.1"
                mode="Sewa"
                jumlahKamarMandi="4"
                jumlahKamarTidur="2"
                luasRumah="360m"
              />
              <RekomendasiCard
                src="rekomendasi-rumah6.png"
                price={200000000}
                jalan="Jl.Soekarno Hatta No.1"
                mode="Sewa"
                jumlahKamarMandi="4"
                jumlahKamarTidur="2"
                luasRumah="360m"
              />
            </Fragment>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button onClick={handleClickLainnya} className="text-center">
           {isLainnya ? "Tampilkan lebih sedikit..." : " Lihat Lainnya..."}
          </button>
        </div>
      </div>
    </section>
  );
});
RekomendasiRumah.displayName = "RekomendasiRumah";

export default RekomendasiRumah;
