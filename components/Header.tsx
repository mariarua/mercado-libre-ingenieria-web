import React from "react";
import Image from "next/image";
import logo from "../public/logo-header.svg";

function Header() {
  return (
    <div className="bg-primary">
      <div className="flex ">
        <Image src={logo} alt="Logo de Mercado Libre" width={120} height={35} />
        <h2>Buscar productos, marcas y más...</h2>
      </div>
      <nav className="">
        <ul>
          <li>
            <a href="#">Ingresa tu domicilio</a>
          </li>
          <li>
            <a href="#">Categorías -buscar flecha a abajo</a>
          </li>
          <li>
            <a href="#">Ofertas</a>
          </li>
          <li>
            <a href="#">Historial</a>
          </li>
          <li>
            <a href="#">Supermercado</a>
          </li>
          <li>
            <a href="#">Moda</a>
          </li>
          <li>
            <a href="#">Vender</a>
          </li>
          <li>
            <a href="#">Ayuda / PQR</a>
          </li>
        </ul>
      </nav>
      <div>Crea tu cuenta Ingresa Mis compras</div>
    </div>
  );
}

export default Header;
