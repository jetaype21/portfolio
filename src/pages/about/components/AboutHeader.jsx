import { Link } from "react-router-dom";
import developer from "../../../assets/developer.jpg";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoReact } from "react-icons/bi";
import { Skill } from "./skill";
import { Me } from "./me";

const skills = [
  {
    title: "Desarrollador Backend",
    techs: [
      {
        name: "JavaScript",
        icon: <IoLogoJavascript size={"30px"} fill="yellow" />,
      },
      {
        name: "Nodejs",
        icon: <FaNodeJs size={"30px"} fill="green" />,
      },
      {
        name: "Express",
        icon: <SiExpress size={"30px"} fill="green" />,
      },
      {
        name: "MongoDB",
        icon: <TbBrandMongodb size={"30px"} fill="green" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={"30px"} fill="blue" />,
      },
    ],
  },
  {
    title: "Desarrollador Frontend",
    techs: [
      {
        name: "HTML 5",
        icon: <AiFillHtml5 size={"30px"} fill="orange" />,
      },
      {
        name: "CSS 3",
        icon: <BiLogoCss3 size={"30px"} fill="skyblue" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss size={"30px"} fill="skyblue" />,
      },
      {
        name: "Javascript",
        icon: <IoLogoJavascript size={"30px"} fill="yellow" />,
      },
      {
        name: "React",
        icon: <BiLogoReact size={"30px"} fill="skyblue" />,
      },
    ],
  },
];

const AboutHeader = () => {
  return (
    <article className="flex flex-col md:flex-row">
      {/* section left */}
      <section className="min-h-screen flex w-full relative w-full md:flex-1">
        <h2 className="absolute top-0 text-white text-center text-4xl font-bold w-full py-3 md:w-9/12 bg-black md:top-4 md:-translate-x-1/2 md:left-1/2">
          Juan Taype
        </h2>
        <img
          src={developer}
          alt="img developer - juantaype"
          className="min-h-full w-full object-cover object-center "
        />
        {/* section title and  button */}
        <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
          <p className="text-white text-2xl font-bold bg-black/50">
            ¿Nesecitas un desarrollador?
          </p>
          <Link to={"/contacto"} className="button">
            Contactar
          </Link>
        </section>
      </section>
      {/* section right */}
      <section className=" py-4 md:py-5 md:flex-1">
        <h2 className="px-3 md:px-12 md:pt-5 text-white text-3xl font-bold w-full py-2 font-text_secondary">
          Me especializo en
        </h2>
        <h3 className="px-3 md:px-12 md:pb-5 subtitle text-2xl">
          Backend - FrontEnd - APIs
        </h3>
        <section className="bg-slate-900 px-3 md:px-12 py-4 mt-2">
          {skills &&
            skills.map((skill, index) => (
              <Skill key={index} title={skill.title} techs={skill.techs} />
            ))}
        </section>
        <Me />
      </section>
    </article>
  );
};
export default AboutHeader;
