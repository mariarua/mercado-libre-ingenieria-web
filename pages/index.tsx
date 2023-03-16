import Head from "next/head";
import Image from "next/image";

import { Roboto } from "next/font/google";

import Header from "@/components/Header";
import PaymentInfo from "@/components/PaymentInfo";
import Offers from "@/components/Offers";
import Subscription from "@/components/Subscription";
import Ad from "@/components/Ad";
import Branches from "@/components/Branches";
import Discover from "@/components/Discover";
import Collections from "@/components/Collections";
import Category from "@/components/Category";
import Footer from "@/components/Footer";

import Banner from "@/public/images/novedades-principales.svg";

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
        <div className="mx-auto w-desktop max-w-full">
          <Image
            className="w-desktop max-w-full mb-10"
            src={Banner}
            alt="Banner semana de la mujer "
            width={1512}
            height={34}
          />
          <PaymentInfo />
          <Offers />
          <Subscription />
          <Ad />
          <Discover />
          <Branches />
          <Collections />
          <Category />
        </div>
        <Footer />
      </div>
    </div>
  );
}
