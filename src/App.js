import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import { BrowserRouter } from "react-router-dom";

function showHiringMessage() { try { window.console.log("\n%cOl\u00e1!\n%cSou um desenvolvedor Full Stack em busca de uma oportunidade!\n\n%cEntre em contato comigo através das minhas redes sociais listadas na página inicial deste portfólio!\n%chttps://marleo-portfolio.surge.sh/\n\n", "font-family: serif; font-size: 32px; color: #767676", "font-family: serif; font-size: 25px; color: rgb(144, 39, 176); font-weight: bold;", "font-family: sans-serif; font-size: 16px; line-height: 1.2rem; color: #767676", "font-family: sans-serif; font-size: 11px; text-decoration: underline; line-height: 1.2rem; color: #767676") } catch (a) { } }
showHiringMessage();

function App() {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout />
         </BrowserRouter>
      </div>
   );
}


export default App;
