import React from "react";

import Image, { StaticImageData } from "next/image";

import banner from "@/public/images/lego/banner.jpg";
import logo from "@/public/images/lego/logo.jpg";
import product1 from "@/public/images/lego/product-1.jpg";
import product2 from "@/public/images/lego/product-2.jpg";
import product3 from "@/public/images/lego/product-3.jpg";

type BrachCardProps = {
  srcBanner: StaticImageData | string;
  altBanner: string;
  srcLogo: StaticImageData | string;
  altLogo: string;
  srcProduct1: StaticImageData | string;
  altProduct1: string;
  srcProduct2: StaticImageData | string;
  altProduct2: string;
  srcProduct3: StaticImageData | string;
  altProduct3: string;
  companyName: string;
};

const BranchCard = ({
  srcBanner = banner,
  altBanner = "Banner de legos",
  srcLogo = logo,
  altLogo = "logo de lego",
  srcProduct1 = product1,
  altProduct1 = "Motocicleta en lego",
  srcProduct2 = product2,
  altProduct2 = "Transformer en lego",
  srcProduct3 = product3,
  altProduct3 = "Carro en lego",
  companyName = "Lego",
}: BrachCardProps) => {
  return (
    <div className="bg-white rounded-[4px] shadow-extranarrow w-full">
      <div className="mb-14 relative">
        <Image
          className="rounded-t-[4px]"
          src={srcBanner}
          alt={altBanner}
          width={340}
          height={95}
        />
        <div className="absolute top-[55px] left-[102px]">
          <Image
            className="rounded-[4px] shadow-m border-solid border-[1px]"
            src={srcLogo}
            alt={altLogo}
            width={80}
            height={80}
          />
        </div>
      </div>
      <div className="mb-6 text-center">
        <span className="font-medium text-2xl text-[#333333]">
          {companyName}
        </span>
      </div>
      <div className="flex justify-center gap-1.5 mb-5">
        <Image
          className="rounded-[4px] border-solid border-[1px]"
          src={srcProduct1}
          alt={altProduct1}
          width={70}
          height={70}
        />
        <Image
          className="rounded-[4px] border-solid border-[1px]"
          src={srcProduct2}
          alt={altProduct2}
          width={70}
          height={70}
        />
        <Image
          className="rounded-[4px] border-solid border-[1px]"
          src={srcProduct3}
          alt={altProduct3}
          width={70}
          height={70}
        />
      </div>
      <div className="mb-5 text-center">
        <span className="text-[15px] text-[#999999] cursor-pointer">
          Ver tienda
        </span>
      </div>
    </div>
  );
};

export default BranchCard;
