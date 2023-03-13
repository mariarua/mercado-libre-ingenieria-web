import React from "react";

import Image from "next/image";

import product from "@/public/product-chair.svg";
import full from "@/public/full.svg";

const ProductCard = () => {
  return (
    <article className="bg-white shadow-extranarrow rounded-sm">
      <Image
        className="border-solid border-b-[1px]"
        src={product}
        alt="Imagen silla de escritorio"
        width={224}
        height={224}
      />
      <div className="ml-4 mt-5 ">
        <div>
          <span className="text-[23px] mr-3">$210.900</span>
          <span className="text-[14px] text-offers font-light">32% OFF</span>
        </div>
        <div className="flex pb-14">
          <span className="text-[13px] text-offers mr-1">Envío gratis</span>
          <Image className="" src={full} alt="Full" />
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
