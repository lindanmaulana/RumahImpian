import { useState } from "react";
import PaginationSistem from "./FiturPaginationSistem";

const FiturPagination = () => {
  const [pages, setPages] = useState(1);
  const totalPages = 5;

  
  const handleCLick = (params) => {
    if (params > 0 && params <= totalPages) {
      setPages(params);
    }
  };
  return (
        <PaginationSistem totalPages={totalPages} current={pages} onChangePage={handleCLick} />
  );
};

export default FiturPagination;
