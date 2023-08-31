const Skill = ({ title, techs }) => {
  return (
    <article className="mt-6">
      <h3 className="border-l-4 pl-3 border-orange-500 text-white font-text_secondary md:text-xl">
        {title}
      </h3>

      <section className="grid grid-cols-2 md:grid-cols-2 gap-6 text-md mt-3">
        {techs.map((tech, index) => (
          <section className="flex gap-3 items-center" key={index}>
            {tech.icon}
            <span className="text-white font-bold text-sm md:text-md">
              {tech.name}
            </span>
          </section>
        ))}
      </section>
    </article>
  );
};
export default Skill;
