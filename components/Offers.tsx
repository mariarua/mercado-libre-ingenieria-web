import React from "react";

import ProductCard from "./ProductCard";

import chair from "@/public/images/product-chair.svg";
import microphone from "@/public/images/product-microphone.svg";
import shaver from "@/public/images/product-shaver.svg";
import closet from "@/public/images/product-closet.svg";
import curtains from "@/public/images/product-curtains.svg";

const Offers = () => {
  return (
    <div className="mb-14 w-desktop max-w-full">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">
        Ofertas{" "}
        <span className="ml-4 text-[15px] text-link font-light cursor-pointer">
          Ver todas
        </span>
      </h3>
      <div className="grid grid-cols-5 gap-4">
        <ProductCard
          src={chair}
          price="210.900"
          offer="32% OFF"
          shipping={true}
          full={false}
        />
        <ProductCard
          src={microphone}
          price="74.990"
          offer="25% OFF"
          shipping={true}
          full={true}
        />
        <ProductCard
          src={shaver}
          price="134.950"
          offer="50% OFF"
          shipping={true}
          full={false}
        />
        <ProductCard
          src={closet}
          price="149.900"
          offer="30% OFF"
          shipping={true}
          full={false}
        />
        <ProductCard
          src={curtains}
          price="69.990"
          offer="17% OFF"
          shipping={false}
          full={true}
        />
      </div>
    </div>
  );
};

export default Offers;
