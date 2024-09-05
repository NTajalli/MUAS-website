import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import AboutPage from './pages/AboutPage';  // Import all pages
import CompetitionPage from './pages/CompetitionPage';
import ApplyPage from './pages/ApplyPage';
import ProgressPage from './pages/ProgressPage';
import ResourcesPage from './pages/ResourcesPage';
import SponsorsPage from './pages/SponsorsPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Custom theme with red for primary headings
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f',
    },
  },
  typography: {
    h1: {
      color: '#d32f2f',
    },
    h2: {
      color: '#d32f2f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<AboutPage />} />
            <Route path="/competition" element={<CompetitionPage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/sponsors" element={<SponsorsPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
