import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import { Tech } from "./components/tech/Tech"
import { Projetos } from "./components/projetos/Projetos";
import { Contato } from "./components/contato/Contato";
import { Footer } from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer style={{ position: "fixed" }} />
      <NavBar />
      <Banner />
      <Tech />
      <Projetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
