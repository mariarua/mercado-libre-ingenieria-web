import React from "react";

import Image from "next/image";

import disney from "@/public/ad-disney.svg";
import hbo from "@/public/ad-hbo.svg";
import paramount from "@/public/ad-paramount.svg";

const Ad = () => {
  return (
    <section className="mb-24">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">
        Beneficios de Mercado puntos{" "}
        <span className="ml-4 text-[15px] text-link font-light cursor-pointer">
          Ver todos los beneficios
        </span>
      </h3>
      <div className="flex gap-4">
        <Image
          className=""
          src={disney}
          alt="Anuncio de disney+"
          width={384}
          height={255}
        />
        <Image
          className=""
          src={hbo}
          alt="Anuncio de hbo+"
          width={384}
          height={255}
        />
        <Image
          className=""
          src={paramount}
          alt="Anuncio de paramount+"
          width={384}
          height={255}
        />
      </div>
    </section>
  );
};

export default Ad;
