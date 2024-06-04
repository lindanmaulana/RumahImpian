const LayananPages = () => {
  return (
    <section className="py-section bg-[#F3FFF4]">
      <div className="container">
        <div className="text-center mb-11">
          <h3 className="mb-1 text-5xl font-semibold text-premier">
            Layanan Kami
          </h3>
          <p className="text-lg font-medium text-hitam ">
            Rumah impian hadir menjadi solusi bagi kamu
          </p>
        </div>

        <div className="flex items-center justify-center w-full gap-x-5">
          <div className="bg-gradient-to-br from-[#00985B] to-black/80 flex max-w-sm flex-col rounded-md justify-center items-center px-10 py-10">
            <img
              src="/public/img/icons/layanan-house.png"
              alt="house"
              className="p-1 mb-5 bg-white rounded-full w-14 h-14"
            />
            <h3 className="mb-3 text-2xl font-semibold text-secondary">
              Property Baru
            </h3>
            <p className="text-sm text-center text-secondary">
              Rumah impian kini jadi kenyataan, Beli rumah bary dengan fasilitas
              terbaik dengan lingkungan yang nyaman.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-w-sm px-10 py-10 rounded-md bg-secondary">
            <img
              src="/public/img/icons/layanan-finance.png"
              alt="house"
              className="p-1 mb-5 rounded-full bg-premier w-14 h-14"
            />
            <h3 className="mb-3 text-2xl font-semibold text-premier-2">
              Sewa Rumah
            </h3>
            <p className="text-sm text-center text-hitam">
              Sewa rumah yang indah untuk keluarga anda, pilihan terbaik untuk
              tempat tinggal keluarga mu.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-w-sm px-10 py-10 rounded-md bg-secondary">
            <img
              src="/public/img/icons/layanan-town.png"
              alt="house"
              className="p-1 mb-5 rounded-full bg-premier w-14 h-14"
            />
            <h3 className="mb-3 text-2xl font-semibold text-premier-2">
              Beli Rumah
            </h3>
            <p className="text-sm text-center text-hitam">
              Beli Rumah sempurna dengan harga terbaik kualitas terjamin dari
              sumber terpercaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LayananPages;
