import { Route, Routes } from "react-router-dom";

import { Header } from "../src/components/Header";
import { SignUp } from "./components/SignUp";
import {LogIn} from "./components/LogIn"
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/LogIn" element={<LogIn />} />
      </Routes>
      <h1>hallo world</h1>
    </div>
  );
}

export default App;
