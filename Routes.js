import React from "react";
import { BrowserRouter as Routes,Route} from "react-router-dom";
import Home from "./containers/Home";
//import Login from "./containers/Login";

export default function Links() {
  return (
    <Routes>
          <Route path="/" component={Home}/>
    </Routes>
  );
}