import { Route, Routes } from "react-router-dom";

import { Header } from "../src/components/Header";
import { SignUp } from "./components/SignUp";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/SignUp" element={<SignUp />} />
      </Routes>
      <h1>hallo world</h1>
    </div>
  );
}

export default App;
