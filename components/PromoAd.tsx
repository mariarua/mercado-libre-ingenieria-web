import React from "react";
import cn from "clsx";

import Image, { StaticImageData } from "next/image";

import furniture from "@/public/images/discover-furniture.jpg";

type PromoAdProps = {
  className?: string;
  src: StaticImageData | string;
  alt: string;
  title: string;
  promo1: string;
  promo2: string;
  buttonText: string;
};

const PromoAd = ({
  className = "",
  src = furniture,
  alt = "Promocion de muebles",
  title = "Renueva tus espacios",
  promo1 = "Por solo",
  promo2 = "$17.899 cada mes",
  buttonText = "Ver más",
}: PromoAdProps) => {
  return (
    <div
      className={cn(
        "bg-white flex justify-between rounded-m shadow-extranarrow",
        className
      )}
    >
      <div className="flex flex-col justify-center px-5 font-medium w-1/2">
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
      <div className="w-1/2 flex justify-end">
        <Image
          className="rounded-m w-auto h-full object-cover object-left"
          src={src}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default PromoAd;
