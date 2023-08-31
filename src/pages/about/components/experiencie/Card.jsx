const Card = ({ title, items }) => {
  return (
    <article>
      <h2 className="text-2xl text-white font-bold flex-1">{title}</h2>
      <hr className="line" />
      <section>
        {items &&
          items.map((item, index) => (
            <article
              key={index}
              className="gap-3 items-center mt-6 border-b-2 border-slate-700 py-2"
            >
              <section className="flex justify-between w-full mb-2">
                <span className="text-white text-md md:text-lg uppercase">
                  {item.name} - {item.date}
                </span>
                <span className="font-bold text-sm md:text-md text-primary">
                  {item.city}
                </span>
              </section>

              <span className="italic text-primary py-2">{item.degree}</span>
            </article>
          ))}
      </section>
    </article>
  );
};
export default Card;
