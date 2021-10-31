import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { ThemeProvider, StyledEngineProvider } from "@mui/material";
import { theme } from "./theme";
// const theme = createTheme();
function App() {
  const content = useRoutes(routes);
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>{content}</ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
