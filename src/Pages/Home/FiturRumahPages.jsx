import { forwardRef } from "react";
import FiturPagination from "../../Components/Fragments/Home/FiturPagination";

const FiturRumahPages = forwardRef((props, ref) => {
  return (
    <section className="py-section" ref={ref}>
      <div className="container">
        <div className="flex justify-between mb-16">
          <h2 className="text-5xl font-semibold text-premier">Fitur Rumah</h2>
          <div className="flex items-center justify-center px-5 py-1 text-xl font-semibold hover:scale-105 min-w-60 text-secondary group transition-global bg-premier gap-x-4">
          <button className="text-secondary transition-global">
            Lihat Semua
          </button>
          <span className="group-hover:translate-x-5 transition-global"> ❯</span>
          </div>
        </div>

        <div>
          <FiturPagination />
        </div>
      </div>
    </section>
  );
});

FiturRumahPages.displayName = "FiturRumahPages";

export default FiturRumahPages;
