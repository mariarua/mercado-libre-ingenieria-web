import React from "react";
import Image from "next/image";
import logo from "../public/logo-header.svg";
import SearchBar from "./SearchBar";
import ToolBar from "./ToolBar";

function Header() {
  return (
    <div className="bg-primary w-screen">
      <div className="flex py-2">
        <Image
          className="ml-40 mr-8"
          src={logo}
          alt="Logo de Mercado Libre"
          width={134}
          height={34}
        />
        <SearchBar />
      </div>
      <ToolBar />
    </div>
  );
}

export default Header;
