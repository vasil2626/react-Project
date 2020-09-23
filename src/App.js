import React from 'react';
import './App.css';
import Residence from './location/loc';
import Names from './names/names';
import Prof from './profesion/profesion';




function App() {
  return (
    <div className="App">
     <Names name="john" surname="smith" age="80"/>
     <Prof prof="web developer"/>
     <Residence res="u.s.a"/>
      
      
    </div>
  );
}

export default App;
