import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="min-h-screen bg-background flex justify-center items-center flex-col">
      <section className="w-5/6 md:w-1/2 mx-auto">
        <span className="text-primary text-2xl">Oops!</span>
        <h2 className="text-white text-3xl">Pàgina en desarrollo...</h2>
        <hr className="line" />
        <p className="text-primary italic">
          La página que estas buscando está en desarrollo, intenta nuevamente o
          regresa al inicio de la página.
        </p>
        <Link to={"/"} className="button">
          {" "}
          Ir a inicio{" "}
        </Link>
      </section>
    </section>
  );
};
export default NotFound;
