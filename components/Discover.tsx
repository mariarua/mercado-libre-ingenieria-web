import React from "react";

import Image from "next/image";

import furniture from "@/public/discover-furniture.svg";
import subscription from "@/public/discover-subscription.svg";

const Discover = () => {
  return (
    <section className="mb-14">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">Descubre </h3>
      <div className="flex gap-4">
        <Image
          className=""
          src={furniture}
          alt="Anuncio de ofertas en muebles"
        />
        <Image
          className=""
          src={subscription}
          alt="Anuncio de ofertas en suscripciones"
        />
      </div>
    </section>
  );
};

export default Discover;
