import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { GoRepoForked } from "react-icons/go";
import SpanComponent from "./components/SpanComponent/SpanComponent";
import devmapImage from "../../assets/devmap.png";
import qrImage from "../../assets/qrRestaurant.png";
import docImage from "../../assets/doc.png";

const Projects = () => {
  const token = import.meta.env.VITE_SECRET_GITHUB;
  const username = "jetaype21";
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
      console.log(token);
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
      image: qrImage,
      url: "https://restaurantqr.netlify.app/",
    },
    {
      name: "DevEd Roadmap",
      techs: ["NODE JS", "REACT JS", "MONGO DB", "EXPRESS"],
      duration: "2 meses",
      rol: "Full Stack",
      description:
        "DevEd Roadmap, sitio webe diseñada para acompañar y guiar a los nuevos desarrolladores en su emocionante viaje hacia la maestría en la programación.",
      image: devmapImage,
      url: "https://rutadev.netlify.app/",
    },
    {
      name: "DocConnect",
      techs: ["PostgreSQL", "Git", "GitHub"],
      duration: "1 mes",
      rol: "Modelador de base de datos",
      description:
        "modelamiento de una base de datos de una clínica DocConnect, realizando una buena normalización de tablas para evitar la duplicidad de información",
      image: docImage,
      url: "https://github.com/jetaype21/bd-query",
    },
  ];

  const classTitle =
    "text-white text-3xl font-bold py-2 font-text_secondary px-6 py-4 md:px-10";
  const classSubtitle = "text-primary text-md italic py-2 ";

  useEffect(() => {
    getRepositories();
  }, []);

  return (
    <section className="bg-background min-h-screen pb-16 md:pb-4">
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
        <hr className="line" />
        <p className={`${classSubtitle}`}>
          Tranformando ideas a la realidad digital.
        </p>

        <section className="">
          {projects &&
            projects.map((project, index) => (
              <section className="md:w-11/12 py-2 px-4 flex flex-col gap-6 md:gap-11 md:flex-row bg-slate-900 mb-4">
                <article className="flex-1" key={index}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </article>
                <article className="flex-1">
                  <Link
                    to={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-2xl text-white font-bold hover:text-secondary"
                  >
                    {project.name}
                  </Link>
                  <p className="text-primary text-sm md:text-md py-2">
                    {project.description}
                  </p>
                  <section>
                    <h4 className="text-secondary">Tecnologias</h4>
                    <article className="flex flex-wrap gap-2 p-2">
                      {project?.techs.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-orange-200/50 p-2 rounded"
                          style={{
                            color: "#f89b29",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </article>
                    <article className="flex flex-wrap gap-2 p-2 justify-between">
                      {" "}
                      <p className="text-secondary">
                        Duración <br />
                        <span className="text-white">
                          {project.duration}
                        </span>{" "}
                      </p>{" "}
                      <p className="text-secondary">
                        {" "}
                        Rol
                        <br />
                        <span className="text-white">{project.rol}</span>{" "}
                      </p>
                    </article>
                  </section>
                </article>
              </section>
            ))}
        </section>
      </section>
    </section>
  );
};
export default Projects;
