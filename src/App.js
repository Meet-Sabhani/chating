import React, { useContext, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyle";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import { Singup } from "./pages/Singup";
import { Home } from "./pages/Home";
import { ThemeProvider } from "styled-components";
import Theme from "./styles/theme";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    console.log("currentUser: ", currentUser);
  }, [currentUser]);

  const ProtectedRoute = ({ children }) => {
    if (currentUser || undefined || null) {
      <Navigate to={"/"} />;
    }
    return children;
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Singup />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
};

export default App;
