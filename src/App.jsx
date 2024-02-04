import { useState } from "react";
import "./App.css";
import LoginPage from './components/LoginPage.jsx'
import SignupPage from "./components/SignupPage.jsx";
import Navbar from "./components/Navbar.jsx";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <LoginPage />
    </div>
  );
}

export default App;
