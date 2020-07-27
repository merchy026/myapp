import React, { useState, createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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
import HooksUseEffects from './Comonent/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CardContext';
import ProductComp from './Comonent/Hooks/Functional/ProductComp';
//import HooksRecucer from './Comonent/Hooks/Functional/HookReducer';
//import Home from './Comonent/Fungsional/Home';
//import Beranda from './Comonent/Class/Beranda';
//import './App.css';

import LoginComp from './Comonent/Hooks/LoginComp'
import LoginAnggota from './Comonent/Hooks/Functional/LoginAnggota';

export const AuthContext = createContext()
//inisial state
const initalState = {
  isAuthenticated: false,
  user: null,
  token: null
  }

  const reducer = (state, action) => {
    switch(action.type) {
      case "LOGIN":
        localStorage.setItem("user", JSON.stringify(action.payload.user))
        localStorage.setItem("token", JSON.stringify(action.payload.token))
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload.user,
          }
  
  case "LOGOUT":
    localStorage.clear()
    return {
      ...state,
      isAuthenticated: false,
      user : null
    }

    default:
      return state
  } 
  }
  
  function App () {

    const[state, dispatch] = useReducer(reducer, initalState)

  return (
    <BrowserRouter>
        <NavbarComp />
          <Switch>
          <AuthContext.Provider value= {{
          state,
          dispatch
        }}>

          {!state.isAuthenticated ?
            <Redirect
              to={{
                pathname: "/loginpetugas"
              }}
            /> :
            <Redirect
              to={{
                pathname: "/loginanggota"

              }}
            />
          }
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={About} />
            <Route exact path="/calonanggota" component={LisComp} />
            <Route exact path="/calonanggota/tambah" component={TambahComp} />
            <Route exact path="/calonanggota/edit" component={EditComp} />
            <Route exact path="/info" component={KelasComp} />
            <Route exact path="/hooks" component={HooksComp} />
            <Route exact path="/useeffects" component={HooksUseEffects} />
            <Route exact path="/loginpetugas" component={LoginComp} />
            <Route exact path="/loginanggota" component={LoginAnggota} />
            {/*<Route exact path="/produk" compeonent={ProductComp} />*/}
           {/* <Route exact path="/reducer" component={HooksRecucer} />*/}
            {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
            </AuthContext.Provider>
          </Switch>
    </BrowserRouter>

  );
}

export default App;
