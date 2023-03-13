import React from "react";

import Link from "next/link";
import Image from "next/image";

import creditcard from "@/public/images/credit-card.svg";
import transfer from "@/public/images/transfer.svg";
import paymentagreement from "@/public/images/payment-agreement.svg";
import viewmore from "@/public/images/view-more.svg";

const PaymentInfo = () => {
  return (
    <section className="flex justify-between bg-white rounded-[4px] mb-12 shadow-extranarrow text-[15px]">
      <div className="flex cursor-pointer mr-20">
        <Image
          className="mx-5 mt-4 mb-5"
          src={creditcard}
          alt="Icono de la tarjeta de credito"
        />
        <div className="flex flex-col justify-center">
          <span>Hasta 48 cuotas</span>
          <Link className="text-[13px] text-link" href="/">
            Ver más
          </Link>
        </div>
      </div>
      <div className="flex cursor-pointer">
        <Image className="mx-5" src={transfer} alt="Icono de banco" />
        <div className="flex flex-col justify-center">
          <span>Transferencia desde tu banco</span>
          <Link className="text-[13px] text-link" href="/">
            Ver más
          </Link>
        </div>
      </div>
      <div className="flex cursor-pointer">
        <Image
          className="mx-5"
          src={paymentagreement}
          alt="Icono de pago en efectivo"
        />
        <div className="flex flex-col justify-center">
          <span>Paga en efectivo</span>
          <Link className="text-[13px] text-link" href="/">
            Ver más
          </Link>
        </div>
      </div>
      <div className="flex border-solid border-l-[1px]">
        <Image className="mx-5" src={viewmore} alt="Icono de ver más" />
        <div className="flex flex-col justify-center mr-7">
          <span>Más medios de pago</span>
          <Link className="text-[13px] text-link" href="/">
            Ver todos
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PaymentInfo;
