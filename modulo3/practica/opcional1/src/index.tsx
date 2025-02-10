import React from "react";
import ReactDOM from 'react-dom';
import { GreetComponent } from "./greetComponent";

import logo from './assets/logo2.png';

const root = document.getElementById('root');

ReactDOM.render(
  <>
    <GreetComponent />
    
    <img src={logo} style={{ width: 150 }} />
  </>
  , root);