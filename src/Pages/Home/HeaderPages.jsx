import { useEffect } from "react";
import { useState } from "react";

const HeaderPages = (props) => {
  const {bannerRef, layananRef, fiturRef, kontakRef} = props
  const [isRadius, setIsRadius] = useState(0)
  
  const handleRadius = () => {
    const Y = pageYOffset;

    setIsRadius(Y)  
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleRadius)

    return () => {
      window.removeEventListener('scroll', handleRadius)
    }
  }, [isRadius])

  const handleScrollSection = (ref) => {
    if(ref.current) {
      ref.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  
  return (
    <nav className="absolute top-0 w-full py-8">
      <div className="container">
        <div className="flex items-center justify-between">
          <button className="flex gap-x-2">
            <img src="/logo/rumahImpian.svg" alt="Rumah Impian" />{" "}
            <span className="text-xl text-secondary">Rumah Impian</span>
          </button>

          <ul>
            <li className="flex text-secondary gap-x-6">
              <button onClick={() => handleScrollSection(bannerRef)} className="text-base">
                BERANDA
              </button>
              <button onClick={() => handleScrollSection(layananRef)} className="text-base">
                LAYANAN
              </button>
              <button onClick={() => handleScrollSection(fiturRef)} className="text-base">
                FITUR
              </button>
              <button onClick={() => handleScrollSection(kontakRef)} className="text-base">
                KONTAK
              </button>
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

          <button onClick={() => handleScrollSection(bannerRef)} className={` ${isRadius > 100 ? 'block' : 'hidden'} fixed z-50 px-5 py-3 rounded-md bottom-10 right-10 bg-banner text-secondary`}>▲</button>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPages;
