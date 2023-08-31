import { AboutHeader } from "./components";
import Experiencie from "./components/experiencie/Experiencie";

const About = () => {
  return (
    <section className="bg-background min-h-screen pb-16 md:pb-2">
      <AboutHeader />
      <Experiencie />
    </section>
  );
};
export default About;
