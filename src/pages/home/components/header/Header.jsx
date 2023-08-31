import img_code from "../../../../assets/Coding-bro.png";

const Header = () => {
  return (
    <section className="w-11/12 md:max-h-screen mx-auto">
      <img
        src={img_code}
        className="block mx-auto w-full  md:max-w-screen-sm "
        alt="developer"
      />
      <h2 className="subtitle text-6xl text-center capitalize font-text_secondary font-bold">
        Juan Taype
      </h2>
    </section>
  );
};
export default Header;
