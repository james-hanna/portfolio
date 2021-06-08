import React, { useState } from "react";
import { Switch, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Intro from "./pages/intro/intro"
import Projects from "./pages/projects/projects.js"
import "./App.css"


export default function App() {

  const [color, setColor] = useState("#fff")
  const [darkMode, setDarkMode] = useState(false)
  

  return (
    <div className="app-main-level" style={darkMode === false ? {backgroundColor: color} : {backgroundColor: "#121212"}}>
      <Navbar setColor={setColor} darkMode={darkMode} setDarkMode={setDarkMode} />
      <hr />
      <Switch>
        <Route path="/contact" component={() => <Contact darkMode={darkMode} />} />
        <Route path="/about" component={() => <About darkMode={darkMode} />} />
        <Route path="/projects" component={() => <Projects darkMode={darkMode} />} />
        <Route path="/intro" component={() => <Intro darkMode={darkMode} />} />

        <Route path="/" exact component={() => <Home darkMode={darkMode} />} />
      </Switch>
    </div>
  );
}
