import React from "react";

import Image from "next/image";

import disney from "@/public/images/ad-disney.svg";
import hbo from "@/public/images/ad-hbo.svg";
import paramount from "@/public/images/ad-paramount.svg";

const Ad = () => {
  return (
    <section className="mb-24">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">
        Beneficios de Mercado puntos{" "}
        <span className="ml-4 text-[15px] text-link font-light cursor-pointer">
          Ver todos los beneficios
        </span>
      </h3>
      <div className="grid grid-cols-3 text-center gap-4">
        <Image className="w-full" src={disney} alt="Anuncio de disney+" />
        <Image className="w-full" src={hbo} alt="Anuncio de hbo+" />
        <Image className="w-full" src={paramount} alt="Anuncio de paramount+" />
      </div>
    </section>
  );
};

export default Ad;
