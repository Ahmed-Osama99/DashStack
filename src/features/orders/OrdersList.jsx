import { useFilters } from "./hooks/useFilters";
import FiltersContainer from "./components/FiltersContainer";
import OrderItem from "./components/OrderItem";
import { usePagination } from "../../hooks/usePagination";
import { useEffect } from "react";
import TablePagination from "../../components/TablePagination";

const OrdersList = () => {
  const { dataWillDisplay } = useFilters();

  const {
    pageData,
    startIndex,
    nextPage,
    prevPage,
    setCurrentPage,
    endOfPage,
    totalItems,
  } = usePagination(dataWillDisplay, 9);

  // Reset pagination when data changes (filters applied)
  useEffect(() => {
    setCurrentPage(0);
  }, [dataWillDisplay, setCurrentPage]);

  return (
    <main id="orders" className="dashboard-main">
      <h1 className="page-head">Orders List</h1>
      <FiltersContainer />
      {/* table area */}
      <div className="overflow-x-auto bg-card rounded-xl border border-border">
        <table className="w-full text-left text-text">
          <thead className="bg-table-head text-xs uppercase font-medium text-text">
            <tr>
              <th scope="col" className="px-6 py-4">
                Id
              </th>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Address
              </th>
              <th scope="col" className="px-6 py-4">
                Date
              </th>
              <th scope="col" className="px-6 py-4">
                Type
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-table-border">
            {pageData.map((order) => (
              <OrderItem order={order} key={order.id} />
            ))}
          </tbody>
        </table>
      </div>
      <TablePagination
        startIndex={startIndex}
        endOfPage={endOfPage}
        totalItems={totalItems}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </main>
  );
};

export default OrdersList;
