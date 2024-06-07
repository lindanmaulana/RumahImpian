import { forwardRef } from "react"
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter } from "react-icons/io5"

const KonsultasiRumahPages = forwardRef((props, ref) => {
  return (
    <section className="bg-[url(/img/icons/fitur5.png)] bg-cover bg-center" ref={ref}>
          <div className="py-[100px] w-full h-full bg-black/60">
            <div className="container">
              <div className="flex items-center justify-center">
                <div className="w-1/2 pr-12">
                  <h2 className="text-[40px] font-semibold text-secondary mb-5">
                    Butuh Konsultasi..? Silahkan kontak kami Kami Siap Membantu
                  </h2>
                  <h4 className="mb-4 text-lg font-semibold text-secondary">
                    Kontak
                  </h4>

                  <div className="flex flex-col mb-4 gap-y-4">
                    <p className="flex gap-x-4">
                      <img
                        src="/img/icons/konsultasi-location.svg"
                        alt="location"
                        className="w-6 h-6"
                      />{" "}
                      <span className="text-base text-secondary">
                        Jl. Pelajar Pejuang 123 Majalaya Bandung Indonesia
                      </span>
                    </p>
                    <p className="flex gap-x-4">
                      <img
                        src="/img/icons/konsultasi-telepon.svg"
                        alt="telepon"
                        className="w-6 h-6"
                      />{" "}
                      <span className="text-base text-secondary">
                        022-6545-2041
                      </span>
                    </p>
                    <p className="flex gap-x-4">
                      <img
                        src="/img/icons/konsultasi-pesan.svg"
                        alt="pesan"
                        className="w-6 h-6"
                      />{" "}
                      <span className="text-base text-secondary">
                        rumahimpian@gmail.com
                      </span>
                    </p>
                  </div>

                  <h4 className="mb-3 text-lg font-semibold text-secondary">
                    Social Media
                  </h4>
                  <div className="flex gap-x-4">
                    <IoLogoFacebook className="w-6 h-6 text-secondary" />{" "}
                    <IoLogoTwitter className="w-6 h-6 text-secondary" />{" "}
                    <IoLogoInstagram className="w-6 h-6 text-secondary" />{" "}
                    <p className="text-base text-secondary">RumahImpian</p>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="max-w-xl p-12 bg-secondary">
                    <form action="" className="flex flex-col items-center justify-center gap-y-4">
                      <label className="text-4xl font-semibold text-premier">Ada pertanyaan..?</label>
                      <input type="text" placeholder="Masukan email anda disini.." className="bg-[#C4C4C4] w-full p-7 placeholder:text-base outline-none"/>
                      <input type="text" placeholder="Pertanyaan anda.." className="bg-[#C4C4C4] w-full p-7 placeholder:text-base outline-none"/>
                      <button className="w-full text-2xl font-semibold text-center bg-premier p-7 text-secondary">Kirim</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  )
});

KonsultasiRumahPages.displayName = "KonsultasiRumahPages"

export default KonsultasiRumahPages
