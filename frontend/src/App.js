import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode); // grab information from the store
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            <Routes>
              <Route>
                <Route path="/" element={<LoginPage />} />
                <Route
                  path="/home"
                  element={<HomePage />}
                />
                <Route
                  path="/profile/:userId"
                  element={<ProfilePage />}
                />
              </Route>
            </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
