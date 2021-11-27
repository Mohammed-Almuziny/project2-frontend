import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import { Header } from "../src/components/Header";
import { Quizzes } from "./components/Quizzes";
import { History } from "../src/components/History";
import { Create } from "./components/Create";
import { CreateQuiz } from "./components/CreateQuiz";
import { Quiz } from "./components/Quiz";
import { Register } from "./components/Register";
import { LogIn } from "./components/LogIn";
import { Setting } from "./components/Setting";
import "./app.css";

function App() {
  const [user, setUser] = useState(localStorage.getItem("user"));

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />

      <Routes>
        <Route exact path="/" element={<Quizzes />} />
        <Route exact path="/quiz/:id" element={<Quiz />} />
        <Route exact path="/history" element={<History />} />
        <Route exact path="/create" element={<Create user={user} />} />
        <Route exact path="/create/quiz" element={<CreateQuiz />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/LogIn"
          element={<LogIn user={user} setUser={setUser} />}
        />
        <Route exact path="/Setting" element={<Setting user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
