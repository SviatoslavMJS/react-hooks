import React from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container pt-4">
        <Home />
        <button className="btn btn-success">button</button>
      </div>
    </React.Fragment>

  )
}

export default App;
