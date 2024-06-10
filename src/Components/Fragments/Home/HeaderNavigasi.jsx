import { useEffect, useState } from "react"

const HeaderNavigasi = (props) => {
    const {flexDirection, bannerRef, layananRef, fiturRef, kontakRef} = props
    const [isRadius, setIsRadius] = useState(0);

    const handleScroll = () => {
        const derajatY = window.pageYOffset;
        
        setIsRadius(derajatY)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [isRadius])

    const handleScrollSection = (ref) => {
        if(ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'})
        }
    }
  return (
    <ul className="hidden lg:block">
            <li className={`flex ${flexDirection} text-secondary gap-x-6`}>
              <button
                onClick={() => handleScrollSection(bannerRef)}
                className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
              >
                BERANDA
              </button>
              <button
                onClick={() => handleScrollSection(layananRef)}
                className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
              >
                LAYANAN
              </button>
              <button
                onClick={() => handleScrollSection(fiturRef)}
                className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
              >
                FITUR
              </button>
              <button
                onClick={() => handleScrollSection(kontakRef)}
                className="text-base opacity-50 text-secondary hover:opacity-100 transition-global"
              >
                KONTAK
              </button>
            </li>

            <button
            onClick={() => handleScrollSection(bannerRef)}
            className={` ${
              isRadius > 100 ? "block" : "hidden"
            } hover:scale-110 transition-global fixed z-50 px-5 py-3 rounded-md bottom-10 right-10 bg-banner text-secondary`}
          >
            ▲
          </button>
          </ul>
  )
}

export default HeaderNavigasi
