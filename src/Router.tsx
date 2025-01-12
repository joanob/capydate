import { BrowserRouter, Route, Routes } from "react-router";
import LoginPage from "./pages/auth/Login";
import SignupPage from "./pages/auth/Signup";
import { useAppStore } from "./data";
import { useEffect } from "react";
import CalendarPage from "./pages/tasks/Calendar";
import DayTasksPage from "./pages/tasks/DayTasks";
import TimeBlockingPage from "./pages/tasks/TimeBlocking";

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
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/today" element={<DayTasksPage />} />
          <Route path="/time-blocking" element={<TimeBlockingPage />} />
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
