import { useState } from "react";
import "./App.css";
import LoginPage from './components/LoginPage'
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <LoginPage />
    </div>
  );
}

export default App;
