import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignPage from "./pages/SignPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem("access_token")
  );

  if (!authToken) {
    return (
      <Routes>
        <Route path="/" element={<SignPage setAuthToken={setAuthToken} />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/todo" />} />
      <Route path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
