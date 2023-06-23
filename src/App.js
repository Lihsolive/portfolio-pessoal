import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { NavBar } from "./components/navbar/NavBar";
import { Banner } from "./components/banner/Banner";
import Timeline from "./components/timeline/Timeline";
import { Tech } from "./components/tech/Tech";
import { Contato } from "./components/contato/Contato";
import { Footer } from "./components/footer/Footer";

import "./App.css";
import TabProjetos from "./components/projetos/tabProjetos/TabProjetos";

function App() {
  return (
    <div className="App">
      <ToastContainer style={{ position: "fixed" }} />
      <NavBar />
      <Banner />
      <Timeline />
      <Tech />
      <TabProjetos />
      <Contato />
      <Footer />
    </div>
  );
}

export default App;
