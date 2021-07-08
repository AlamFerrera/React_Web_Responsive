import React, {Fragment} from 'react';
import Navbar from './componentes/Navbar/navbar.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './componentes/Pages/home.jsx';
import Productos from './componentes/Pages/productos';
import Registro from './componentes/Pages/registro';
import Servicios from './componentes/Pages/servicios';

function App() {
  return (
    <Fragment>
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/productos" exact component={Productos} />
            <Route path="/servicios" exact component={Servicios} />
            <Route path="/signUp" exact component={Registro} />
          </Switch>
        </Router>
    </Fragment>
  );
}

export default App;
