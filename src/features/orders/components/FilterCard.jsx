const FilterCard = ({ content, onClick, className }) => {
  return (
    <button
      className={`border border-border p-2 px-4 w-fit rounded-full hover:border-primary transition-colors capitalize ${className}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default FilterCard;
