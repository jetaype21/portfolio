import { BsFillTelephoneFill } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import contactImg from "../../assets/tact.png";

const Contact = () => {
  const reds = [
    {
      icon: <BsFillTelephoneFill color="gray" size={"30px"} />,
      label: "Télefono:",
      value: "(+51) 935747422",
      url: "https://api.whatsapp.com/send?phone=519357747422",
    },
    {
      icon: <AiOutlineMail color="gray" size={"30px"} />,
      label: "Correo",
      value: "jetaypedev@gmail.com",
      url: "mailto:jetaypedev@gmail.com?subject=Developer",
    },
    {
      icon: <AiFillLinkedin color="gray" size={"30px"} />,
      label: "Linkedin:",
      value: "jetaypedev",
      url: "https://www.linkedin.com/in/jetaypedev",
    },
  ];

  return (
    <section className="min-h-screen px-4 py-4 md:px-8 md:py-8 bg-background pb-16 md:pb-4">
      <h2 className="text-white text-3xl font-bold">Ponte en contacto</h2>
      <h2
        className="text-orange-500 text-3xl"
        style={{
          color: "linear-gradient(to top left, #f89b29 -4%, #ff0f7b 77%)",
        }}
      >
        Hablemos sobre tu propuesta
      </h2>
      <hr className="line" />

      <p className="w-11/12 text-primary">
        ¿Estás buscando un desarrollador para tu empresa/startup u otros, o
        simplemente quieres conectarte? ¡Hagámoslo! <br />
        <br /> usa uno de estos medios para comunicarte.
      </p>

      <ul className="p-2 my-2">
        {reds &&
          reds.map((red, index) => (
            <li
              key={index}
              className="flex gap-2 items-center font-md text-white"
            >
              <span className="mb-3">{red.icon}</span>
              <span className="mb-3 text-secondary ">{red.label}</span>
              <span className="mb-3">
                <Link
                  to={red.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-0"
                >
                  {red.value}
                </Link>
              </span>
            </li>
          ))}
      </ul>
      <section className="w-11/12 md:w-2/5 md:mx-auto">
        <img src={contactImg} className="w-full" alt="img developer" />
      </section>
    </section>
  );
};
export default Contact;
