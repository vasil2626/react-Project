import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDo from './Components/ToDo';
// import Description from './Product/Description';
// import Residence from './location/loc';
// import Names from './names/names';
// import Price from './Product/Price';
// import Product from './Product/Product';
// import Prof from './profesion/profesion';




function App() {
  return (
    <div className="App">
     {/* <Names name="john" surname="smith" age="80"/>
     <Prof prof="web developer"/>
     <Residence res="u.s.a" /> */}
     {/* <Product /> */}
     {/* <Price 
     price="10$"
     reat={ 480 }
     name= " Banan"
     /> */}
     <ToDo/>
    </div>
  );
}

export default App;
