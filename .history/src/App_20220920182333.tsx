

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CyclesContextProvider>
          <Router />
       
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


