import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Router } from './Router';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/theme/GlobalStyles';
import { AuthProvider } from './context/auth';

function App() {
  return (
    <ThemeProvider theme={defaultTheme} >
      <BrowserRouter>
        <AuthProvider>
          <Router />
        </AuthProvider>
      </BrowserRouter>
      <GlobalStyle />

    </ThemeProvider>
  )
}

export default App
