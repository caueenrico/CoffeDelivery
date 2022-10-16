

export function App() {
  return(
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
                 <Router />
       
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}


