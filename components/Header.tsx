import React from "react";
import Image from "next/image";
import logo from "../public/images/logo-header.svg";
import SearchBar from "./SearchBar";
import ToolBar from "./ToolBar";

function Header() {
  return (
    <div className="bg-primary w-full">
      <div className="flex py-2 w-desktop max-w-full mx-auto">
        <Image
          className=""
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
