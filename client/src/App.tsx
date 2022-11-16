import "./App.scss";
import MainContent from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/auth/Login";
import Join from "./components/auth/Join";
import NotFound from "./components/core/NotFound";

function App() {

  return (
    <div className="App">
      <Router>
        <Route path="/" element={<MainContent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
        <Route path="*" element={<NotFound />} />
      </Router>
    </div>
  );
}

export default App;
