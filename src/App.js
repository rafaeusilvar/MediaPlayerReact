import {BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Contato from "./Pages/Contato";
import Titles from "./Components/Titles";
import Appbar from "./Components/Appbar";
import MultiActionAreaCard from "./Components/MultiActionAreaCard";
import Player from "./Components/Player";

function App(){
  
  return (  
    <>
    < Appbar />
    < Home />
    < Titles />
    < MultiActionAreaCard />
    < Player />
    < Contato />
    < BrowserRouter>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/contato" exact element={<Contato/>} />
    </Routes>
    </BrowserRouter>  
    </>
  );
}



export default App;
