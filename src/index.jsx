import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './styles/style.css';
import { TranslationProvider } from './context/TranslationContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';

const root = createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <TranslationProvider>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </TranslationProvider>
  </AuthProvider>
);
