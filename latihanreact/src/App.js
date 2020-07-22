import React, { useState, createContext, useReducer } from 'react';
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
import HooksUseEffects from './Comonent/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CardContext';
import ProductComp from './Comonent/Hooks/Functional/ProductComp';
import HooksRecucer from './Comonent/Hooks/Functional/HookReducer';
import Tagihan from './Comonent/Hooks/Functional/Tagihan';

//import Home from './Comonent/Fungsional/Home';
//import Beranda from './Comonent/Class/Beranda';
//import './App.css';

export const keranjangContext = createContext()

const initialState = {
  jumlah: 1,
  hargasatuan: 10000,
  hargatotal: 10000
}

const reducer = (state, action) => {
  switch (action.type) {
      case 'tambah': return {
          ...state,
          jumlah: state.jumlah + 1,
          hargatotal: state.hargasatuan + (state.hargasatuan * state.jumlah)
      }
      case 'kurang': return {
          ...state,
          jumlah: state.jumlah - 1,
          hargatotal: (state.hargasatuan * state.jumlah) - state.hargasatuan
      }
      default:
          return state
  }
}

const App = () => {

  const[value, setValue] = useState(0)

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <BrowserRouter>
      <CartContext.Provider value={{value, setValue}}> 
        <NavbarComp />
        <keranjangContext.Provider value={{keranjangState: count, keranjangDispatch:dispatch}}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/mahasiswa" component={LisComp} />
          <Route exact path="/mahasiswa/tambah" component={TambahComp} />
          <Route exact path="/mahasiswa/edit" component={EditComp} />
          <Route exact path="/kelas" component={KelasComp} />
          <Route exact path="/hooks" component={HooksComp} />
          <Route exact path="/useeffects" component={HooksUseEffects} />
          <Route exact path="/produk" component={ProductComp} />
          <Route exact path="/reducer" component= {HooksRecucer} />
          <Route exact path="/tagihan" component= {Tagihan} />

          {/* <Route exact path="/detail/:id" component={DetailComp} /> */}
        </Switch>
        </keranjangContext.Provider>
      </CartContext.Provider>
    </BrowserRouter>

  );       
}
     
export default App;
