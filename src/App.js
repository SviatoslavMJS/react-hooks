import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Alert } from "./components/Alert";
import { Navbar } from "./components/Navbar";
import { AlertState } from "./context/Alert/AlertState";
import { GithubState } from "./context/github/GithubState.js";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{ text: "Test alert" }} />

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile/:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App;
