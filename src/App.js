
// import LazyLoadsss from "./Component2/LazyLoading/LazyLoad";
// import LazyLoad from './Component2/LazyLoading/LazyLoad';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutRount from "./Routing/AboutRount";
import HomeRount from "./Routing/HomeRount";
import { createContext, useContext } from "react";


function App() {


  return (


<BrowserRouter>
  <Routes>
  
    <Route path="/" element={<HomeRount/>}/>
    <Route path="about/:id" element={<AboutRount/>}/>

  </Routes>
</BrowserRouter>

  );
}

export default App;
