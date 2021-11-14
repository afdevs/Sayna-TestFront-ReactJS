import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Layout } from './pages/components/layouts/Layout';
import { Section1 } from './pages/components/Section1';
import { Section2 } from './pages/components/Section2';
import { Section3 } from './pages/components/Section3';

function App() {
  const theme = createTheme({
    typography: {
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "CircularStd",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  
    palette: {
      primary: {
        main: '#fa586c',
      },
      secondary: {
        main: '#eea284',
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
      <CssBaseline/>
      <Layout>
        <Section1/>
        <Section2/>
        <Section3/>
      </Layout>
    </BrowserRouter>

    </ThemeProvider>
  );
}

export default App;
