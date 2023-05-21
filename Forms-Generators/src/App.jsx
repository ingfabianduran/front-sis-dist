import CreateSurvey from "./pages/CreateSurvey";
import { createTheme, ThemeProvider } from "@mui/material";
import "./styles/main.css";

const theme = createTheme({
  typography: {
    fontFamily: ['"Fira Sans"', "sans-serif"].join(',')
  }
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CreateSurvey />
      </ThemeProvider>
    </>
  );
}

export default App;
