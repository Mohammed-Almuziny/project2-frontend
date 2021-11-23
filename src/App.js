import { Route, Routes } from "react-router-dom";

import { Header } from "../src/components/Header";
import { Quizzes } from "./components/Quizzes";
import { History } from "../src/components/History";
import { Quiz } from "./components/Quiz";
import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/LogIn";
import "./app.css";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/quizzes" element={<Quizzes />} />
        <Route exact path="/quiz/:id" element={<Quiz />} />
        <Route exact path="/history" element={<History />} />        
        <Route exact path="/SignUp" element={<SignUp />} />
        <Route exact path="/LogIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;
