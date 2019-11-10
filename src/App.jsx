import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// Layout
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

// Pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Redirect to="/"></Redirect>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;