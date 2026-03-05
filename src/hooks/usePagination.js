import { useMemo, useState } from "react";

export const usePagination = (data, itemsPerPage = 9) => {
  const safeData = useMemo(() => (Array.isArray(data) ? data : []), [data]);
  const totalItems = safeData.length;
  const [currentPage, setCurrentPage] = useState(0);
  const startIndex = currentPage * itemsPerPage;
  const pageData = safeData.slice(startIndex, startIndex + itemsPerPage);
  const nextPage = () => {
    if (startIndex + itemsPerPage < totalItems)
      setCurrentPage((p) => p + 1);
  };

  const prevPage = () => {
    if (startIndex > 0) setCurrentPage((p) => p - 1);
  };
  const endOfPage = useMemo(() => {
    const range = startIndex + itemsPerPage;
    if (range > totalItems) {
      return totalItems;
    }
    return range;
  }, [startIndex, totalItems, itemsPerPage]);
  return {
    pageData,
    currentPage,
    startIndex,
    totalItems,
    setCurrentPage,
    nextPage,
    prevPage,
    endOfPage,
  };
};
