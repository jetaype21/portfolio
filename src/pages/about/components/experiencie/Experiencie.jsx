import { Link } from "react-router-dom";
import Card from "./Card";

const Experiencie = () => {
  const experiencies = [];

  const educations = [
    {
      name: "Instituto Certus",
      degree: "Diseño Y desarrollo de software",
      date: "2021 - 2024",
      city: "Lima, Perú",
    },
    {
      name: "Alura + Oracle",
      degree: "Especialización Backend",
      date: "2023 - presente",
      city: "Lima, Perú",
    },
  ];

  return (
    <section className="bg-slate-900 px-8  py-9 md:px-16 flex flex-col md:flex-row gap-4">
      <article className="flex-1">
        <Card title={"Educación"} items={educations} />
      </article>
      <article className="flex-1">
        <Card title={"Eperiencia laboral"} items={[]} />
      </article>
    </section>
  );
};
export default Experiencie;
