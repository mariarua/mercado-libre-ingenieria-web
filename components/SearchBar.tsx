import React from "react";

const SearchBar = () => {
  return (
    <div className="flex items-center relative w-[598px] bg-white rounded-sm shadow-narrow ml-14 after:content[''] after:absolute after:right-10 after:bg-[#E2E2E2] after:h-[25px] after:w-[1px]">
      <input
        className="w-full h-full text-[15px] px-4 py-2"
        type="text"
        placeholder="Buscar productos, marcas y más..."
      />
    </div>
  );
};

export default SearchBar;
