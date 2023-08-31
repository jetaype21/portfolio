const InfoHeader = () => {
  const information = [
    { title: "Años de experiencia", value: "--" },
    {
      title: "Proyectos realizados",
      value: "+5",
    },
  ];

  return (
    <section className="w-11/12 mx-auto flex flex-wrap gap-2 justify-center mt-4">
      {information &&
        information.map((item, index) => (
          <article className="p-2" key={index}>
            <h2 className="text-secondary text-3xl text-center font-bold capitalize font-text_secondary">
              {item.value}
            </h2>
            <p>{item.title}</p>
          </article>
        ))}
    </section>
  );
};
export default InfoHeader;
