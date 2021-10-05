import React, { useState, useEffect } from "react";
import JavaScriptEditor from "./JavaScriptEditor";
import PythonEditor from "./PythonEditor";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/py">
            <PythonEditor />
          </Route>

          <Route path="/">
            <JavaScriptEditor />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
