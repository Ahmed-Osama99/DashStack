import { useFilters } from "../hooks/useFilters";

const FilterWrapper = ({ id, children, action, disabled }) => {
  const { openFilter } = useFilters();
  return (
    <div
      id={id}
      className={`bg-card text-sm min-w-[350px] p-4 rounded-3xl divide-y divide-border absolute top-full z-50 ${openFilter === id ? "block" : "hidden"}`}
    >
      {children}
      {/* Footer */}
      <div className="pt-4">
        <p className="text-muted text-xs text-center">
          *You can choose multiple dates
        </p>
        <button
          className="w-1/2 mx-auto py-2 px-4 bg-primary rounded-lg text-sm mt-4 block cursor-pointer hover:opacity-90 transition-opacity font-semibold disabled:opacity-90 disabled:cursor-no-drop"
          disabled={disabled}
          onClick={action}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default FilterWrapper;
