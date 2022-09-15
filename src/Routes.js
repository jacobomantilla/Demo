import React from "react";
import { BrowserRouter as Routes,Route} from "react-router-dom";
import Home from "./containers/Home";
import Schedule from "./components/Schedule";
//import Login from "./containers/Login";

export default function Links() {
  return (
    <Routes>
          <Route path="/" component={Home}/>
          <Route path="/" component={Schedule}/>
    </Routes>
  );
}