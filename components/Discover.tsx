import React from "react";

import Image from "next/image";

import furniture from "@/public/discover-furniture.svg";
import subscription from "@/public/discover-subscription.svg";

const Discover = () => {
  return (
    <section className="flex gap-4">
      <Image
        className=""
        src={furniture}
        alt="Anuncio de ofertas en muebles+"
      />
      <Image
        className=""
        src={subscription}
        alt="Anuncio de ofertas en suscripciones"
      />
    </section>
  );
};

export default Discover;
