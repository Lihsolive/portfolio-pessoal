import 'bootstrap/dist/css/bootstrap.min.css'

import { NavBar } from "./components/navbar/NavBar"
import { Banner } from "./components/banner/Banner"
import { Skills } from "./components/skills/Skills"
import { Projetos } from './components/projetos/Projetos'

import './App.css';

function App() {
  return (
    <div className="App">  
      <NavBar />   
      <Banner />
      <Skills />
      <Projetos />
    </div>
  );
}

export default App;
