import React from 'react';
import './App.css';


function Name (props){
  return (
    <div>
      {props.name.toUpperCase()}
    </div>
    
  );
}

function App() {
  return (
    <div className="App">
      <h3>hello</h3>
      < Name  name= "johan"/>
      
    </div>
  );
}

export default App;
