import React from "react";
import Home from "./pages/Home";
import NewCard from "./pages/formCard";
import NotFound from "./pages/NotFound";
import NavBar from "./component/NavBar";
import Banner from "./component/Banner";
import AddCurso from "./pages/newCard";
import ListaDePersonajes from "./component/ListaDePersonajes";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Banner />
      <Switch>
        <Route exact path="/" component={ListaDePersonajes}></Route>
        <Route exact path="/nuevo" component={AddCurso}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
