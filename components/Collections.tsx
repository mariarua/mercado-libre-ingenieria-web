import React from "react";

import Image from "next/image";

import product1 from "@/public/images/collections/product-1.jpg";
import product2 from "@/public/images/collections/product-2.jpg";
import product3 from "@/public/images/collections/product-3.jpg";
import product4 from "@/public/images/collections/product-4.jpg";
import product5 from "@/public/images/collections/product-5.jpg";
import product6 from "@/public/images/collections/product-6.jpg";
import product7 from "@/public/images/collections/product-7.jpg";
import product8 from "@/public/images/collections/product-8.jpg";
import product9 from "@/public/images/collections/product-9.jpg";

const Collections = () => {
  return (
    <section className="mb-20">
      <div className="mb-6">
        <h3 className="text-[25px] text-[#666666] font-thin mb-4">
          Colecciones:
          <select
            className="bg-homepage px-2 font-medium"
            name="Category"
            id="Category"
            defaultValue={"Default"}
          >
            <option id="Default">Supermercado</option>
          </select>
        </h3>
      </div>

      <div className="flex gap-4">
        <div className="bg-white shadow-extranarrow">
          <Image
            className="rounded-t-[4px]"
            src={product1}
            alt="Imagen promocional de supermercados"
            width={380}
            height={280}
          />
          <div className="px-4 py-5">
            <span className="uppercase text-xs tracking-[0.3em] text-[#4B4B4B] block mb-3">
              Descubre
            </span>
            <span className="uppercase text-[27px] text-[#4B4B4B] block leading-5">
              Supermercado
            </span>
          </div>
        </div>
        <div className="gap-4">
          <div className="flex gap-4 mb-4">
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product2}
              alt="Imagen producto eucerin"
              width={184}
              height={184}
            />
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product3}
              alt="Imagen producto cicatricure"
              width={184}
              height={184}
            />
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product4}
              alt="Imagen producto nivea"
              width={184}
              height={184}
            />
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product5}
              alt="Imagen producto cicatricure"
              width={184}
              height={184}
            />
          </div>
          <div className="flex gap-4">
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product6}
              alt="Imagen producto nissin"
              width={184}
              height={184}
            />
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product7}
              alt="Imagen producto la lico"
              width={184}
              height={184}
            />
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product8}
              alt="Imagen producto eucerin"
              width={184}
              height={184}
            />
            <Image
              className="rounded-t-[4px] shadow-extranarrow"
              src={product9}
              alt="Imagen producto tio nacho"
              width={184}
              height={184}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collections;
