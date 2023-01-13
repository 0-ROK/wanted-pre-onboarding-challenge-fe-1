import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import SignPage from "./pages/SignPage";
import TodoPage from "./pages/TodoPage";

function App() {
  const [authToken, setAuthToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  if (!authToken) {
    return (
      <Routes>
        <Route
          path="/auth"
          element={<SignPage setAuthToken={setAuthToken} />}
        />
        <Route path="*" element={<Navigate replace to="/auth" />} />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<TodoPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  );
}

export default App;
