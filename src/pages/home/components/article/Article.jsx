const Article = () => {
  const articles = [];

  return (
    <section className="bg-slate-900 p-4">
      <h2 className="text-center subtitle my-3 text-3xl">
        Artículos destacados
      </h2>
      {articles.length > 0 ? (
        articles.map((article, index) => <p key={index}>No se pudo cargar</p>)
      ) : (
        <span className="text-center text-md italic block">
          No hay árticulos publicados
        </span>
      )}
    </section>
  );
};
export default Article;
