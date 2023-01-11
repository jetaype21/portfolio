import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
