import React from "react";

import Image from "next/image";

import category1 from "@/public/images/category/svg-1.svg";
import category2 from "@/public/images/category/svg-2.svg";
import category3 from "@/public/images/category/svg-3.svg";
import category4 from "@/public/images/category/svg-4.svg";
import category5 from "@/public/images/category/svg-5.svg";
import category6 from "@/public/images/category/svg-6.svg";
import category7 from "@/public/images/category/svg-7.svg";
import category8 from "@/public/images/category/svg-8.svg";
import category9 from "@/public/images/category/svg-9.svg";
import category10 from "@/public/images/category/svg-10.svg";
import category11 from "@/public/images/category/svg-11.svg";
import category12 from "@/public/images/category/svg-12.svg";
import category13 from "@/public/images/category/svg-13.svg";
import category14 from "@/public/images/category/svg-14.svg";

const Category = () => {
  return (
    <section className="mb-5">
      <h3 className="text-[25px] text-[#666666] font-thin mb-4">
        Categorías populares
      </h3>
      <div className="bg-white grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7">
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category1}
            alt="Icono carro"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Carros, Motos y Otros
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category2}
            alt="Icono computadora"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Computación
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category3}
            alt="Icono camiseta"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Ropa y Accesorios
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category4}
            alt="Icono sofa"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Hogar y Muebles
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category5}
            alt="Icono manubrio de carro"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Accesorios para Vehículos
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category6}
            alt="Icono lavadora"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Electrodomésticos
          </span>
        </button>
        <button className="border-solid border-b-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category7}
            alt="Icono carro"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Cámaras y Accesorios
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category8}
            alt="Icono celular"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Celulares y Teléfonos
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category9}
            alt="Icono labial"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Belleza y Cuidado Personal
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category10}
            alt="Icono balon"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Deportes y Fitness
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category11}
            alt="Icono microfono"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Electrónica, Audio y Video
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category12}
            alt="Icono consola de videojuego"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Consolas y Videojuegos
          </span>
        </button>
        <button className="border-solid border-b-[1px] border-r-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category13}
            alt="Icono oso"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Juegos y Juguetes
          </span>
        </button>
        <button className="border-solid border-b-[1px] py-11 px-3 grid">
          <Image
            className="mx-auto mb-3"
            src={category14}
            alt="Icono llave de herramienta"
            width={48}
            height={48}
          />
          <span className="text-[14px] text-[#333333] mx-auto w-full text-center">
            Herramientas
          </span>
        </button>
      </div>
    </section>
  );
};

export default Category;
