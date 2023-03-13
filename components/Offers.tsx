import React from "react";

import ProductCard from "./ProductCard";

const Offers = () => {
  return (
    <div>
      <h3 className="text-[25px] text-[#666666] font-thin">
        Ofertas{" "}
        <span className="ml-4 text-[15px] text-link font-light cursor-pointer">
          Ver todas
        </span>
      </h3>
      <div className="flex">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default Offers;
