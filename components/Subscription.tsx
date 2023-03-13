import React from "react";

import Image from "next/image";

import subscription from "@/public/images/subscription.svg";
import disney from "@/public/images/logo-disney.svg";
import star from "@/public/images/logo-star.svg";
import shipping from "@/public/images/shipping.svg";

const Subscription = () => {
  return (
    <section className="bg-white rounded-[4px] text-[15px] shadow-extranarrow mb-20">
      <Image
        className="w-full rounded-t-[4px]"
        src={subscription}
        alt="Banner de suscripciones"
      />
      <p className="px-5 pt-6 pb-8">
        Consigue los mejores beneficios en Mercado libre
      </p>
      <div className="flex justify-between pb-6 border-solid border-b-[1px]">
        <div className="flex items-center gap-4 ml-6">
          <Image className="" src={disney} alt="Logo disney+" />
          <span>Disney+ sin cargo</span>
        </div>
        <div className="flex items-center gap-4">
          <Image className="" src={star} alt="Logo star+" />
          <span>Star+ sin cargo</span>
        </div>
        <div className="flex items-center gap-4 w-[330px] mr-14">
          <Image className="" src={shipping} alt="Icono carro para envios" />
          <p className="text-justify">
            Envíos gratis y rápidos desde $90.000 y 40% OFF en envíos de menos
            de $90.000
          </p>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="bg-link text-white py-3 px-6 rounded-lg m-4 mr-8">
          Suscríbete
        </button>
      </div>
    </section>
  );
};

export default Subscription;
