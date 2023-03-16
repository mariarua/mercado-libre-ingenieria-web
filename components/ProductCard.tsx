import React from "react";

import Image from "next/image";

import product from "@/public/images/product-chair.svg";
import fullIcon from "@/public/images/full.svg";

type ProductCardProps = {
  src: string;
  price: string;
  offer: string;
  shipping?: boolean;
  full?: boolean;
};

const ProductCard = ({
  src = product,
  price = "210.900",
  offer = "32% OFF",
  shipping = false,
  full = false,
}: ProductCardProps) => {
  return (
    <article className="bg-white shadow-extranarrow rounded-[4px]">
      <Image
        className="border-solid border-b-[1px] w-full"
        src={src}
        alt="Imagen silla de escritorio"
      />
      <div className="ml-4 mt-5">
        <div>
          <span className="text-[23px] mr-3">${price}</span>
          <span className="text-[14px] text-offers font-light">{offer}</span>
        </div>
        <div className="flex pb-14">
          {shipping && (
            <span className="text-[13px] text-offers mr-1">Envío gratis</span>
          )}
          {full && <Image className="" src={fullIcon} alt="Full" />}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
