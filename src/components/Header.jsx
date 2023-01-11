import React from "react";
import developer from "../assets/developer.svg";

const Header = () => {
  return (
    <header
      className="w-full bg-[#00253E] text-white"
      style={{ height: "calc(100vh - 56px)" }}
    >
      <section
        className="mx-auto flex justify-around h-full items-center"
        style={{ width: "95%", maxWidth: "1200px" }}
      >
        <img src={developer} className="w-36 sm:w-96 md:flex-1" />
        <section className="flex-1">
          <h2 className="text-3xl font-bold">Juan Eber Taype Escobar</h2>
          <p className="text-sm md:text-lg md:w-4/5 text-slate-300 pt-2">
            Apasionado por la creación de sitios web excepcionales y siempre
            buscando nuevas formas de mejorar el rendimiento de los sitios web y
            aplicaciones web.
          </p>
          <a
            download
            href=""
            className="p-2 mt-2 bg-[#00111C] block max-w-max text-slate-300 rounded-lg"
          >
            Descargar CV
          </a>
        </section>
      </section>
    </header>
  );
};

export default Header;
