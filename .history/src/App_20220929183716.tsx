import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { HomeContext } from "./HomeContext";
import { Router } from "./Router";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/themes/global";

export function App() {
  return (

    <>
    <HomeContext/>
    </>
    // <ThemeProvider theme={defaultTheme}>
    //   <BrowserRouter>
    //     <Router />
    //   </BrowserRouter>
    //   <GlobalStyle />
    // </ThemeProvider>
  );
}
