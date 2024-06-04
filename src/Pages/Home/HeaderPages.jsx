
const HeaderPages = () => {
  return (
    <nav className="absolute top-0 w-full py-8">
          <div className="container">
            <div className="flex items-center justify-between">
              <button className="flex gap-x-2">
                <img src="/public/logo/rumahImpian.svg" alt="Rumah Impian" />{" "}
                <span className="text-xl text-secondary">Rumah Impian</span>
              </button>

              <ul>
                <li className="flex text-secondary gap-x-6">
                  <a href="#" className="text-base">
                    BERANDA
                  </a>
                  <a href="#" className="text-base">
                    LAYANAN
                  </a>
                  <a href="#" className="text-base">
                    FITUR
                  </a>
                  <a href="#" className="text-base">
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
  )
}

export default HeaderPages
