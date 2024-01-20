import './App.css';
// import { Nav } from './component/dashboard/header/Nav.js';
import { Footer } from "./component/dashboard/footer/Footer.js";
import { Router } from "./Router.js";
// import { BrowserRouter, Routes, Route } from "react-router-dom"; // STEP-2, creating router and links to navigate on pages

function App() {
  return (
    <div className="App">
      <Router/>
      <Footer/>
    </div>
  );
}

export default App;
