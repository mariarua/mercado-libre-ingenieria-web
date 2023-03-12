import React from "react";

const SearchBar = () => {
  return (
    <div className="w-[598px] bg-white rounded-sm shadow-narrow py-2 mx-14">
      <input
        className="w-[552px] text-[15px] border-solid  border-r-[1px] px-4"
        type="text"
        placeholder="Buscar productos, marcas y más..."
      />
    </div>
  );
};

export default SearchBar;
