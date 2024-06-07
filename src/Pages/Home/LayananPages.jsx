import { forwardRef } from "react";

const LayananPages = forwardRef((props, ref) => {
  return (
    <section className="py-section" ref={ref}>
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
          <div className="flex flex-col items-center justify-center max-w-sm px-10 py-10 rounded-md transition-global group bg-secondary hover:bg-banner">
            <img
              src="/img/icons/layanan-house.png"
              alt="house"
              className="p-1 mb-5 rounded-full bg-premier group-hover:bg-white w-14 h-14"
            />
            <h3 className="mb-3 text-2xl font-semibold text-premier group-hover:text-secondary">
              Property Baru
            </h3>
            <p className="text-sm text-center text-hitam group-hover:text-secondary">
              Rumah impian kini jadi kenyataan, Beli rumah bary dengan fasilitas
              terbaik dengan lingkungan yang nyaman.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-w-sm px-10 py-10 rounded-md group bg-secondary hover:bg-banner">
            <img
              src="/img/icons/layanan-finance.png"
              alt="house"
              className="p-1 mb-5 rounded-full bg-premier group-hover:bg-secondary w-14 h-14"
            />
            <h3 className="mb-3 text-2xl font-semibold text-premier-2 group-hover:text-secondary">
              Sewa Rumah
            </h3>
            <p className="text-sm text-center text-hitam group-hover:text-secondary">
              Sewa rumah yang indah untuk keluarga anda, pilihan terbaik untuk
              tempat tinggal keluarga mu.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center max-w-sm px-10 py-10 rounded-md group bg-secondary hover:bg-banner">
            <img
              src="/img/icons/layanan-town.png"
              alt="house"
              className="p-1 mb-5 rounded-full bg-premier group-hover:bg-secondary w-14 h-14"
            />
            <h3 className="mb-3 text-2xl font-semibold text-premier-2 group-hover:text-secondary">
              Beli Rumah
            </h3>
            <p className="text-sm text-center text-hitam group-hover:text-secondary">
              Beli Rumah sempurna dengan harga terbaik kualitas terjamin dari
              sumber terpercaya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

LayananPages.displayName = "LayananPages"

export default LayananPages;
