import {BrowserRouter} from "react-router-dom";
import { createRoot } from 'react-dom/client'
import {GlobalStyle} from "./styles/GlobalStyle.js";
import {App} from './App.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <GlobalStyle />
        <App />
    </BrowserRouter>,
);
