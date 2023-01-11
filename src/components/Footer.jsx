import React from "react";

const Footer = () => {
  const date = new Date();

  return (
    <footer
      className="bg-[#001523] text-white w-full"
      style={{ height: "250px" }}
      id="contacto"
    >
      <section
        className="w-full flex justify-around items-center gap-4"
        style={{ height: "80%" }}
      >
        <a href="/" className="text-2xl">
          JE TAYPE DEV
        </a>

        <section>
          <h2 className="text-center text-2xl">
            Contactate a travez de mis redes
          </h2>

          <section className="flex gap-3 my-4 flec justify-center">
            <a href="https://github.com/jetaype21" target={"_blank"}>
              <img
                src="https://cdn.svgporn.com/logos/github-icon.svg"
                className="bg-white w-8"
              />
            </a>
            <a href="https://www.linkedin.com/in/jetaypedev/" target={"_blank"}>
              <img
                src="https://cdn.svgporn.com/logos/linkedin-icon.svg"
                className="w-8"
              />
            </a>
          </section>
        </section>
      </section>
      <cite className="text-gray-500 text-sm text-center block">
        Todos los derechos reservados por &copy; JE TAYPE DEV{" "}
        {date.getFullYear()}{" "}
      </cite>
    </footer>
  );
};

export default Footer;
