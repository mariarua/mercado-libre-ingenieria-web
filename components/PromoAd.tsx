import React from "react";

import Image, { StaticImageData } from "next/image";

import furniture from "@/public/images/discover-furniture.jpg";

type PromoAdProps = {
  src: StaticImageData | string;
  alt: string;
  title: string;
  promo1: string;
  promo2: string;
  buttonText: string;
};

const PromoAd = ({
  src = furniture,
  alt = "Promocion de muebles",
  title = "Renueva tus espacios",
  promo1 = "Por solo",
  promo2 = "$17.899 cada mes",
  buttonText = "Ver más",
}: PromoAdProps) => {
  return (
    <div className="bg-white flex justify-between rounded-[4px] shadow-extranarrow w-full w-max-[585px]">
      <div className="items-center pl-8 pr-7 py-14 font-medium">
        <span className="uppercase text-xs tracking-[0.3em] text-[#4B4B4B] block mb-3">
          {title}
        </span>
        <span className="uppercase text-[28px] text-[#4B4B4B] block leading-5">
          {promo1}
        </span>
        <span className="uppercase text-[28px] text-[#4B4B4B] block mb-4">
          {promo2}
        </span>
        <button className="bg-link text-white py-3 px-6 rounded-sm">
          {buttonText}
        </button>
      </div>
      <Image className="rounded-[4px]" src={src} alt={alt} height={250} />
    </div>
  );
};

export default PromoAd;
