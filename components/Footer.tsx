import React from "react";

import Image from "next/image";
import Link from "next/link";

import card from "@/public/images/Pago.svg";
import shipping from "@/public/images/Group-16.svg";
import safePayment from "@/public/images/Compra-protegida.svg";
import pum from "@/public/images/pum.png";
import sic from "@/public/images/sic.png";

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      <div className="grid grid-cols-3 text-center px-48 pt-20 pb-14 w-full">
        <div className="relative flex flex-col align-middle justify-center px-10 after:content[''] after:absolute after:right-0 after:bg-[#E2E2E2] after:h-1/3 after:w-[1px]">
          <Image
            className="mx-auto mb-5"
            src={card}
            alt="Icono tarjeta de credito"
          />
          <h3 className="text-[19px] mb-1">Cómo pagar con Mercado Pago</h3>
          <p className="text-[#999999] text-[15px] mb-2 font-light">
            Con Mercado Pago, paga en cuotas y aprovecha la comodidad de
            financiación que te da tu banco, o hazlo con efectivo en puntos de
            pago. ¡Y siempre es seguro!
          </p>
          <Link
            className="text-link font-normal text-[13px] cursor-pointer"
            href="#"
          >
            Cómo pagar con Mercado Pago
          </Link>
        </div>
        <div className="relative flex flex-col align-middle justify-center px-10 after:content[''] after:absolute after:right-0 after:bg-[#E2E2E2] after:h-1/3 after:w-[1px]">
          <Image className="mx-auto mb-5" src={shipping} alt="Icono envio" />
          <h3 className="text-[19px] mb-1">Envío gratis desde $ 90.000</h3>
          <p className="text-[#999999] text-[15px] mb-2 font-light">
            Con solo estar registrado en Mercado Libre, tienes envíos gratis en
            miles de productos seleccionados.
          </p>
          <Link
            className="text-link font-normal text-[13px] cursor-pointer"
            href="#"
          >
            Conoce más sobre este beneficio
          </Link>
        </div>
        <div className="flex flex-col px-10">
          <Image
            className="mx-auto mb-5"
            src={safePayment}
            alt="Icono compra segura"
          />
          <h3 className="text-[19px] mb-1">Seguridad, de principio a fin</h3>
          <p className="text-[#999999] text-[15px] mb-2 font-light">
            ¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no
            puedas hacer, porque estás siempre protegido.
          </p>
          <Link
            className="text-link font-normal text-[13px] cursor-pointer"
            href="#"
          >
            Cómo te protegemos
          </Link>
        </div>
      </div>
      <div className="p-5 border-t px-40">
        <div className="text-[12px] pb-3 border-solid border-b-[1px]">
          <div className="flex gap-5 mb-2">
            <button>Trabaja con nosotros</button>
            <button>Términos y condiciones</button>
            <button>Cómo cuidamos tu privacidad</button>
            <button>Accesibilidad</button>
            <button>Ayuda / PQR</button>
            <button>www.sic.gov.co</button>
          </div>
          <span className="text-[#999999] block">
            Copyright © 1999-2023 MercadoLibre Colombia LTDA.
          </span>
          <span className="text-[#999999] block">
            Carrera 17 Numero 93 - 09 Piso 3, Bogotá D.C., Colombia
          </span>
        </div>
        <div className="flex mb-11">
          <Image
            className="pr-6 pt-5"
            src={sic}
            alt="Logo de la sic"
            height={30}
          />
          <Image
            className="pt-5"
            src={pum}
            alt="Logo de pare y compare"
            height={34}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
