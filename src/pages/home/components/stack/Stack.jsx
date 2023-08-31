import { Link } from "react-router-dom";

const Stack = () => {
  const frase =
    "Un desarrollador full-stack es como un ingeniero versátil que puede construir y desarrollar una aplicación web desde la interfaz de usuario hasta la funcionalidad subyacente.";

  return (
    <article className="w-4/5 md:3/5 mx-auto p-2">
      <h3 className="text-2xl my-4 text-center text-white">
        Full-Stack Developer
      </h3>
      <p className="text-center text-primary text-md font-text_secondary">{`"${frase}"`}</p>

      <Link to={"/contacto"} className="button m-3">
        Contacto
      </Link>
    </article>
  );
};
export default Stack;
