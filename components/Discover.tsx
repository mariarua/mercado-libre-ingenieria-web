import React from "react";

import PromoAd from "./PromoAd";

import furniture from "@/public/images/discover-furniture.jpg";
import subscription from "@/public/images/discover-subscription.jpg";

const Discover = () => {
  return (
    <section className="mb-14 w-full">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">Descubre </h3>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <PromoAd
          src={furniture}
          alt="Promocion de muebles"
          title="Renueva tus espacios"
          promo1="Hogar y muebles"
          promo2="Hasta 50% off"
          buttonText="Ver más"
        />
        <PromoAd
          src={subscription}
          alt="Promocion de suscribciones"
          title="Suscríbete al nivel 6"
          promo1="Por solo"
          promo2="$17.899 cada mes"
          buttonText="Suscríbete"
        />
      </div>
    </section>
  );
};

export default Discover;
