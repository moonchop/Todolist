import './App.css';
import React from 'react';
import Template from "./components/template/Template"
import Head from "./components/head/Head"
import List from "./components/list/List"
import Item from "./components/item/Item"
function App() {
  return (
    <div>
      <Template>
       <Head/>
       <List/>
       <Item/>
      </Template>
      
    </div>
  );
}

export default App;
