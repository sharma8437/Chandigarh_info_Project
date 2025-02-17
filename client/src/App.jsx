import "./App.css";

import Home from "./pages/Home";

import LoginPage from "./pages/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SingupPage";
import EmailVerify from "./pages/EmailVerify";
import { ToastContainer } from "react-toastify";
import { AppContextProvider } from "./context/AppContext";

import ResetPassword from "./pages/ResetPassword";
import About from "./pages/About";
import PlaceDetails from "./pages/PlaceDetails";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <AppContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/info-chd" element={<InfoChandigarh />} /> */}
            <Route path="/login" element={<LoginPage />} />
           
            <Route path="/register" element={<SignupPage />} />
            <Route path="/email-verify" element={<EmailVerify />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            <Route path="/places/:id" element={<PlaceDetails />} />
          </Routes>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
