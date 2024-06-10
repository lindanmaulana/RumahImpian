import { useState } from "react";

const TemukanRumahPages = () => {
  const [page, setPage] = useState("jual");

  const sewa = "sewa";
  const jual = "jual";
  const propertyBaru = "property baru";

  const handleCLick = (params) => {
    setPage(params);
  };
  return (
    <section
      className="bg-[url(/img/bg/green-interior.png)] bg-center bg-cover"
    >
      <div className="container py-section pb-[200px]">
        <div className="flex flex-col justify-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center mb-16 text-center gap-y-3">
            <h2 className="text-5xl font-semibold text-secondary">
              Temukan Rumah Impianmu
            </h2>
            <p className="max-w-4xl text-2xl text-secondary">
              sekarang Anda dapat menghemat semua hal stres, waktu, dan biaya
              tersembunyi, dengan ratusan rumah untuk anda
            </p>
          </div>
          <div>
            <button
              onClick={() => handleCLick(jual)}
              className={`px-4 py-2 text-lg rounded-tl-lg ${
                page === jual ? "bg-white/80" : "bg-white/50"
              } text-premier-2`}
            >
              Jual
            </button>
            <button
              onClick={() => handleCLick(sewa)}
              className={`px-4 py-2 text-lg ${
                page === sewa ? "bg-white/80" : "bg-white/50"
              } text-premier-2`}
            >
              Sewa
            </button>
            <button
              onClick={() => handleCLick(propertyBaru)}
              className={`px-4 py-2 text-lg rounded-tr-lg ${
                page === propertyBaru ? "bg-white/80" : "bg-white/50"
              } text-premier-2`}
            >
              Property Baru
            </button>
          </div>
          <div className="flex rounded-bl-lg">
            <button className="flex items-center justify-center px-6 py-6 bg-white/70">
              <img
                className="w-5 h-5 mr-2"
                src="/img/icons/temukan-rumah.svg"
                alt="rumah"
              />
              <span className="text-lg text-premier-2">Tipe Rumah ⌵</span>
            </button>

            <button className="flex items-center justify-center px-6 py-6 bg-white/70">
              <img
                className="w-5 h-5 mr-2"
                src="/img/icons/temukan-uang.svg"
                alt="rumah"
              />
              <span className="text-lg text-premier-2">Range Harga ⌵</span>
            </button>

            <button className="px-6 py-6 text-lg text-premier-2 bg-white/70">
              cari berdasarkan lokasi, ID, Property
            </button>

            <button className="px-[27px] bg-premier-2 text-4xl text-secondary">
              Cari
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default TemukanRumahPages;
