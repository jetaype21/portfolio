import { AiOutlineHome, AiOutlineMail, AiOutlineTrophy } from "react-icons/ai";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const Nabvar = () => {
  const options = [
    {
      icon: <AiOutlineHome size={"40px"} />,
      label: "Home",
      link: "/",
    },
    {
      icon: <VscAccount size={"40px"} />,
      label: "Sobre mi",
      link: "/sobre-mi",
    },
    {
      icon: <AiOutlineTrophy size={"40px"} />,
      label: "Proyectos",
      link: "/proyectos",
    },
    {
      icon: <AiOutlineMail size={"40px"} />,
      label: "Contacto",
      link: "/contacto",
    },
  ];

  return (
    <nav className="bg-slate-800 w-full h-14 fixed bottom-0 md:right-0 z-50 flex md:flex-col md:w-16 md:h-2/3">
      {options &&
        options.map((option, index) => (
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                color: isActive ? "black" : "white",
                background: isActive
                  ? "linear-gradient(to top left, #f89b29 -4%, #ff0f7b 77%)"
                  : "inherit",
              };
            }}
            to={option.link}
            key={index}
            className={`flex-1 p-1 text-center flex flex-col justify-center items-center h-full gap-1`}
          >
            {option.icon}
            <span className="text-inherit text-xs">{option.label}</span>
          </NavLink>
        ))}
    </nav>
  );
};
export default Nabvar;
