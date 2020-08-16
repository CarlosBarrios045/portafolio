import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Layout
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Loader from "./components/Atoms/Loader";

// Pages
const Home = lazy(() => import("./pages/Home"));
const Projects = lazy(() => import("./pages/Projects"));

import "./styles/main.scss";

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Redirect to="/"></Redirect>
        </Switch>
        <Footer />
      </Suspense>
    </Router>
  );
};

export default App;
