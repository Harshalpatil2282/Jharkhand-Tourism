import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from "./features/auth/pages/LoginPage";

function App() {
  return (  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
