import "./App.css";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Registration from "./pages/register/Registration";
import Login from "./pages/login/Login";
function App() {
  return (
    <>
      <Browser>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Routes>
      </Browser>
    </>
  );
}

export default App;
