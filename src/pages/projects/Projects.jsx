import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import SpanComponent from "./components/SpanComponent/SpanComponent";

const Projects = () => {
  const username = "jetaype21";
  const token = "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";
  const url = `https://api.github.com/users/${username}/repos`;
  const headers = {
    Authorization: `token ${token}`,
  };

  const LoaderElement = () => <article className="custom-loader"></article>;

  // state array repos and loading
  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getRepositories = async () => {
    // get repositories with axios
    try {
      setLoading(true);
      const { data } = await axios.get(url, { headers });
      setRepositories(data.reverse());
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const projects = [
    {
      name: "QR restaurant",
      techs: ["NODE JS", "REACT JS", "MONGO DB", "EXPRESS"],
      duration: "2 meses",
      rol: "Full stack",
      description:
        "[QR restaurant]! 💡💻 una plataforma digital única que conecta a restaurantes con sus clientes de una manera moderna y eficiente.",
      image: "",
    },
    {
      name: "DevEd Roadmap",
      techs: ["NODE JS", "REACT JS", "MONGO DB", "EXPRESS"],
      duration: "2 meses",
      rol: "Full Stack",
      description:
        "DevEd Roadmap, sitio webe diseñada para acompañar y guiar a los nuevos desarrolladores en su emocionante viaje hacia la maestría en la programación.",
      image: "",
    },
    {
      name: "DocConnect",
      techs: ["PostgreSQL", "Git", "GitHub"],
      duration: "1 mes",
      rol: "Modelador de base de datos",
      description:
        "modelamiento de una base de datos de una clínica DocConnect, realizando una buena normalización de tablas para evitar la duplicidad de información",
      image: "",
    },
  ];

  const classTitle =
    "text-white text-3xl font-bold py-2 font-text_secondary px-6 py-4 md:px-10";
  const classSubtitle = "text-primary text-md italic py-2 ";

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <section className="bg-background min-h-screen pb-16">
      {/* repositorios */}
      <section className="px-4 py-4 md:px-8">
        <h2 className={`${classTitle}`}>Mis proyectos</h2>
        <hr className="line" />
        <p className={`${classSubtitle}`}>Descrubre mis proyectos en github</p>
        {loading ? (
          <article className="flex justify-center items-center h-40 bg-slate-900">
            <LoaderElement />
          </article>
        ) : error ? (
          <article className="flex justify-center items-center h-40 bg-slate-900">
            <p>Hubo un error</p>
          </article>
        ) : (
          <article className="flex justify-center items-center min-h-40 bg-slate-900 md:w-11/12">
            {/* revertir array y cortar los 3 primeros */}
            <article className="flex flex-col gap-4 w-full md:flex-row md:flex-wrap">
              {repositories &&
                repositories.slice(0, 3).map((repo, index) => (
                  <section
                    key={index}
                    style={{
                      background:
                        "linear-gradient(to top left, #f89b29 -4%, #ff0f7b 77%)",
                    }}
                    className="flex-1 flex flex-col gap-1 justify-between"
                  >
                    <section className="p-3">
                      <Link
                        to={repo.html_url}
                        className="text-secondary py-4 font-text_secondary"
                      >
                        <span className="text-md text-black capitalize">
                          {repo.full_name.split("/")[0]}/
                        </span>
                        <span className="text-md text-secondary font-bold">
                          {repo.full_name.split("/")[1]}
                        </span>
                      </Link>
                      <p className="text-white text-md py-2 text-background">
                        {repo.description
                          ? repo.description
                          : "No se encontró una descripción en README.md"}
                      </p>
                    </section>
                    <section className="bg-white flex justify-between p-3 hover:bg-black hover:text-white w-full">
                      <span>{repo?.language}</span>
                      <SpanComponent
                        icon={<AiOutlineStar color="yellow" />}
                        data={repo?.stargazers_count}
                      />
                      <SpanComponent
                        icon={<GoRepoForked color="green" />}
                        data={repo?.stargazers_count}
                      />
                    </section>
                  </section>
                ))}
            </article>
          </article>
        )}
      </section>

      {/* projects */}
      <section className="px-4 py-4 md:px-8">
        <h2 className={`${classTitle}`}>Últimos proyectos</h2>
        <p className={`${classSubtitle}`}>
          Tranformando ideas a la realidad digital.
        </p>
      </section>
    </section>
  );
};
export default Projects;
