import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//import BoostrapComp from './Comonent/Class/BootstrapComp';
import NavbarComp from './Comonent/Fungsional/NavbarComp';
import HomePage from './Comonent/Fungsional/HomePage';
import About from './Comonent/Fungsional/AboutComp';
import { Form } from 'reactstrap';
//import DetailComp from './Comonent/Fungsional/DetailComp';
import LisComp from './Comonent/Class/ListComp';
import TambahComp from './Comonent/Class/Tambah';
import EditComp from './Comonent/Class/EditComp';
import KelasComp from './Comonent/Hooks/Class/KelasComp';
import HooksComp from './Comonent/Hooks/Functional/HooksComp';

//import Home from './Comonent/Fungsional/Home';
//import Beranda from './Comonent/Class/Beranda';
//import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <NavbarComp />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/mahasiswa" component={LisComp} />
        <Route exact path="/mahasiswa/tambah" component={TambahComp} />
        <Route exact path="/mahasiswa/edit" component={EditComp} />
        <Route exact path="/kelas" component={KelasComp} />
        <Route exact path="/hooks" component={HooksComp} />
        
       {/* <Route exact path="/detail/:id" component={DetailComp} /> */}

      </Switch>

    </BrowserRouter>

  );
}

export default App;
