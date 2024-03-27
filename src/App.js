import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignUp } from "./components/SignUp";
import { Body } from "./components/Body";
import { SignIn } from "./components/SignIn.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Body" element={<Body />} />
        <Route path="/" element={<SignIn />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
