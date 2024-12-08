import { useState, useEffect } from 'react';
import { styled, ThemeProvider } from 'styled-components';
import { Link, useLocation, useNavigate, Outlet } from "react-router-dom";
import theme from './util/theme';
import Header from './components/Header';
import Footer from './components/Footer';

const Content = styled.div`
  display: flex;
  margin-top: 20px;
  height: calc(100vh - 160px); /* Adjust for header and footer height */
  color: #333;
`;


const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #fafafa;
  border-left: 2px solid #ccc;
  overflow-y: auto; /* Allows scrolling inside the main content if needed */
`;

const ErrorBanner = styled.div`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 5px;
`;
function App() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [showRenderError, setShowRenderError] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Reset error message on route change
  useEffect(() => {
    setErrorMessage(null);
    setShowRenderError(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <Header /> 
      <Content>
        <MainContent>
          {errorMessage && <ErrorBanner>{errorMessage}</ErrorBanner>}
          <Outlet />
        </MainContent>
      </Content>
      <Footer />
    </ThemeProvider>
  )
}

export default App
