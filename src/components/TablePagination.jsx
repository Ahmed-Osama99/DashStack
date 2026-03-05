import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const TablePagination = ({
  startIndex,
  endOfPage,
  totalItems,
  prevPage,
  nextPage,
}) => {
  return (
    <div className="mt-6 flex justify-between items-center">
      <p className="text-muted">
        Showing {startIndex + 1}-{endOfPage} of {totalItems}
      </p>
      <div className="flex divide-x divide-border rounded-sm overflow-hidden">
        <button
          onClick={prevPage}
          disabled={startIndex === 0}
          className="px-2 py-1 bg-card hover:bg-card/30 transition-colors disabled:opacity-30 disabled:cursor-no-drop"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <button
          onClick={nextPage}
          disabled={totalItems === endOfPage}
          className="px-2 py-1 bg-card hover:bg-card/30 transition-colors disabled:opacity-30 disabled:cursor-no-drop"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
