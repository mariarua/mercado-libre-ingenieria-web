import React from "react";

import Image from "next/image";

import lego from "@/public/lego.svg";
import xiaomi from "@/public/xiaomi.svg";
import oster from "@/public/oster.svg";
import nikon from "@/public/nikon.svg";

const Branches = () => {
  return (
    <section className="mb-28">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">
        Las mejores tiendas te esperan{" "}
        <span className="ml-4 text-[15px] text-link font-light cursor-pointer">
          Ver todas las tiendas
        </span>
      </h3>
      <div className="flex gap-4">
        <Image className="" src={lego} alt="Marca lego" />
        <Image className="" src={xiaomi} alt="Marca xiaomi" />
        <Image className="" src={oster} alt="Marca oster" />
        <Image className="" src={nikon} alt="Marca nikon" />
      </div>
    </section>
  );
};

export default Branches;
