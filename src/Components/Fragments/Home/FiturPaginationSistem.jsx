const FiturPaginationSistem = (props) => {
  const { totalPages, current, onChangePage } = props;

  const images = [
    "fitur1.png",
    "fitur2.png",
    "fitur3.png",
    "fitur4.png",
    "fitur5.png",
  ];

  // const IsiRuangan = [
  //   {
  //     id: 1,
  //     ruangan: "Ruang TV",
  //     type: "Rumah Minimalis Type-A2",
  //     idr: "IDR.200JT",
  //   },
  //   {
  //     id: 2,
  //     ruangan: "Kamar Tidur",
  //     type: "Rumah Minimalis Type-A2",
  //     idr: "IDR.190JT",
  //   },
  //   {
  //     id: 3,
  //     ruangan: "Ruang Dapur",
  //     type: "Rumah Minimalis Type-A2",
  //     idr: "IDR.220JT",
  //   },
  //   {
  //     id: 4,
  //     ruangan: "",
  //     type: "",
  //     idr: "",
  //   },
  //   {
  //     id: 5,
  //     ruangan: "",
  //     type: "",
  //     idr: "",
  //   },
  // ];

  const renderContent = () => {
    const element = [];
    for (let i = 1; i <= totalPages; i++) {
      element.push(
        <button
          onClick={() => onChangePage(i)}
          className={`w-60 h-72 ${
            i === current ? "opacity-100" : "opacity-50"
          } relative overflow-hidden`}
        >
          <div className={`absolute top-0 right-0 z-50 flex flex-col items-center justify-center w-full h-full transition-global group ${i === current ? "hover:bg-black/70" : ""}`}>
            <h2
              className={`text-xl font-semibold text-secondary ${
                i === current
                  ? "group-hover:translate-y-0 group-hover:opacity-100"
                  : ""
              } -translate-y-full transition-global opacity-0`}
            >
              Kamar tidur
            </h2>
            <p
              className={`opacity-0 text-sm ${
                i === current
                  ? "translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                  : ""
              } transition-global text-secondary`}
            >
              Rumah Minimalis Type-A2
            </p>
            <p
              className={`opacity-0 font-semibold ${
                i === current
                  ? "translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                  : ""
              } transition-global text-md text-secondary`}
            >
              IDR.200JT
            </p>
          </div>
          <img
            src={`/img/icons/${images[i - 1]}`}
            alt={`fitur ${i}`}
            className="absolute top-0 right-0 w-full h-full "
          />
        </button>
      );
    }

    return element;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full gap-y-2">
        <div className="flex flex-wrap items-center justify-center w-full">
          {renderContent()}
        </div>
        <div className="flex gap-x-4">
          <button
            onClick={() => onChangePage(current - 1)}
            className="px-4 py-1 text-3xl rounded-full text-secondary bg-premier"
          >
            ❮
          </button>
          <button
            onClick={() => onChangePage(current + 1)}
            className="px-4 py-1 text-3xl rounded-full text-secondary bg-premier"
          >
            ❯
          </button>
        </div>
      </div>
    </>
  );
};

export default FiturPaginationSistem;
