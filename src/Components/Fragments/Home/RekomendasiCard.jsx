import { useEffect, useState } from "react";

const RekomendasiCard = (props) => {
    const {src, price, jalan, mode, jumlahKamarMandi, jumlahKamarTidur, luasRumah} = props
    const [totalPrice, setTotalPrice] = useState(0)
    const [isBackgroud, setIsBackground] = useState(false)
    
    useEffect(() => {
        const rupiah = new Intl.NumberFormat("id-Id", {
            style: "currency",
            currency: "IDR",
            currencyDisplay: 'code',
            maximumFractionDigits: 0
        }).format(price)

        setTotalPrice(rupiah)
    }, [price])

    useEffect(() => {
        {mode !== "Property Baru" ? setIsBackground("bg-secondary") : setIsBackground("bg-banner")}
    }, [mode])
    
  return (
    <div className={`p-2 overflow-hidden rounded pb-14 max-w-rekomendasi-card max-h-rekomendasi-card ${isBackgroud}`}>
      <div className="w-full mb-2 h-72">
        <img
          src={`/img/icons/${src}`}
          alt="rumah 1"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="px-2">
        <h3 className="text-2xl font-semibold text-hitam">{totalPrice}</h3>
        <p className="text-sm text-hitam">{jalan}</p>
        <p className="mb-10 text-sm text-pink">{mode}</p>
        <div className="flex items-center justify-between pb-10">
          <button className="text-left">
            <img
              src="/img/icons/rekomendasi-tempat-tidur.svg"
              alt="Tempat Tidur"
              className="inline-block w-6 h-6 mr-1"
            />
            <span className="inline-block text-sm font-semibold text-hitam">
              {jumlahKamarTidur}
            </span>
            <p className="text-xs text-hitam">Kamar Tidur</p>
          </button>

          <button className="text-left">
            <img
              src="/img/icons/rekomendasi-bathup.svg"
              alt="Bathup"
              className="inline-block w-6 h-6 mr-1"
            />
            <span className="inline-block text-sm font-semibold text-hitam">
              {jumlahKamarMandi}
            </span>
            <p className="text-xs text-hitam">Kamar Mandi</p>
          </button>

          <button className="text-left">
            <img
              src="/img/icons/rekomendasi-globe.svg"
              alt="Globe"
              className="inline-block w-6 h-6 mr-1"
            />
            <span className="inline-block text-sm font-semibold text-hitam">
              {luasRumah}
            </span>
            <p className="text-xs text-hitam">Luas Rumah</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RekomendasiCard;
