import React from "react";

const ToolBar = () => {
  return (
    <div className="flex text-[13px] w-full py-3">
      <button className="ml-44 mr-20">Ingresa tu domicilio</button>
      <nav className="text-black/60 mr-36">
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
      <div className="flex mr-40">
        <button className="mx-1">Crea tu cuenta</button>
        <button className="mx-1">Ingresa</button>
        <button className="mx-1">Mis compras</button>
      </div>
    </div>
  );
};

export default ToolBar;
