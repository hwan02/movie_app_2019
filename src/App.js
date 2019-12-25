import React from 'react';
function Potato({favorite}){
    return <h1>I like {favorite}</h1>
}
function App() {
  return <div><h1>Hello baby</h1>
  <Potato favorite="goguma"/>
  <Potato favorite="bab"/>
  <Potato favorite="koleno"/>
  </div>
}

export default App;
