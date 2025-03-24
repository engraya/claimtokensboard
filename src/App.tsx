import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./routes/PrivateRoute";
import Main from "./components/Main/Main";
import { Flowbite } from "flowbite-react";
import LoginPage from "./pages/Login/LoginPage";
import PublicRoute from "./routes/PublicRoute";
import AuthPage from "./pages/Auth/AuthPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom theme for Flowbite
const customTheme = {
  button: {
    size: {
      middle: "text-xs px-2 py-1 md:text-sm md:px-4 md:py-1.5 xl:text-base xl:px-6 xl:py-2 2xl:text-xl",
    },
  },
  pagination: {
    pages: {
      selector: {
        active: "bg-cyan-50 text-white hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white",
      },
    },
  },
  textInput: {
    field: {
      rightIcon: {
        base: "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
        svg: "h-5 w-5 text-gray-500 dark:text-gray-400 animate-spin",
      },
    },
  },
};



function App() {
  return (
      <Flowbite theme={{ theme: customTheme }}>
        <div className="bg-[#ffffff] min-h-screen">
          <Router>
            <Routes>
              <Route path="/auth" element={<PublicRoute />}>
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/auth/login" element={<LoginPage />} />
              </Route>
              <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Main />}>
                  {/* Nested routes */}
                  <Route index element={<Home />} />
                  <Route path="dashboard" element={<Home />} />
                </Route>
              </Route>
            </Routes>
            <ToastContainer />
          </Router>
        </div>
      </Flowbite>
  );
}

export default App;
