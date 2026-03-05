import { useMemo } from "react";
import { useFilters } from "../hooks/useFilters";
import FilterWrapper from "./FilterWrapper";
import FilterCard from "./FilterCard";

const OrderStatusFilter = () => {
  const {
    ordersData,
    chosenStatus,
    setChosenStatus,
    filterHandle,
    toggleChosenFilter,
  } = useFilters();
  const ordersStatus = useMemo(() => {
    return [...new Set(ordersData.map((order) => order.status))];
  }, [ordersData]);
  return (
    <FilterWrapper
      id="status"
      disabled={!chosenStatus.length}
      action={filterHandle}
    >
      {/* Header */}
      <h2 className="grow font-bold text-lg pb-4">Select Order Status</h2>
      <div className="flex flex-wrap gap-2 py-4">
        {ordersStatus.map((status) => (
          <FilterCard
            key={status}
            content={status}
            onClick={() =>
              toggleChosenFilter(chosenStatus, setChosenStatus, status)
            }
            className={chosenStatus.includes(status) && "bg-primary"}
          />
        ))}
      </div>
    </FilterWrapper>
  );
};

export default OrderStatusFilter;
