import Head from "next/head";

import { Roboto } from "next/font/google";

import Header from "@/components/Header";
import Image from "next/image";
import Banner from "@/public/Banner.svg";
import PaymentInfo from "@/components/PaymentInfo";
import ProductCard from "@/components/ProductCard";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Home() {
  return (
    <div className={roboto.className}>
      <Head>
        <title>Mercado libre</title>
        <meta name="description" content="clon de mercado libre" />
        <link
          rel="icon"
          href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.21.22/mercadolibre/favicon.svg"
        />
      </Head>
      <div className="bg-homepage">
        <Header />
        <Image
          className="w-screen mb-10"
          src={Banner}
          alt="Banner semana de la mujer "
          width={1512}
          height={34}
        />
        <div className="mx-40">
          <PaymentInfo />
          <h3 className="text-[25px] text-[#666666] font-thin">
            Ofertas{" "}
            <span className="ml-4 text-[15px] text-link font-light cursor-pointer">
              Ver todas
            </span>
          </h3>
          <div className="flex">
            <ProductCard />
            <ProductCard />
          </div>
          <h3>Probanding</h3>
        </div>
      </div>
    </div>
  );
}
