import React from "react";

import Image from "next/image";

import BranchCard from "./BranchCard";

import legoBanner from "@/public/images/lego/banner.jpg";
import legoLogo from "@/public/images/lego/logo.jpg";
import legoProduct1 from "@/public/images/lego/product-1.jpg";
import legoProduct2 from "@/public/images/lego/product-2.jpg";
import legoProduct3 from "@/public/images/lego/product-3.jpg";

import xiaomiBanner from "@/public/images/xiaomi/banner.jpg";
import xiaomiLogo from "@/public/images/xiaomi/logo.jpg";
import xiaomiProduct1 from "@/public/images/xiaomi/product-1.jpg";
import xiaomiProduct2 from "@/public/images/xiaomi/product-2.jpg";
import xiaomiProduct3 from "@/public/images/xiaomi/product-3.jpg";

import osterBanner from "@/public/images/oster/banner.jpg";
import osterLogo from "@/public/images/oster/logo.jpg";
import osterProduct1 from "@/public/images/oster/product-1.jpg";
import osterProduct2 from "@/public/images/oster/product-2.jpg";
import osterProduct3 from "@/public/images/oster/product-3.jpg";

import nikonBanner from "@/public/images/nikon/banner.jpg";
import nikonLogo from "@/public/images/nikon/logo.jpg";
import nikonProduct1 from "@/public/images/nikon/product-1.jpg";
import nikonProduct2 from "@/public/images/nikon/product-2.jpg";
import nikonProduct3 from "@/public/images/nikon/product-3.jpg";

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
        <BranchCard
          srcBanner={legoBanner}
          altBanner="Banner de legos"
          srcLogo={legoLogo}
          altLogo="logo de lego"
          srcProduct1={legoProduct1}
          altProduct1="Motocicleta en lego"
          srcProduct2={legoProduct2}
          altProduct2="Transformer en lego"
          srcProduct3={legoProduct3}
          altProduct3="Carro en lego"
          companyName="Lego"
        />
        <BranchCard
          srcBanner={xiaomiBanner}
          altBanner="Banner de color naranja"
          srcLogo={xiaomiLogo}
          altLogo="logo de xiami"
          srcProduct1={xiaomiProduct1}
          altProduct1="Reloj inteligente"
          srcProduct2={xiaomiProduct2}
          altProduct2="Scooter de xiami"
          srcProduct3={xiaomiProduct3}
          altProduct3="Scooter de xiaomi"
          companyName="Xiaomi"
        />
        <BranchCard
          srcBanner={osterBanner}
          altBanner="Banner de una cocina con un olla"
          srcLogo={osterLogo}
          altLogo="logo de oster"
          srcProduct1={osterProduct1}
          altProduct1="Plato para revolver"
          srcProduct2={osterProduct2}
          altProduct2="Licuadora"
          srcProduct3={osterProduct3}
          altProduct3="Olla arrocera"
          companyName="Oster"
        />
        <BranchCard
          srcBanner={nikonBanner}
          altBanner="Banner de color gris"
          srcLogo={nikonLogo}
          altLogo="logo de nikon"
          srcProduct1={nikonProduct1}
          altProduct1="Imagen cables"
          srcProduct2={nikonProduct2}
          altProduct2="Imagen cables"
          srcProduct3={nikonProduct3}
          altProduct3="Imagen camara"
          companyName="Oster"
        />
      </div>
    </section>
  );
};

export default Branches;
