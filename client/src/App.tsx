import "./App.scss";
import MainContent from "./components/Main";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./components/auth/Login";
import Join from "./components/auth/Join";
import NotFound from "./components/core/NotFound";
import PrivateRoute from "./components/auth/ProtectedRoute";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PrivateRoute><MainContent /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
