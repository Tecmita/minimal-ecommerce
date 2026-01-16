import { MagnifyingGlass } from "phosphor-react";

const SearchFilter = ({ open, setOpen }) => {
  return (
    <button onClick={() => setOpen(!open)} className="p-1" aria-label="Buscar">
      <MagnifyingGlass size={20} />
    </button>
  );
};

export default SearchFilter;
