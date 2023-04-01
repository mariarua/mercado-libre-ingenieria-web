import React from "react";

const ToolBar = () => {
  return (
    <div className="flex text-[13px] justify-between w-desktop max-w-full mx-auto py-3">
      <button className="">Ingresa tu domicilio</button>
      <nav className="text-black/50">
        <ul className="flex justify-between">
          <select
            className="bg-primary px-2"
            name="Category"
            id="Category"
            defaultValue={"Default"}
          >
            <option id="Default">Categorías</option>
          </select>
          <li className="px-4">
            <a href="#">Ofertas</a>
          </li>
          <li className="pr-4">
            <a href="#">Historial</a>
          </li>
          <li className="pr-4">
            <a href="#">Supermercado</a>
          </li>
          <li className="pr-4">
            <a href="#">Moda</a>
          </li>
          <li className="pr-4">
            <a href="#">Vender</a>
          </li>
          <li className="pr-4">
            <a href="#">Ayuda / PQR</a>
          </li>
        </ul>
      </nav>
      <div className="flex">
        <button className="mx-1">Crea tu cuenta</button>
        <button className="mx-1">Ingresa</button>
        <button className="mx-1">Mis compras</button>
      </div>
    </div>
  );
};

export default ToolBar;
