import { useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import {LayoutPag} from './Layout';
import './App.css'

export const App = ()=>{
  return (
    <BrowserRouter>
      <LayoutPag />
    </BrowserRouter>
  );
}