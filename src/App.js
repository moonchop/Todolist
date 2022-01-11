import './App.css';
import React from 'react';
import Template from "./components/template/Template"
import Head from "./components/head/Head"
import List from "./components/list/List"
import Time from "./components/time/Time"
function App() {
  return (
    <div>
      <Template>
       <Head/>
       <List/>
      </Template>
      
    </div>
  );
}

export default App;
