import React, { Component } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UseState from "./topics/hooks/useState";
import UseEffect from "./topics/hooks/useEffect";
import UseRef from "./topics/hooks/useRef";
import UseContext from "./topics/hooks/useContext";

export class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h1>React Js</h1>
        <Router>
          <nav style={{ marginBottom: "20px" }}>
            <Link to="/">Home</Link> | <Link to="/useState">Use State</Link> |{" "}
            <Link to="/useEffect">Use Effect</Link> |{" "}
            <Link to="/useContext">Use Context</Link> |{" "}
            <Link to="/useRef">Use Ref</Link>
          </nav>
          <Routes>
            <Route path="/useState" element={<UseState />} />
            <Route path="/useEffect" element={<UseEffect />} />
            <Route path="/useRef" element={<UseRef />} />
            <Route path="/useContext" element={<UseContext />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
