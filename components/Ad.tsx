import React from "react";

import Image from "next/image";

import logostar from "../public/images/ad/disney-star-logo.svg";
import logohbo from "../public/images/ad/hbo-logo.svg";
import logoparamount from "../public/images/ad/paramount-logo.svg";

const Ad = () => {
  return (
    <section className="mb-24 w-full h-full">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">
        Beneficios de Mercado puntos{" "}
        <span className="ml-4 text-[15px] text-link font-light cursor-pointer">
          Ver todos los beneficios
        </span>
      </h3>
      <div className="grid grid-cols-3 text-center gap-4">
        <div className="bg-star rounded-m text-white bg-cover h-[250px] bg-no-repeat">
          <div className="bg-shadowstar w-full items-end h-full flex rounded-m">
            <div className="flex items-center p-2 gap-4">
              <Image className="" src={logostar} alt="Logo disney+ y star+" />
              <div className="flex flex-col text-left leading-6">
                <span className="text-[22px]">Sin cargo con el nivel 6</span>
                <span className="font-light text-[15px]">Disney+ y Star+</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-hbo rounded-m text-white bg-cover h-[250px] bg-no-repeat">
          <div className="bg-shadowhbo w-full items-end h-full flex rounded-m">
            <div className="flex items-center p-2 gap-4">
              <Image className="" src={logohbo} alt="Logo hbo" />
              <div className="flex flex-col text-left leading-6">
                <span className="text-[11px]">7 DÍAS GRATIS</span>
                <span className="text-[22px]">Hasta 50% OFF</span>
                <span className="font-light text-[15px]">HBO Max</span>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-paramount rounded-m text-white bg-cover h-[250px] bg-no-repeat">
          <div className="bg-shadowparamount w-full items-end h-full flex rounded-m">
            <div className="flex items-center p-2 gap-4">
              <Image className="" src={logoparamount} alt="Logo paramount" />
              <div className="flex flex-col text-left leading-6">
                <span className="text-[11px]">7 DÍAS GRATIS</span>
                <span className="text-[22px]">Hasta 50% OFF</span>
                <span className="font-light text-[15px]">Paramount+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ad;
