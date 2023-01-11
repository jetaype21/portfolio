import React from "react";
import "./projects.css";

const Projects = () => {
  return (
    <main
      id="proyectos"
      className="text-white mx-auto"
      style={{
        width: "95%",
        maxWidth: "1024px",
        minHeight: "calc(100vh - 56px)",
      }}
    >
      <h2 className="text-2xl text-center">Mis proyectos</h2>

      <section className="mt-3">
        <article className="mt-3 flex items-center containerPages">
          <section className="flex-1 pageContent h-full">
            <iframe
              src="https://gym2022.netlify.app/"
              className="h-full w-full rounded-xl"
            ></iframe>
          </section>
          <section className="flex-1 containerText ml-3 text-gray-300 text-sm md:text-lg">
            <h2 className="text-2xl text-center text-white my-3">Gym 2022</h2>
            <p>
              La página web es fácil de usar y proporciona toda la información
              necesaria sobre los productos o servicios ofrecidos, que se
              muestran en una forma clara y atractiva.
            </p>
            <section className="flex gap-3">
              <img
                src="https://cdn.svgporn.com/logos/react.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/css-3.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/html-5.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/javascript.svg"
                className="w-6 md:w-12 mt-3"
              />
            </section>
            <section className="mt-3">
              <a
                href="https://gym2022.netlify.app/"
                target={"_blank"}
                className="p-2 rounded-lg hover:opacity-50 bg-sky-400 mr-2"
              >
                Visitar
              </a>
              <a
                target={"_blank"}
                href="https://github.com/jetaype21/Gym"
                className="p-2 rounded-lg hover:opacity-50 bg-sky-800 mr-2"
              >
                github
              </a>
            </section>
          </section>
        </article>
        <article className="mt-3 flex items-center containerPages">
          <section className="flex-1 containerText ml-3 text-gray-300 text-sm md:text-lg">
            <h2 className="text-2xl text-center text-white my-3">Climator</h2>
            <p>
              La página web es fácil de usar y proporciona toda la información
              necesaria sobre los productos o servicios ofrecidos, que se
              muestran en una forma clara y atractiva.
            </p>
            <section className="flex gap-3">
              <img
                src="https://cdn.svgporn.com/logos/react.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/css-3.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/html-5.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/javascript.svg"
                className="w-6 md:w-12 mt-3"
              />
            </section>
            <section className="mt-3">
              <a
                href="https://jetaype21.github.io/climaApi/"
                target={"_blank"}
                className="p-2 rounded-lg hover:opacity-50 bg-sky-400 mr-2"
              >
                Visitar
              </a>
              <a
                target={"_blank"}
                href="https://github.com/jetaype21/climaApi"
                className="p-2 rounded-lg hover:opacity-50 bg-sky-800 mr-2"
              >
                Github
              </a>
            </section>
          </section>
          <section className="flex-1 pageContent h-full">
            <iframe
              src="https://jetaype21.github.io/climaApi/"
              className="h-full w-full rounded-xl"
            ></iframe>
          </section>
        </article>
        <article className="mt-3 flex items-center containerPages">
          <section className="flex-1 pageContent h-full">
            <iframe
              src="https://jetaype21.github.io/pockeApi/"
              className="h-full w-full rounded-xl"
            ></iframe>
          </section>
          <section className="flex-1 containerText ml-3 text-gray-300 text-sm md:text-lg">
            <h2 className="text-2xl text-center text-white my-3">Pokedex</h2>
            <p>
              La página web es fácil de usar y proporciona toda la información
              necesaria sobre los productos o servicios ofrecidos, que se
              muestran en una forma clara y atractiva.
            </p>
            <section className="flex gap-3">
              <img
                src="https://cdn.svgporn.com/logos/react.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/css-3.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/html-5.svg"
                className="w-6 md:w-12 mt-3"
              />
              <img
                src="https://cdn.svgporn.com/logos/javascript.svg"
                className="w-6 md:w-12 mt-3"
              />
            </section>
            <section className="mt-3">
              <a
                href="https://jetaype21.github.io/pockeApi/"
                target={"_blank"}
                className="p-2 rounded-lg hover:opacity-50 bg-sky-400 mr-2"
              >
                Visitar
              </a>
              <a
                target={"_blank"}
                href="https://github.com/jetaype21/pockeApi"
                className="p-2 rounded-lg hover:opacity-50 bg-sky-800 mr-2"
              >
                github
              </a>
            </section>
          </section>
        </article>

        <h2 className="text-sm mt-3 text-gray-300 md:text-lg font-normal p-4 m-3 text-center">
          PARA VER MAS PROYECTOS MIOS INGRESA AL SIGUIENTE ENLACE
          <a
            href="https://github.com/jetaype21"
            target={"_blank"}
            className="mx-2 bg-sky-600 hover:opacity-50 rounded-lg p-1 text-white"
          >
            Repositorio
          </a>
        </h2>
      </section>
    </main>
  );
};

export default Projects;
