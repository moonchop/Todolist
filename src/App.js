import './App.css';
import React from 'react';
import Template from "./components/template/Template"
import Head from "./components/head/Head"
import List from "./components/list/List"

function App() {
  return (
    <div>
      <Template>
       <List/>
      </Template>
      
    </div>
  );
}

export default App;
