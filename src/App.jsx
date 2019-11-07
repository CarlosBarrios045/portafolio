import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './styles/main.scss';

// Layout
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';

const App = () => {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path={"/projects"} component={Projects} />
        </Switch>
      <Footer />
    </Router>
  );
};

export default App;