import React from "react";
import "./styles.css";
import TrangChu from "./Components/TrangChu";
import BauCua from "./Components/BauCua";
import { BrowserRouter, Switch, Route } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={TrangChu} />
          <Route exact path="/game" component={BauCua} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
