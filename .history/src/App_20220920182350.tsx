import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./Router";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
}
