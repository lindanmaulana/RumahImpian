import { forwardRef } from "react";
import FiturPagination from "../../Components/Fragments/Home/FiturPagination";

const FiturRumahPages = forwardRef((props, ref) => {
  return (
    <section className="py-section" ref={ref}>
      <div className="container">
        <div className="flex justify-between mb-16">
          <h2 className="text-5xl font-semibold text-premier">Fitur Rumah</h2>
          <button className="px-5 py-1 text-xl font-semibold min-w-60 text-secondary bg-premier">
            Lihat Semua ❯
          </button>
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
