import { createContext, useCallback, useMemo, useState } from "react";
import orders from "../../../data/orders.json";

const FiltersContext = createContext();

export const FiltersProvider = ({ children }) => {
  const ordersData = useMemo(() => orders, []);
  const [chosenDates, setChosenDates] = useState([]);
  const [chosenTypes, setChosenTypes] = useState([]);
  const [chosenStatus, setChosenStatus] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [openFilter, setOpenFilter] = useState(null);
  const dataWillDisplay = useMemo(() => {
    return filteredOrders.length ? filteredOrders : ordersData;
  }, [filteredOrders, ordersData]);
  // toggle chosen filter (date, type, status)
  const toggleChosenFilter = (filterType, filterTypeSetter, item) => {
    const isChosen = filterType.includes(item);
    filterTypeSetter((prev) =>
      isChosen ? prev.filter((t) => t !== item) : [...prev, item],
    );
  };
  // for open / close filters
  const toggleFilter = (e) => {
    /* tricky hint : use currentTarget to get the button id 
    whatever if i clicked on icon or text 
    (while e.target dose not work efficient when there is icon inside button) */

    const id = e.currentTarget.id;
    setOpenFilter((currOpen) => (currOpen === id ? null : id));
  };

  // Helper: Display format for the UI "14 Oct 2024"
  const formatDisplayDate = (date) => {
    const dateObj = new Date(date);
    return dateObj.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // filter handle (date, type, status)
  const filterHandle = useCallback(() => {
    if (!ordersData) return;

    setFilteredOrders(
      ordersData.filter((order) => {
        const matchesDate =
          chosenDates.length === 0 ||
          chosenDates.includes(formatDisplayDate(order.date));
        const matchesType =
          chosenTypes.length === 0 || chosenTypes.includes(order.type);
        const matchesStatus =
          chosenStatus.length === 0 || chosenStatus.includes(order.status);
        return matchesDate && matchesType && matchesStatus;
      }),
    );
    setOpenFilter(null);
  }, [chosenDates, chosenTypes, chosenStatus, ordersData]);

  const resetAllFilters = () => {
    setFilteredOrders([]);
    setChosenDates([]);
    setChosenTypes([]);
    setChosenStatus([]);
    setOpenFilter(null);
  };

  return (
    <FiltersContext.Provider
      value={{
        ordersData,
        chosenDates,
        chosenTypes,
        chosenStatus,
        openFilter,
        dataWillDisplay,
        filteredOrders,
        setChosenDates,
        setChosenTypes,
        setChosenStatus,
        toggleChosenFilter,
        formatDisplayDate,
        filterHandle,
        setOpenFilter,
        resetAllFilters,
        toggleFilter,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export { FiltersContext }; // Export context separately
