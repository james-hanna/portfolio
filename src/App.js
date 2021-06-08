import React, { useState } from "react";
import { Switch, Route } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Intro from "./pages/intro/intro"
import Projects from "./pages/projects/projects"
import "./App.css"


export default function App() {
  const [color, setColor] = useState("#fff")

  return (
    <div className="app-main-level" style={{backgroundColor: color}}>
      <Navbar setColor={setColor}/>
      <hr />
      <Switch>
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/intro" component={Intro} />

        <Route path="/" exact component={Home} />
      </Switch>
    </div>
  );
}
