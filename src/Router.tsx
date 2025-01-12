import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/Login";
import SignupPage from "./pages/auth/Signup";
import { useAppStore } from "./data";
import { useEffect } from "react";

const Router = () => {
  const { isSessionChecked, user, checkSession } = useAppStore();

  useEffect(() => {
    if (!isSessionChecked) {
      checkSession();
    }
  }, []);

  if (!isSessionChecked) {
    return <div>Checking session</div>;
  }

  if (user.id) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/calendar" element={<SignupPage />} />
          <Route path="/today" element={<SignupPage />} />
          <Route path="/time-blocking" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
