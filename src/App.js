import './app.scss';
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Team from "./components/team/Team";
import Contact from "./components/contact/Contact";

import {useState} from "react";

function App() {
  const [menuOpen,setMenuOpen]=useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Home/>
        <Projects/>
        <Team/>
        <Contact/>
   
        </div>
    </div>
   
  );
}

export default App;
