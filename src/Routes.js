import React from "react";
import { BrowserRouter as Routes,Route} from "react-router-dom";
import Login from "./containers/Login";
import Schedule from "./components/Schedule";
//import Login from "./containers/Login";

export default function Links() {
  return (
    <Routes>
          <Route path="/login" component={Login}/>
    </Routes>
  );
}