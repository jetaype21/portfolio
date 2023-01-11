import React from "react";

const Nav = () => {
  return (
    <nav className="bg-[#001523] text-white sticky top-0 w-full flex justify-between px-3 h-14 items-center">
      <h1 className="text-2xl">
        <a href="/"> JE TAYPE DEV</a>
      </h1>

      <section className="text-lg">
        <a href="#proyectos" className="mr-2">
          Proyectos
        </a>
        <a href="#contacto">Contacto</a>
      </section>
    </nav>
  );
};

export default Nav;
