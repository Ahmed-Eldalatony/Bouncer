import {useEffect,createContext,useState,React} from "react";
import{Routes,Route, Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Home } from "./Components/Home";
import { Mainbar } from "./Components/Mainbar";
import './style/index.css';
import Signup from "./pages/Sign-up";
import Signin from "./pages/Sign-in";
import { BestSeller } from "./Components/BestSeller";
function App() {
  return (
    
    <div className="App">
 {/* <Mainbar/> */}
<Routes>
  <Route element={<Mainbar/>} >
  <Route path="/" element={<Home />} /> 
    <Route path="/sign-in" element={<Signin />} /> 
    <Route path="/sign-up" element={<Signup />} />
    </Route>
</Routes>
    </div>
);
}

export default App;
// export  {renderProducts} ;
