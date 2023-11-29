import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./shared/router/routes";

function App() {
  return (
    <div className="App">
      <div>React Tests App</div>
      <Router>
        <Routes>
          {ROUTES.map(() => {
            return <Route></Route>;
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
