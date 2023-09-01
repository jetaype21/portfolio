import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Home } from "./pages/home";
import Nabvar from "./components/navbar/Nabvar";
import { About } from "./pages/about";
import NotFound from "./pages/notFound/NotFound";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nabvar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/contacto" element={<Contact />} />
          {/* ROUTE NOT FOUND */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
